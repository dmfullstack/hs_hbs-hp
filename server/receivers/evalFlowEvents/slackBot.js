const async = require('async');

const logger = require('../../applogger');

module.exports = function(eventObj, done) {
  try {
  	logger.debug('Got event Obj in evalFlowEvents receiver ', eventObj);
    done(null, true);
    // done("Simulated error");
  } catch (err) {
    logger.error('Error in receiving evaluation flow event ', err);
    done(err);
  }
};
