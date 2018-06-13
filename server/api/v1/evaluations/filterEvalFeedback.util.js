const filterEvalFeedback = function(evalObj) {
  // If nothing configured for filtering, do nothing
  // console.log("evalObj", evalObj)
  if (!evalObj.evalParams || !evalObj.evalParams.cadetFeedback) {
    return evalObj;
  }

  if (evalObj.evalParams.cadetFeedback.hideScore) {
    delete evalObj.evalScores;
  }

  if (evalObj.evalParams.cadetFeedback.hideSections &&
    evalObj.evalParams.cadetFeedback.hideSections.length > 0) {

    evalObj.evalParams.cadetFeedback.hideSections
      .forEach((section) => {
        // Below code is aware ofthe sections possible in evalFindings, like 'lint', 'test', 'build' etc.,
        // Try and replace this logic, which can be independent of the section names

        if (evalObj.evalFindings && evalObj.evalFindings.lint && evalObj.evalFindings.lint[section]) {
          delete evalObj.evalFindings.lint[section];
        }

        if (evalObj.evalFindings && evalObj.evalFindings.tests && evalObj.evalFindings.tests[section]) {
          delete evalObj.evalFindings.tests[section];
        }
      }); //end of forEach of looping through sections specified for hiding
  }

  return evalObj;
}

const filterEvalFeedbackArray = function(evalFeedbackArray) {
  let filteredEvalFeedbackArray = evalFeedbackArray.map(filterEvalFeedback);

  return filteredEvalFeedbackArray;
}

module.exports = {
  filterEvalFeedback,
  filterEvalFeedbackArray
}
