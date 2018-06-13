const _ = require('lodash');

module.exports = function(evalObj, done) {
  let checks = [];

  //Currently run does not have any nested checks
  if(_.has(evalObj, 'evalFindings.run.summary.checks')) {
  	let sectionChecks = evalObj.evalFindings.run.summary.checks;
  	sectionChecks.name = "run";
  	checks.push(sectionChecks);
  }

  done(null, checks);
}
