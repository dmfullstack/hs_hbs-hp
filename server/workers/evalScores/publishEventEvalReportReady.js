const evalReportReadyPublisher = require('../../publishers/evalFlowEvents/evalReportReady');

module.exports = function(evalObj, done) {
	evalReportReadyPublisher(evalObj, (err, result) => {
		if(err) {
			done(err);
			return;
		}

		done(null, evalObj);
	});
}