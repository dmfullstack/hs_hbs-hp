const _ = require('lodash');

module.exports = function(evalObj, done) {
  let checks = [];

  //Currently build does not have any nested checks
  if(_.has(evalObj, 'evalFindings.build.summary.checks')) {
  	let sectionChecks = evalObj.evalFindings.build.summary.checks;
  	sectionChecks.name = "build";
  	checks.push(sectionChecks);
  }

  done(null, checks);
}
