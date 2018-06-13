const async = require('async');
const publisher = require('../publisher.base');

module.exports = function(evalObj, done) {
  let eventObj = {
    event: "EvalReportReady",
    payload: evalObj
  };

  let exchangeName = 'EvalFlowEvents';
  let dataBuffer = new Buffer(JSON.stringify(eventObj))
  publisher(exchangeName, dataBuffer, done);
}