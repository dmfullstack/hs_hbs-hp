const request = require('superagent');
const config = require('../../../../server/config');
const EvaluationModel = require('./evaluations.entity');
const logger = require('../../../applogger');
const submissionIDGen = require('./submissionIdGenerator');

/**
 *
 * Kicks off submission evaluation workflow with Distributed Pipeline
 *
 */
const submitEvalWorkflowJob = function(newSubmission, evalParams, done) {
  let reqUrl = config.DP_API_BASE_URL + '/jobs';
  let callbackUrl = config.HOBBES_HTTP_BASE_URL + "/webhooks/evaluations/jobresults";
  let jsFSBaseRepoUrl = config.JSFS_BASE_REPO_URL;

  request
    .post(reqUrl)
    .send({
      "payload": {
        "submissionRepoUrl": newSubmission.repoUrl,
        "submissionRepoRef": newSubmission.repoRef || 'master',
        "submissionRepoReftype": newSubmission.repoReftype || 'branch',
        "solutionRepoUrl": newSubmission.solutionRepoUrl,
        "solutionRepoRef": newSubmission.solutionRepoRef || 'master',
        "solutionRepoReftype": newSubmission.solutionRepoReftype || 'branch',
        "callbackUrl": callbackUrl
      },
      "templateName": ( (evalParams.workflow) ? evalParams.workflow : 'default' )
    }).then((response, err) => {
      if (err) {
        logger.error("error in submitting evaluation job to DP ", err);
        done(err, null);
        return;
      }

      let result = Object.assign(newSubmission, response.body);
      done(null, result, evalParams);
    }).catch((err) => {
      logger.error('Caught exception in submitting evaluation job to DP : ', err);
      done(err, null);
    });
}

/*
 * Create new
 */
const submitNewEvaluationSubmission = function(newSubmission, evalParams, done) {
  logger.trace('New submission request: ', newSubmission);

  let submission = new EvaluationModel();
  submission.username = newSubmission.username;
  submission.useremail = newSubmission.email;
  submission.submittedBy = newSubmission.email;
  submission.submissionId = submissionIDGen();

  submission.repoUrl = newSubmission.repoUrl;
  submission.repoRef = newSubmission.repoRef;
  submission.repoReftype = newSubmission.repoReftype;

  submission.payload.solutionRepoUrl = newSubmission.solutionRepoUrl;
  submission.payload.solutionRepoRef = newSubmission.solutionRepoRef;
  submission.payload.solutionRepoReftype = newSubmission.solutionRepoReftype;

  submission.jobId = newSubmission.jobId;
  submission.evalParams = evalParams;
  submission.status = 'EvalPending';
  submission.statusUpdateOn = submission.submittedOn = new Date();

  submission.save(function(err, savedSubmission) {
    if (err) {
      logger.debug("Error in submitting new eval submission ", err);
      done(err);
    } else {
      done(null, savedSubmission);
      return
    }
  });
}

const submitReEvaluation = function(submissionId, submittedBy, submission, evalParams, done) {

  logger.debug('Re-evaluation jobId: ', submission.jobId, ' for submission ', submissionId);
  // CHANGE this to UPDATE instead of findOneAndUpdate
  EvaluationModel.findOneAndUpdate({submissionId: submissionId}, {
    $set: {
      jobId: submission.jobId,
      submittedBy: submittedBy,
      pastEvaluations: submission.pastEvaluations,
      status: 'EvalPending',
      evalParams: evalParams,
      evalFindings: {},
      evalScores: {},
      evalSummary: {},
      statusUpdateOn: new Date()
    }
  }, {
      new: true, //return the updated document
      upsert: false, //don't insert if not found
  },function(err, updatedEval) {
      if (err) {
        logger.error("Error in updating reEvaluation: ", err);
        done(err)
        return;
      }

      if(!updatedEval) {
        logger.error("Error in updating reEvaluation for ", submission);
        return done ({error: "in reEvaluation updated object no returned..!"});
      }

      return done(null, updatedEval);
    });
}


/*
 * This function the response received from the Distributed pipeline to update the result
 */
const updateEvalResults = function(evalResults, done) {
   // logger.trace("Updating evaluation results: ", evalResults);

  // This has to be findOneAndUpdate, so that updated document is returned
  EvaluationModel.findOneAndUpdate({ jobId: evalResults.jobId }, {
      $set: {
        statusUpdateOn: evalResults.completedOn,
        evalFindings: evalResults.payload,
        status: (evalResults.status || 'EvalFailed'), //Assuming default status as failed
        statusMessage: (evalResults.statusMessage || '')
      }
    }, {
      new: true, //return the updated document
      upsert: false, //don't insert if not found
    },
    function(err, updatedEvalDoc) {
      if (err) {
        logger.error("Error in updating eval results: ", err);
        done(err)
        return;
      }

      if(!updatedEvalDoc) {
        logger.error("Error in updating evaluation results for ", evalResults, ' update returned empty object, was original eval object existed?');
        return done ({error: "updated object no returned..!"});
      }

      return done(null, updatedEvalDoc);
    });
}


const updateEvalScores = function(evalJobId, evalScores, done) {
  // logger.trace("Updating evaluation scores for job: ", evalJobId, ' scores: ', evalScores);

  // This has to be findOneAndUpdate, so that updated document is returned
  EvaluationModel.findOneAndUpdate({ jobId: evalJobId }, {
      $set: {
        statusUpdateOn: new Date(),
        evalScores: evalScores
      }
    }, {
      new: true, //return the updated document
      upsert: false, //don't insert if not found
      fields: { _id: 0, __v: 0 }
    },
    function(err, success) {
      if (err) {
        logger.error("Error in updating eval scores: ", err);
        done(err)
        return;
      } else {
        done(null, success);;
        return;
      }
    });
}

module.exports = {
  submitEvalWorkflowJob: submitEvalWorkflowJob,
  submitNewEvaluationSubmission: submitNewEvaluationSubmission,
  updateEvalResults: updateEvalResults,
  updateEvalScores: updateEvalScores,
  submitReEvaluation: submitReEvaluation
}
