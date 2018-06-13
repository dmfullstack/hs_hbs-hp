const router = require('express').Router();

const evalCompleteMessenger = require('../messengers/evaluations/evalComplete');

const logger = require('../applogger');

router.post('/evaluations/jobresults', function(req, res) {
  try {
    let jobResults = req.body;

    evalCompleteMessenger(jobResults, function(err, status) {
      if (err) {
        logger.error('Error in collecting job results ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      logger.info('Successfully collected evaluation results ', status);
      res.send(status);
      return;
    })
  } catch (err) {
    logger.error('Unexpected error in collecting job results ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

module.exports = router;
