const _ = require('lodash');

function calculateWithDefaultWeights(evalChecks) {
  let evalScores = { sections: [], finalScore: 0 };

  evalScores.sections = evalChecks.map((element) => {
      let sectionChecks = element;

      sectionChecks.name = element.name; //just to assert element has a name;

      sectionChecks.score = 0;
      if (sectionChecks.total > 0)
        sectionChecks.score = Math.floor((sectionChecks.passes / sectionChecks.total) * 100);

      evalScores.finalScore = evalScores.finalScore + sectionChecks.score;
      return sectionChecks;
    })
    //As no weightage was specified, equal weight is assumed
  if (evalScores.sections.length > 0)
    evalScores.finalScore = Math.floor(evalScores.finalScore / evalScores.sections.length);

  return evalScores;
}

function calculateWithWeights(sectionWeights, evalChecks) {
  let evalScores = { sections: [], finalScore: 0 };

  for (section in sectionWeights) {
    let sectionChecks = evalChecks.find((element) => element.name === section);

    if (!sectionChecks) {
      sectionChecks = {"total": 0, "passes": 0, "failed": 0 };
    }

    sectionChecks.name = section;

    sectionChecks.score = 0;
    if (sectionChecks.total > 0) {
      sectionChecks.score = Math.floor((sectionChecks.passes / sectionChecks.total) * 100);
    }

    evalScores.finalScore = evalScores.finalScore + Math.floor(sectionChecks.score * (sectionWeights[section] / 100));

    evalScores.sections.push(sectionChecks)
  } //end of looping through configured scoring sections

  return evalScores;
}


module.exports = function(evalObj, evalChecks, done) {
  //Initilise evaluation scoring section data
  //If the expected section exists, consider the checks from it, else leave it empty
  //Calculate individual scores
  //Calculate final score as per the weightage specified in evalParam

  console.log("Considering final scores out of provided checks ", evalChecks);

  let evalScores = { sections: [], finalScore: 0 };

  // if (!_.has(evalObj, "evalParams.scores")) {
  if (!evalObj.evalParams || !evalObj.evalParams.scores) {
    //No configuration on how to score is mentioned, hence calculate with default weight
    evalScores = calculateWithDefaultWeights(evalChecks);
  } else {
  	evalScores = calculateWithWeights(evalObj.evalParams.scores, evalChecks);
  }

  done(null, evalScores);
  return;
}
