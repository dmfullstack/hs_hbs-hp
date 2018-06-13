const async = require('async');
const request = require('superagent');

const config = require('../../config');
const logger = require('../../applogger');

const CALLBACK_MAX_TIMEOUT = 10000;

function publishToIlimi(eventObj, done) {
  //Extract the data from the event payload, which carries the evaluation details
  let evalReportDetails = eventObj.payload;

  let eavlReport = {
    username: evalReportDetails.username,
		useremail: evalReportDetails.useremail,

    evalRefId: evalReportDetails.submissionId,

    submissionRepoUrl: evalReportDetails.repoUrl,
    submissionRepoReftype: evalReportDetails.repoReftype,
    submissionRepoRef: evalReportDetails.repoRef,

    problemRepoUrl: evalReportDetails.payload.solutionRepoUrl,
    problemRepoReftype: ((evalReportDetails.payload && evalReportDetails.payload.solutionRepoReftype) || 'branch'),
    problemRepoRef: ((evalReportDetails.payload && evalReportDetails.payload.solutionRepoRef) || 'master'),

    status: evalReportDetails.status,
    scores: evalReportDetails.evalScores,

    submittedOn: evalReportDetails.submittedOn,
    statusUpdateOn: evalReportDetails.statusUpdateOn
  };

  logger.debug("Publishing result to ilimi : ", JSON.stringify(eavlReport));

  let reqUrl = `${config.ILIMI_ORCH_API_BASE_URL}/private/v1/student/${encodeURIComponent(eavlReport.username)}/programmingAssessment/performanceInfo/${encodeURIComponent(eavlReport.problemRepoUrl)}`;

  logger.debug("Requesting being sent for publishing result to ilimi at ", reqUrl);

  request
    .post(reqUrl)
    .send(eavlReport)
    .ok((res) => {
      logger.error("Got callback to check res status ", res.status);
      return (res.status !== 400);
     }) //Consider 400 status as workflow exception and ignore, not as a technical error, Refer http://visionmedia.github.io/superagent/#error-handling
    .timeout(CALLBACK_MAX_TIMEOUT)
    .end((err, response) => {
      if (err) {
        // logger.error("error in completing the request, ", normalizeError(err, response), " ERROR: ", err);
        logger.error("error in completing the request, ", normalizeError(err, response));

        if(config.ILIMIBOT_IGNORE_REQ_ERRORS) {
          logger.error("SWALLOWING error in ilimi-bot as per config ");
          done(null, null);
        } else {
          done(err, null);
        }

        return;
      }

      logger.debug("Finished request with status ", response.status, " response result: ", response.body);

      done(null, response.body);
    });
}

normalizeError = (err, res) => {
  let msg = "";
  if (res && res.body) {
    msg = res.body;
  } else if (err.response) {
    msg = `Something wrong ${err.response.statusText}`;
  } else {
    msg = `Something wrong, possible network issues or server not responding..!`
  }

  return msg;
}

module.exports = function(eventObj, done) {
  if (eventObj.event == "EvalReportReady") {
    // logger.debug('Eval Report ready for ', JSON.stringify(eventObj));
    publishToIlimi(eventObj, done);
  } else {
    done(null, true);
  }
};
