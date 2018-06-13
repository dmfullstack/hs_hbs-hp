const evalCtrl = require('../../api/v1/evaluations/evaluations.controller');

module.exports = function(evalResults, done) {
  evalCtrl.patchSubmissionEvalResults(evalResults, done);
}
