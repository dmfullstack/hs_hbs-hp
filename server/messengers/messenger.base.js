const async = require('async');
const config = require('../config');
const getAmqpConnection = require('../getAmqpConnection');

module.exports = function(queueName, dataBuffer, done) {
  async.waterfall([
    getAmqpConnection,
    getAmqpChannel,
    sendMsgToQueue.bind(null, queueName, dataBuffer)
  ], done);

  var channel = null;

  function getAmqpChannel(connection, callback) {
    if (channel) {
      return callback(null, channel);
    }

    connection.createChannel((err, newChannel) => {
      if (err) {
        return callback(err);
      }
      channel = newChannel;
      callback(null, channel);
    });
  }

  function sendMsgToQueue(queueName, dataBuffer, channel, callback) {
    //This will ensure the messages are send to Hobbes Instance specific queue (remember Hobbes support multi-tenancy)
    queueName = `${config.AUTH_PROVIDER}::HOBBES::${queueName}`;
    channel.assertQueue(queueName, { durable: true });
    channel.sendToQueue(queueName, dataBuffer);
    callback(null);
  }

}
