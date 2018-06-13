const async = require('async');

const accumulateChecks = require('./accumulateChecks');
const filterChecksByScoringMatrix = require('./filterChecksByScoringMatrix');
const calculateFinalScore = require('./calculateFinalScore');

const logger = require('../../applogger');

module.exports = function(evalObj, done) {
  try {
    async.waterfall([
      accumulateChecks.bind(null, evalObj),
      filterChecksByScoringMatrix.bind(null, evalObj),
      calculateFinalScore.bind(null, evalObj)
    ], function(err, evalScores) {
      if (err) {
        return done(err);
      }

      done(null, evalScores);
    });
  } catch (err) {
    console.log('Error in calculating evaluation scores ', err);
    done(err);
  }
};
