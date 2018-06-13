const request = require('superagent');
const config = require('../../config');
const logger = require('../../applogger');

module.exports = function ({jobId, completedOn}, done) {
	//Make a HTTP Request to DP to get the payload for the completed job
	let reqUrl = config.DP_API_BASE_URL + '/jobs/' + jobId;

  logger.trace("Request for eval results from ", reqUrl);

  request
    .get(reqUrl)
		.then((res, err) => {
      if (err) {
        logger.error("error in getting eval results for job ", jobId, " error: ", err);
        done(err, null);
        return;
      }

      logger.debug("Got result for job: ", jobId, " results: ", res.body);

      let result = {jobId: res.body.jobId, payload: res.body.payload, completedOn: completedOn, status: res.body.status, statusMessage: res.body.statusMessage};

      done(null, result);
    }).catch((err) => {
      logger.error("unexpected error in getting eval results for job ", jobId, " error: ", err);
      done(err, null);
    });
}
