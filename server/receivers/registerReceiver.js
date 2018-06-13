const async = require('async');
const config = require('../config');
const getAmqpConnection = require('../getAmqpConnection');
const logger = require('../applogger');

module.exports = function(exchange, queue, receiver) {
  //This will ensure the messages are fetched from Hobbes Instance specific exchange (remember Hobbes support multi-tenancy)
  exchange = `${config.AUTH_PROVIDER}::HOBBES::${exchange}`;
  queue = `${config.AUTH_PROVIDER}::HOBBES::${queue}`;
  async.waterfall([
    getAmqpConnection,
    getAmqpChannel,
    subscribeMessage.bind(null, exchange, queue)
  ]);

  let channel = null;

  function getAmqpChannel(connection, callback) {
    if (channel) {
      callback(null, channel);
      return;
    }

    connection.createChannel((err, newChannel) => {
      if (err) {
        callback(err);
        return;
      }

      channel = newChannel;
      callback(null, channel);
    });
  }

  function subscribeMessage(exchange, queue, channel, callback) {
    let pattern = ''; //register for any pattern

    channel.assertExchange(exchange, 'fanout', { durable: false });
    channel.assertQueue(queue, { exclusive: false, durable: true }); // Let the queue persist even after the connection closes
    channel.bindQueue(queue, exchange, pattern);
    channel.prefetch(1);
    channel.consume(queue, (msgBuffer) => {
      try {
        const msg = JSON.parse(msgBuffer.content.toString());
        receiver(msg, (err) => {
          if (err) { channel.nack(msgBuffer); return; }
          channel.ack(msgBuffer);
        });
      } catch (err) {
        logger.trace('Error in receiving message:', msgBuffer.content.toString());
        logger.error('ERR:', err);
        // channel.ack(msgBuffer);
      }
    });
  }
};