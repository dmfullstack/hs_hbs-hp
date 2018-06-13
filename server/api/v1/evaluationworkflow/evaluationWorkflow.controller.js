const async = require('async');
const evalWorkflowService = require('./evaluationWorkflow.service');

const getEvaluationWorkflowStages = function(jobId, done){
		evalWorkflowService.getEvaluationWorkflowStages(jobId, done);
}

module.exports = {
	getEvaluationWorkflowStages: getEvaluationWorkflowStages
}
