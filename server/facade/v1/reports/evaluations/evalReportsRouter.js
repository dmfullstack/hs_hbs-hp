const router = require('express').Router();

const evalCtrl = require('../../../../api/v1/evaluations/evaluations.controller');

const lodash = require('lodash');

/*
 * Effective URI is /reports/evaluations/
 *
 * Provide summary of evaluations for specified timestamp in seconds
 *
 * Accepted Query Parameters
 * - assignment : complete repo url of the assignment
 * - users 		: comma separated usernames
 * - q 			: query submissions [ after | before | for ] from the specified timestamp, default is for i.e., equal to given TS
 * - order		: 1 or -1, 1 for ascending, -1 for descending, default is -1
 *
 * The (\\d+) is to ensure, the forDayTS is always a number only and not a string
 */
router.get('/:dayTS(\\d+)', function(req, res) {
  let dayTS = req.params.dayTS;
  let solnRepoURL = (req.query.assignment || undefined);
  let submnRepoUrl = (req.query.submission || undefined);
  let users = (req.query.users && lodash.split(req.query.users, ',')) || [];
  let order = (req.query.order || -1);
  let query = (req.query.q || 'for');
  let page = (req.query.page || 1);
  let limit = (req.query.limit || 10);
  let workflow = (req.query.workflow || undefined);
  let role = 'COMMANDER'; //This API is called by external systems, mostly by internal systems, hence making it as COMMANDER

  try {
    evalCtrl
      .findEvaluations(dayTS, query, role, {solnRepoURL, submnRepoUrl, users, order, page, limit, workflow},
        function(err, results) {
        	if(err) {
        		console.log('Error in evalCtrl.findEvaluations ', err);
        		return res.status(500).send({error: 'Encountered internal error, please try later..!'});
        	}

        	res.send(results);
        });
  } catch (err) {
  	console.log('Unexpected error: ', err);
    return res.status(500).send({ error: 'Unexpected error occurred, please try later..!' });
  }
});

module.exports = router;
