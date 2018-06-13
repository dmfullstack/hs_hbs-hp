const async = require('async');
const config = require('../config');
const getAmqpConnection = require('../getAmqpConnection');

module.exports = function(exchangeName, dataBuffer, done) {
  async.waterfall([
    getAmqpConnection,
    getAmqpChannel,
    publishMsg.bind(null, exchangeName, dataBuffer)
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

  function publishMsg(exchangeName, dataBuffer, channel, callback) {
    //This will ensure the messages are send to Hobbes Instance specific queue (remember Hobbes support multi-tenancy)
    exchangeName = `${config.AUTH_PROVIDER}::HOBBES::${exchangeName}`;
    // 'fanout' this will set the exchange for publish (broadcast) exchange
    channel.assertExchange(exchangeName, 'fanout', {durable: false}); //TBD, need to check if this has to be durable or not
    channel.publish(exchangeName, '', dataBuffer); //No routing key is mentioned, so that message is published to all queues in the exchange
    callback(null);
  }

  // In case publishing to a specific queue pattern
  /* function publishMsgToQueue(exchangeName, queueName, dataBuffer, channel, callback) {
    //TBD
  } */

}
