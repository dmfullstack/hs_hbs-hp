const async = require('async');
const fetchEvalResults = require('./fetchEvalResults');
const updateEvalResults = require('./updateEvalResults');
const messageEvalFindings = require('./messageEvalFindings');

module.exports = function({jobId, completedOn}, done) {
  try{
  	  async.waterfall([
  	  	fetchEvalResults.bind(null, {jobId, completedOn}),
  	  	updateEvalResults,
  	  	messageEvalFindings
    ], done);
  } catch (err) {
  	console.log('Error in handling evaluation completion ', err);
  	done();
  }
};
