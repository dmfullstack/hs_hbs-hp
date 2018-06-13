const _ = require('lodash');
const logger = require('../../applogger');

module.exports = function(evalObj, evalChecks, done) {
	// if(_.has(evalObj, "evalParams.scores")) {
	if(evalObj.evalParams && evalObj.evalParams.scores) {
		let filteredChecks = evalChecks.filter((element)=> {
			return _.has(evalObj.evalParams.scores, element.name);
		});

		done(null, filteredChecks);
		return;
	} else {
		logger.error("No scoring matrix config found, selecting all..!");
		//If no scores are mentioned, every thing will be considered by default
		done(null, evalChecks);
		return;
	}
}

