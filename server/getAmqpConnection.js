const amqp = require('amqplib/callback_api');
const config = require('./config');
const logger = require('./applogger');

let connection = null;

module.exports = function(callback) {
  if(connection) { callback(null, connection); return; }
  amqp.connect(config.AMQP_URL, (err, newConnection) => {
    if(err) { callback(err); return; }
    logger.trace('AMQP connected..!');
    connection = newConnection;
    callback(null, connection);
  });
};
