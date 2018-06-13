/*const async = require('async');

const cadetTests = require('./cadetTestsScores');
const commanderTests = require('./commanderTestsScores');
const jsLintChecks = require('./jsLintChecksScores');
const htmlHintChecks = require('./htmlHintChecksScores');
const smellLintChecks = require('./smellLintChecksScores');
const uiChecks = require('./phantomCheckScores');
const finalEvalScores = require('./finalEvalScores');

const logger = require('../../applogger');

module.exports = function(evalObj, done) {
  logger.trace('Calculating scores for evaluation job ', evalObj.jobId);

  async.parallel([
    cadetTests.bind(null, evalObj),
    commanderTests.bind(null, evalObj),
    jsLintChecks.bind(null, evalObj),
    htmlHintChecks.bind(null, evalObj),
    smellLintChecks.bind(null, evalObj),
    uiChecks.bind(null, evalObj),
  ], function(err, results) {
    if (err) {
      return done(err);
    }

    finalEvalScores(evalObj, results, done);
  });
}
*/