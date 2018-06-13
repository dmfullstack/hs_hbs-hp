const async = require('async');
const messenger = require('../messenger.base');

module.exports = function(evalJobId, done) {
  let queueName = 'evalFindings';
  let dataBuffer = new Buffer(JSON.stringify(evalJobId))
  messenger(queueName, dataBuffer, done);
}
