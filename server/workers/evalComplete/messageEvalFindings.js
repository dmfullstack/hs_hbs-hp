const evalFindingsMessenger = require('../../messengers/evaluations/evalFindings');

module.exports = function(evalObj, done) {
	evalFindingsMessenger(evalObj.jobId, done);
}