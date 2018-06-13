const EvaluationModel = require('./evaluations.entity');
const async = require('async');
const logger = require('../../../applogger');
const lodash = require('lodash');


/* THIS IS UNUSED CODE
const findUserEvalSubmissions = function(dayTS, query, {username, order, page, limit}, done) {
  //let query = { username: username };
  let fieldOptions = { _id: 0, __v: 0 };

  logger.trace('Querying evaluations ', query);
  // console.log('Querying evaluations ', query);
  EvaluationModel
    .find({ "repoUrl": options.repoUrl })
    .sort({ "submittedOn": -1 })
    .select(fieldOptions)
    .exec((err, results) => {
      if (err) {
        logger.error('Error in finding evaluations collection ', err, ' queries for ', query);
        // console.log('Error in finding evaluations collection ', err, ' queries for ', query);
        done(err);
        return;
      }
      done(null, results);
    })
}*/

const getMyEvalSubmissionBySubmissionId = function(submissionId, done) {
  if(!submissionId) {
    return done(null, {});
  }

  EvaluationModel
  .findOne({submissionId: submissionId}, {
      _id: 0,
      __v: 0
    })
  .exec((err, evaluationObj) => {
    if (err) {
      logger.error('Error in finding eval submission ', err, ' queries for ', submissionId);
      done(err);
      return;
    }
    done(null, evaluationObj);
  });
}

/*
 * Service for fetching user submission
 * @TBD Have to improve this a lot still to extend the query options
 * Same query service should work for historic submissions too
 */
const getMyEvalSubmissionByRepo = function(username, {repoUrl, repoRef, repoReftype, order}, done) {
  let query = { username: username, repoUrl: repoUrl, repoRef: repoRef, repoReftype: repoReftype};
  let fieldOptions = { _id: 0, __v: 0 };
  let page = 0;
  let limit = 1;

  async.parallel([
    function(callback) {
      EvaluationModel.count(query, callback);
    },
    function(callback) {
      EvaluationModel
      .find(query)
      .sort({"submittedOn": order})
      .select(fieldOptions)
      .skip((page > 0) ? limit * (page - 1) :  0)
      .limit(parseInt(limit))
      .exec((err, colln) => {
        if (err) {
          logger.error('Error in finding eval submission details ', err, ' queries for ', query);
          callback(err);
          return;
        }
        callback(null, colln);
      });
    }],
    function(err, results) {
      if(err) {
        return done(err);
      }

      let finalResults = {
          query: query,
          page: 1,
          count: results[1].length,
          total: results[0],
          asOn: new Date(),
          evaluations: results[1]
        };

      done(null, finalResults);
    });
}

const findEvaluationByJobId = function(evalJobId, done) {
  let fieldOptions = { _id: 0, __v: 0 };

  EvaluationModel.findOne({ "jobId": evalJobId }, (err, evalObj) => {
    if (err) {
      logger.error('Error in finding evaluation object for jobId ', err);
      done(err);
      return;
    }

    done(null, evalObj);
  });
}


const lastSubmittedResult = function(username, done){
  let fieldOptions = { _id: 0, __v: 0 };

  EvaluationModel
      .find({ "username": username})
      .sort({"submittedOn": -1})
      .limit(1)
      .select(fieldOptions)
      .exec((err, result) =>{
        if(err) {
          logger.error('Error in finding evaluations collection ', err);
          // console.log('Error in finding evaluations collection ', err);
          done(err);
          return;
        }
        done(null, result);
      })
}

const totalSubmissionResults = function(username, done){
  let fieldOptions = { _id: 0, __v: 0 };

  EvaluationModel
      .find()
      .sort({"submittedOn": -1})
      .select(fieldOptions)
      .exec((err, result) =>{
        if(err) {
          logger.error('Error in finding Total Submission Results ', err);
          // console.log('Error in finding Total Submission Results ', err);
          done(err);
          return;
        }
        done(null, result);
      })
}

const aggregateWorkflowUsage = function(username, done){
  EvaluationModel
  .aggregate([
    { $group:
      { _id:
        { "submittedOn": {$dateToString:{format: "%Y-%m-%d", date: "$submittedOn"} },
        "workflow": {$ifNull: ["$evalParams.workflow", "SROEvaluation"]}, },
        "submissions": { "$sum": 1 },
      }
    }
  ])
  .exec((err, result)=>{
    if(err){
      logger.error('Error in aggregating the workflow usage Results', err);
      done(err);
      return;
    }
   // missing comment
    let stats = [];
    result.forEach((f)=>{
      let res = {
        submittedOn: f._id.submittedOn,
        workflow: f._id.workflow,
        submissions: f.submissions
      };
      stats.push(res);
    })

    let finalResults = {
      asOn: new Date(),
      stats: stats
    };

    done(null, finalResults);
  })
}

module.exports = {
  //findUserEvalSubmissions: findUserEvalSubmissions,
  getMyEvalSubmissionByRepo: getMyEvalSubmissionByRepo,
  getMyEvalSubmissionBySubmissionId: getMyEvalSubmissionBySubmissionId,
  findEvaluationByJobId: findEvaluationByJobId,
  lastSubmittedResult: lastSubmittedResult,
  totalSubmissionResults : totalSubmissionResults,
  aggregateWorkflowUsage: aggregateWorkflowUsage
}
