const request = require('superagent');
const async = require('async');

const logger = require('../../../applogger');
const config = require('../../../../server/config');

const getEvaluationWorkflowStages = function(jobId, done){
	let url = config.DP_API_BASE_URL + '/jobs/' + jobId + '/stages';
	logger.debug('Fetching evaluation workflow from ', url);

	request
	.get(url)
	.end((err, res) => {
		if(err){
			logger.error('Error in fetching evaluation workflow stages: ', err);
			done(err);
			return;
		}

		done(null, res.body);
		return;
	});
 }

module.exports = {
	getEvaluationWorkflowStages: getEvaluationWorkflowStages
}
