const evalCtrl = require('../../api/v1/evaluations/evaluations.controller');

module.exports = function(evalJobId, evalScores, done) {
  evalCtrl.patchEvaluationScores(evalJobId, evalScores, done);
}
