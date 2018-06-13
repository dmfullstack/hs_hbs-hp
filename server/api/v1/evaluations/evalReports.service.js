const EvaluationModel = require('./evaluations.entity');

const lodash = require('lodash');
const async = require('async');

const dayTSQueryOp = {
  'for': '$eq',
  // 'for': ['$gte', '$lte'],
  'after': '$gte',
  'before': '$lte'
}

const findEvaluations =
  function(dayTSInSeconds, queryOp, { solnRepoURL, submnRepoUrl, users, order, page, limit, workflow }, done) {
    let dayTS = new Date(dayTSInSeconds * 1000);
    let dayTSQuery = (lodash.has(dayTSQueryOp, queryOp) && dayTSQueryOp[queryOp]) || dayTSQueryOp['for'];

    let query = {};
    //Sets path dynamically i.e., query["submittedOn"][<whatever the value of dayTSQuery] = dayTS
    // To set Query for $or aggregate checking the users input is in `$in` username
    let username = {};
    // To set Query for $or aggregate checking the users input is in `$in` useremail
    let useremail = {};
    // Final building query for $or aggregate based on above two scenarios
    // let userInfo = [];
    let userQuery = [];

    //Sets path dynamically i.e., query["submittedOn"][<whatever the value of dayTSQuery] = dayTS
    if(dayTSQuery === '$eq'){
      let dayTSAfter = new Date(dayTSInSeconds * 1000);
      dayTSAfter.setDate(dayTSAfter.getDate() - 1);

      lodash.set(query, ["submittedOn", '$gte'], dayTSAfter);
      lodash.set(query, ["submittedOn", '$lte'], dayTS);
    } else {
      lodash.set(query, ["submittedOn", dayTSQuery], dayTS);
    }

    (solnRepoURL && lodash.set(query, ["payload.solutionRepoUrl", "$eq"], solnRepoURL));
    (submnRepoUrl && lodash.set(query, ["repoUrl", "$eq"], submnRepoUrl));
    // checking for workflow if there setting to query object
    (workflow && lodash.set(query, ["evalParams.workflow", "$eq"], workflow));

    if(users && Array.isArray(users) && users.length > 0) {
      // Wrap it as a case insensitive regex, this will make search case insensitive
      users = users.map(usr => new RegExp((usr.toLowerCase()), 'i'));

      userQuery.push(lodash.set(username, ["username", "$in"], users),
        lodash.set(useremail, ["useremail", "$in"], users));
    }
    (userQuery && Array.isArray(userQuery) && userQuery.length > 0 && lodash.set(query, "$or", userQuery))

    // (users && Array.isArray(users) && users.length > 0 && lodash.set(query, ["username", "$in"], users));
    page = (page?page:1);
    limit = (limit?limit:10);

    let sort = { "submittedOn": (order?order:-1) };

    let fields = {
      _id: 0,
      __v: 0,
      //jobId: 0,
      evalFindings: 0
    };

    async.parallel([function(callback) {
        EvaluationModel.count(query, callback);
      },
      function(callback) {
        EvaluationModel
          // .find(query, null, {collation: {locale: 'en', strength: 2} }) //This is still not supported and has backward compatibility issue
          .find(query)
          .select(fields)
          .sort(sort)
          .skip((page > 0) ? limit * (page - 1) :  0)
          .limit(parseInt(limit))
          .exec(callback);
      }],
      function(err, results) {
        if(err) {
          return done(err);
        }

        let finalResults = {
          query: {
            ts: dayTS,
            tsQ: queryOp,
            solution: solnRepoURL,
            users: users,
          },
          page: page,
          count: results[1].length,
          total: results[0],
          asOn: new Date(),
          evaluations: results[1]
        };

        done(null, finalResults);
      });
  }


module.exports = {
  findEvaluations
}
