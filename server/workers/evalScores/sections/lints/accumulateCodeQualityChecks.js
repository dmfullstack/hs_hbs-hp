const _ = require('lodash');

module.exports = function(evalObj, done) {
  // Lint is expected to have nested sections
  // Iterate through each member of Lint, collect checks from each, if not having, collect a empty check

  let checks = [];

  if (evalObj.evalFindings && evalObj.evalFindings.lint) {
    for (section in evalObj.evalFindings.lint) {
      let lintSection = evalObj.evalFindings.lint[section];

      if (_.has(lintSection, 'summary.checks')) {
        let sectionChecks = lintSection.summary.checks;
        sectionChecks.name = section;
        checks.push(sectionChecks);
      }
    }
  }

  done(null, checks);
}
