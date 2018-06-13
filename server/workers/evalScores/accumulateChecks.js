const async = require('async');

const accumulateBuildChecks = require('./sections/build');
const accumulateRunChecks = require('./sections/run');
const accumulateTestChecks = require('./sections/tests');
const accumulateCodeQualityChecks = require('./sections/lints');

module.exports = function(evalObj, done){
  async.parallel([
    accumulateBuildChecks.bind(null, evalObj),
    accumulateRunChecks.bind(null, evalObj),
    accumulateTestChecks.bind(null, evalObj),
    accumulateCodeQualityChecks.bind(null, evalObj),
  ], (err, sectionChecks)=>{
    if(err){
      done(err);
      return;
    }

    //Merge all checks
    let accumulatedChecks = sectionChecks.reduce((accumulate, elem) => accumulate.concat(elem));

    done(null, accumulatedChecks);
    return;
  })
}