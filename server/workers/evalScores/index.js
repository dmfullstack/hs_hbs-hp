const async = require('async');

const evalCtrl = require('../../api/v1/evaluations/evaluations.controller');
const calculateEvalScores = require('./calculateEvalScores');
// const calculateScores = require('./calculateScores');
const updateEvaluationScores = require('./updateEvaluationScores');
const publishEventEvalReportReady = require('./publishEventEvalReportReady');

const logger = require('../../applogger');

module.exports = function(evalJobId, done) {
  logger.debug('Got eval Obj in evalScores workers ', evalJobId);
  try {
    async.waterfall([
      evalCtrl.findEvaluationByJobId.bind(null, evalJobId),
      calculateEvalScores,
      updateEvaluationScores.bind(null, evalJobId),
      publishEventEvalReportReady
    ], function(err, results) {
      if (err) {
        return done(err);
      }

      done();
    });
  } catch (err) {
    console.log('Error in handling evaluation scores ', err);
    done(err);
  }
};
