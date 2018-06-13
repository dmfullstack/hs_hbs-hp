const router = require('express').Router();
const evalWorkflowCtrl = require('./evaluationWorkflow.controller');
const logger = require('../../../applogger');

/**
 * Effective URL is evalworkflow/stages/:jobId
 *
 * API for fetching evaluation Stages of a specific jobId
 */
router.get('/jobs/:jobId/stages', 
    (req, res, next) => {
    if(req.claims.role !== 'COMMANDER'){
      return res.status(403).send({error : 'Access denied'});
    } else {
      next();
    }
  }, function(req, res) {
  let jobId = req.params.jobId;
  try {
    evalWorkflowCtrl.getEvaluationWorkflowStages(jobId, function(err, evalStages) {
      if (err) {
        logger.error('Error in fetching evaluation workflow stages', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(evalStages);
      return;
    })
  } catch (err) {
    logger.error('Error in fetching evaluation workflow stages for job: ', submissionId, ' error: ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

module.exports = router;
