const router = require('express').Router();
const evalCtrl = require('./evaluations.controller');
const logger = require('../../../applogger');
const lodash = require('lodash');


// middleware function to allow only commanders for some api's
const allowForCommanderOnly = function(req, res, next) {
  if (req.claims.role === 'COMMANDER')
    next();
  else
    res.status(401).send({ error: 'Access Denied' });
}

/**
 * Effective URL is /evaluations/
 *
 * This API accepts a new submission by cadet and kicks-off evaluation workflow in Distributed Pipeline
 */
router.post('/', function(req, res) {
  try {
    let newSubmission = req.body;
    newSubmission.username = req.claims.username;
    newSubmission.email = req.claims.email;
    evalCtrl.upsertSubmission(newSubmission, function(err, status) {
      if (err) {
        logger.debug('Error in upsertSubmission ', err);
        res.status(400).send(err);
        return;
      }
      res.send(status);
      return;
    })
  } catch (err) {
    logger.debug('Unexpected error in upsertSubmission ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/**
 * Effective URL is /evaluations/evalresults
 *
 * API for updating a specific submission
 */
router.post('/evalresults', function(req, res) {
  try {
    let submissionEvalResults = req.body;
    evalCtrl.patchSubmissionEvalResults(submissionEvalResults, function(err, status) {
      if (err) {
        logger.debug('Error in patchSubmissionEvalResults ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      logger.debug('Successfully patched evaluation results ', status);
      res.send(status);
      return;
    })
  } catch (err) {
    logger.debug('Unexpected error in patchSubmissionEvalResults ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
})

/**
 * Effective URL is PATCH /evaluations/:submissionID
 *
 * API for re-evaluating a specfic submission, which is already submitted, and may be in evaluated state or pending state
 * This API is useful for re-evaluating without making one more submission
 *
 * Allowed only for COMMANDER role
 */
router.patch('/:submissionId',
  (req, res, next) => {
    if(req.claims.role !== 'COMMANDER'){
      return res.status(403).send({error : 'Access denied'});
    } else {
      next();
    }
  }, function(req, res) {
  try {
    let submittedBy = req.claims.email;
    let submissionId = req.params.submissionId;
    //console.log("this is in resubmission", submission);
    evalCtrl.updateReEvaluation(submissionId, submittedBy, function(err, result) {
      if (err) {
        logger.error('Error in re-evaluation', err);
        res.status(500).send({error: 'internal error in re-evaluation, please try ..!'});
        return;
      }
      res.send(result);
      return;
    })
  } catch (err) {
    logger.error('Unexpected error in resubmission fr evaluation ', err);
    res.status(500).send({ error: 'Unexpected internal error in resubmission, please try later..!' });
    return;
  }
})

/*
 * Get feedback details for the specified repository
 *
* Effective URL is /evaluations/feedback/:repoUrl
 */
router.get('/feedback/:repoUrl', function(req, res) {
  try {
    let username = req.claims.username;

    //Only for commander role, allow to view other's report, if supplied
    let role = req.claims.role;
    if(role == 'COMMANDER') {
      username = req.query.uname || req.claims.username;
    }
    let repoUrl = req.params.repoUrl;
    let order = req.query.order || -1;
    let repoRef = req.query.repoRef || 'master';
    let repoReftype = req.query.repoReftype || 'branch';

    evalCtrl.getMyEvalSubmissionByRepo(username, role, {repoUrl, repoRef, repoReftype, order}, function(err, status) {
      if (err) {
        logger.error('Error in fetching user evaluation feedback ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(status);
      return;
    })
  } catch (err) {
    logger.error('Unexpected error in fetching user evaluation feedback ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/*
 * Get feedback details for specific submission identified by its ID
 *
* Effective URL is /evaluations/submission/:submissionId
 */
router.get('/submission/:submissionId', function(req, res) {
  try {
    let role = req.claims.role;
    evalCtrl.getMyEvalSubmissionBySubmissionId(req.params.submissionId, role, function(err, status) {
      if (err) {
        logger.error('Error in fetching user submission feedback ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(status);
      return;
    })
  } catch (err) {
    logger.error('Unexpected error in fetching user submission feedback ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/*
 * Effective URI is /evaluations/report/:TIMESTAMP
 *
 * Provide summary of evaluations for specified timestamp in seconds
 *
 * Accepted Query Parameters
 * - assignment : complete repo url of the assignment
 * - users    : comma separated usernames
 * - q      : query submissions [ after | before | for ] from the specified timestamp, default is for i.e., equal to given TS
 * - order    : 1 or -1, 1 for ascending, -1 for descending, default is -1
 *
 * The (\\d+) is to ensure, the forDayTS is always a number only and not a string
 */
router.get('/report/:dayTS(\\d+)', function(req, res) {
  let dayTS = req.params.dayTS;
  let solnRepoURL = (req.query.assignment || undefined);
  let submnRepoUrl = (req.query.submission || undefined);
  let users = (req.query.users && lodash.split(req.query.users, ',')) || [];
  let order = (req.query.order || -1);
  let query = (req.query.q || 'for');
  let page = (req.query.page || 1);
  let limit = (req.query.limit || 10);
  let workflow = (req.query.workflow || undefined);
  let role = (req.claims.role || 'unknown'); //When API is called by external systems, this will be empty

  try {
    evalCtrl.findEvaluations(dayTS, query, role, { solnRepoURL, submnRepoUrl, users, order, page, limit, workflow },
      function(err, results) {
        if (err) {
          logger.error('Error in evalCtrl.findEvaluations ', err);
          return res.status(500).send({ error: 'Encountered internal error, please try later..!' });
        }

        res.send(results);
      });
  } catch (err) {
    logger.error('Unexpected error: ', err);
    return res.status(500).send({ error: 'Unexpected error occurred, please try later..!' });
  }
});

/**
 * Effective URL is GET /evaluations/
 *
 * API for finding evaluation submission of a specific user
 */
router.get('/submissions/report/:dayTS(\\d+)', function(req, res) {
  let dayTS = req.params.dayTS;
  let solnRepoURL = (req.query.assignment || undefined);
  let submnRepoUrl = (req.query.submission || undefined);

  // pick the user from current logged in user only, so that users cannot tamper request to view other users details
  let users = [req.claims.username];

  //let users = req.claims.username;
  let order = (req.query.order || -1);
  let query = (req.query.q || 'for');
  let page = (req.query.page || 1);
  let limit = (req.query.limit || 10);
  let role = (req.claims.role || 'unknown');

  try {
    evalCtrl.findEvaluations(dayTS, query, role, { solnRepoURL, submnRepoUrl, users, order, page, limit },
      function(err, status) {
      if (err) {
        logger.error('Error in fetching evaluations ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(status);
      return;
    })
  } catch (err) {
    logger.error('Unexpected error in fetching evaluations ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

router.get('/latest', function(req, res){
  try{
    let username = req.claims.username;

    evalCtrl.getLastEvalResult(username, function(err, status){
      if(err){
        logger.error("error in  getting data", err);
        // logger.debug("error in  getting data", err)
        res.status(500).send({error: 'Internal error, please try later..!'});
        return;
      }
      res.send(status);
      return;
    })
  } catch(err){
    logger.error('Unexpected error in fetching latest ', err);
    res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    return;
  }
})

router.get('/total', function(req, res){
  try{
    let username = req.body;

    evalCtrl.getTotalEvalResult(username, function(err, status){
      if(err){
        logger.error('error in  getting data ', err);
        res.status(500).send({error: 'Internal error, please try later..!'});
        return;
      }
      res.send(status);
      return;
    })
  } catch(err){
    res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    return;
  }
})


/*
 * Get evaluations done per workflow per day
 *
 * Effective URL is GET /evaluations/stats
 *
 * API for finding workflows submitted per day
 */
router.get('/stats',
  (req, res, next) => {
    if(req.claims.role !== 'COMMANDER'){
      return res.status(403).send({error : 'Access denied'});
    } else {
      next();
    }
  }, function(req, res) {
    try{
      let username = req.claims.username;
      evalCtrl.getWorkflowStats(username, function(err, status){
        if(err){
          logger.error('error in  getting stats data ', err);
          res.status(500).send({error: 'Internal error, please try later..!'});
          return;
        }
        else{
          res.send(status);
          return;
        }
      })
    } catch(err){
      res.status(500).send({error: 'Unexpected internal error, please try later..!'});
      return;
    }
})

/*
 * Gets all the workflows from config (anyway planing to save the workflows in DB)
 *
 * Effective URL is GET /evaluations/workflows
 *
 * This is used in Filter section in Track Submissions page
 *
 * API to get thr all workflows
*/

router.get('/workflows',
  (req, res, next) => {
    if(req.claims.role !== 'COMMANDER'){
      return res.status(403).send({error : 'Access denied'});
    } else {
      next();
    }
  }, function(req, res){
      try{
        let username = req.claims.username;
        let workflows = evalCtrl.getEvaluationWorkflows();
        res.send(workflows);
      } catch(err){
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
        return;
      }
  })

module.exports = router;
