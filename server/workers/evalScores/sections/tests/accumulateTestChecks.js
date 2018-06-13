const _ = require('lodash');

module.exports = function(evalObj, done) {
  // Tests is expected to have nested sections
  // Iterate through each member of Test, collect checks from each, if not having, collect a empty check

  let checks = [];

  if (evalObj.evalFindings && evalObj.evalFindings.tests) {
    for (section in evalObj.evalFindings.tests) {
      let lintSection = evalObj.evalFindings.tests[section];

      if (_.has(lintSection, 'summary.checks')) {
        let sectionChecks = lintSection.summary.checks;
        sectionChecks.name = section;
        checks.push(sectionChecks);
      }

    }
  }

  done(null, checks);
}
