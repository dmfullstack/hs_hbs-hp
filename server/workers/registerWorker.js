const async = require('async');
const config = require('../config');
const getAmqpConnection = require('../getAmqpConnection');
const logger = require('../applogger');

module.exports = function(queue, worker) {
  //This will ensure the messages are fetched from Hobbes Instance specific queue (remember Hobbes support multi-tenancy)
  queue = `${config.AUTH_PROVIDER}::HOBBES::${queue}`;
  async.waterfall([
    getAmqpConnection,
    getAmqpChannel,
    (channel, callback) => {
      channel.assertQueue(queue, {durable: true});
      channel.prefetch(1);
      channel.consume(queue, (msgBuffer) => {
        try {
          const msg = JSON.parse(msgBuffer.content.toString());
          worker(msg, (err) => {
            if(err) { channel.nack(msgBuffer); return; }
            channel.ack(msgBuffer);
          });
        } catch(err) {
          logger.trace('Discarding message:', msgBuffer.content.toString());
          logger.error('ERR:', err);
          channel.ack(msgBuffer);
        }
      });
    }
  ]);

  let channel = null;
  function getAmqpChannel(connection, callback) {
    if(channel) { callback(null, channel); return; }
    connection.createChannel((err, newChannel) => {
      if(err) { callback(err); return; }
      channel = newChannel;
      callback(null, channel);
    });
  }
};
