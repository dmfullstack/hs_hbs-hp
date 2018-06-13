const async = require('async');

const evalSubmnService = require('./evalSubmission.service');
const evalFinderService = require('./evalFinder.service');
const evalReportService = require('./evalReports.service');
const getRepoConfig = require('../../../getRepoConfig.js');
const filterEvalFeedbackUtil = require('./filterEvalFeedback.util');
const config = require('../../../../server/config');

const upsertSubmission = function(newSubmission, done) {
  async.waterfall([
    getRepoConfig.bind(null, newSubmission),
    evalSubmnService.submitEvalWorkflowJob.bind(null, newSubmission),
    evalSubmnService.submitNewEvaluationSubmission
  ], function(err, result) {
    done(err, result);
  });
}

const updateReEvaluation = function(submissionId, submittedBy, done) {
  async.waterfall([
     evalFinderService.getMyEvalSubmissionBySubmissionId.bind(null, submissionId),
    (evaluationObj, cb) => {
      if(config.RE_FETCH_EVALPARAMS_FOR_RE_EVAL) {
        getRepoConfig(evaluationObj.payload, (err, evalParams) => {
        if(err) {
          cb(err);
          return;
        }
        cb(null, evaluationObj, evalParams);
      });
      } else {
        //If configuration is set to not pick the evalParam freshly during re-evaluation, use the original evalParam itself
        cb(null, evaluationObj, evaluationObj.evalParams);
      }
    },
    (evaluationObj, evalParams, cb) => {
      let pastEvaluateInfo = {
        jobId: evaluationObj.jobId,
        submittedBy: evaluationObj.submittedBy,
        statusUpdateOn: evaluationObj.statusUpdateOn
      }

      if(!(evaluationObj && evaluationObj.pastEvaluations && Array.isArray(evaluationObj.pastEvaluations))){
        let pastInfo = [];
        pastInfo.push(pastEvaluateInfo);
        evaluationObj.pastEvaluations = pastInfo;
      } else {
        evaluationObj.pastEvaluations.push(pastEvaluateInfo);
      }

      let newSubmissionObj = {
        repoUrl: evaluationObj.repoUrl,
        solutionRepoUrl: evaluationObj.payload.solutionRepoUrl,
        solutionRepoRef: (evaluationObj.payload.solutionRepoRef) ? evaluationObj.payload.solutionRepoRef : "master",
        repoRef: (evaluationObj.repoRef) ? evaluationObj.repoRef: "master",
        repoReftype: (evaluationObj.repoReftype) ? evaluationObj.repoReftype : 'branch',
        solutionRepoReftype: (evaluationObj.solutionRepoReftype) ? evaluationObj.solutionRepoReftype :'branch',
        pastEvaluations: evaluationObj.pastEvaluations
      };
      cb(null, newSubmissionObj, evalParams);
    },
    evalSubmnService.submitEvalWorkflowJob,
    evalSubmnService.submitReEvaluation.bind(null, submissionId, submittedBy)
  ], function(err, result) {
    done(err, result);
  });
}

const patchSubmissionEvalResults = function(evalResults, done) {
  evalSubmnService.updateEvalResults(evalResults, done)
}

const patchEvaluationScores = function(evalJobId, evalScores, done) {
  evalSubmnService.updateEvalScores(evalJobId, evalScores, done)
}

/* THIS IS UNUSED CODE
const findMyEvalSubmissions = function(dayTS, query, {username, order, page, limit}, done) {
  evalFinderService.findUserEvalSubmissions(dayTS, query, {username, order, page, limit}, done);
}*/

const getMyEvalSubmissionByRepo = function(username, role, options, done) {
  async.waterfall([
    evalFinderService.getMyEvalSubmissionByRepo.bind(null, username, options),
    (result, cb) => {
      // Filtering is not applicable for commander roles
      if (role === 'COMMANDER') {
        cb(null, result);
        return;
      } else {
        //For non commander roles only filter for now.

        // This is done so that we can modify result.evaluations objct,
        // as other wise it is a immutable object, might have been returned from mongoose
        result.evaluations = JSON.parse(JSON.stringify(result.evaluations));
        result.evaluations = filterEvalFeedbackUtil.filterEvalFeedbackArray(result.evaluations);
        cb(null, result);
      }
    }
  ], function(err, result) {
    done(err, result);
  });
}

const getMyEvalSubmissionBySubmissionId = function(submissionId, role, done) {
  async.waterfall([
    evalFinderService.getMyEvalSubmissionBySubmissionId.bind(null, submissionId),
    (result, cb) => {
      // Filtering is not applicable for commander roles
      if (role === 'COMMANDER') {
        cb(null, result);
        return;
      } else {
        //For non commander roles only filter for now.

        // This is done so that we can modify result.evaluations objct,
        // as other wise it is a immutable object, might have been returned from mongoose
        result = JSON.parse(JSON.stringify(result));
        result = filterEvalFeedbackUtil.filterEvalFeedback(result);
        cb(null, result);
      }
    }
  ], function(err, result) {
    done(err, result);
  })
}

const findEvaluationByJobId = function(evalJobId, done) {
  evalFinderService.findEvaluationByJobId(evalJobId, done);
}

const findEvaluations = function(dayTS, query, role, { solnRepoURL, submnRepoUrl, users, order, page, limit, workflow }, done) {
  if(!dayTS || !query || !role || !done) {
    done({error: 'One or more input is invalid, please check and try again..!'});
    return;
  }

  async.waterfall([
    evalReportService.findEvaluations.bind(null, dayTS, query, { solnRepoURL, submnRepoUrl, users, order, page, limit, workflow }),
    (result, cb) => {
      // Filtering is not applicable for commander roles
      if (role === 'COMMANDER') {
        cb(null, result);
        return;
      } else {
        //For non commander roles only filter for now.

        // This is done so that we can modify result.evaluations objct,
        // as other wise it is a immutable object, might have been returned from mongoose
        result.evaluations = JSON.parse(JSON.stringify(result.evaluations));
        result.evaluations = filterEvalFeedbackUtil.filterEvalFeedbackArray(result.evaluations);
        cb(null, result);
      }
    }
  ], (err, result) => {
    done(err, result);
  });
}

const getLastEvalResult = function(username, done) {
  evalFinderService.lastSubmittedResult(username, done);
}

const getTotalEvalResult = function(username, done) {
  evalFinderService.totalSubmissionResults(username, done);
}

const getWorkflowStats = function(username, done){
  evalFinderService.aggregateWorkflowUsage(username, done);
}

const getEvaluationWorkflows = function(){
  // getting the workflows array from config
  // currently written when workflows saved to DB changes to service
  let workflows = config.DP_SUPPORTED_WORKFLOWS;
  return workflows;
}

module.exports = {
  upsertSubmission,
  patchSubmissionEvalResults,
  patchEvaluationScores,
  //findMyEvalSubmissions,
  getMyEvalSubmissionByRepo,
  getMyEvalSubmissionBySubmissionId,
  findEvaluations,
  findEvaluationByJobId,
  getLastEvalResult,
  getTotalEvalResult,
  updateReEvaluation,
  getWorkflowStats,
  getEvaluationWorkflows
}
