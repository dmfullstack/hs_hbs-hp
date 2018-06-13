const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dateFormat = require('date-format');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const config = require('./config');

// console.log('CONFIG ', config);

const mongoConn = require('./mongoConnection');

// This will register all the workers
// @FIXME Move the workers to a separate node.js service (non-express service)
const workers = require('./workers');
workers();

// This will register all receivers, who simply subscribe to messages and do their own stuff

if (config.RUN_BOTS_WITH_WWW) {
  const receivers = require('./receivers');
  receivers();
}

module.exports = function(passedApp) {
  const app = passedApp || express();
  morgan.token('time', (req, res) => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date())); //Both morgan and log4js are configured to same date format, so that log reading is meaningful and not confusing due to different date formats
  app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));
  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  app.use(cookieParser());

  //Initilise mongo connection
  mongoConn();

  app.use('/api/v1', require(path.join(__dirname, 'api/v1')));

  // This can be hosted as separate express app later
  app.use('/api/v1/facade/', require(path.join(__dirname, 'facade/v1')));

  app.use('/webhooks/', require(path.join(__dirname, 'webhooks')));

  /*app.use(function(req, res){
    res.status(404).send('resource not found');
  });*/

  return app;
};
