const async = require('async');
const messenger = require('../messenger.base');

module.exports = function(evalResults, done) {
  let queueName = 'evalComplete';
  let dataBuffer = new Buffer(JSON.stringify(evalResults))
  messenger(queueName, dataBuffer, done);
}
