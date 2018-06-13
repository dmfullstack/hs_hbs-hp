/*const logger = require('../../applogger');

module.exports = function(evalObj, sectionScores, done) {
  // logger.debug('Calculating final scores from sections: ', sectionScores);

  let finalScore = 0;
  if (sectionScores.length > 0) {
    sectionScores.forEach((section) => {
      if (section.score)
        finalScore += section.score;
    });

    // @TODO need to take a weighted average
    finalScore = Math.floor(finalScore / sectionScores.length);
  }

  let scores = {
    sections: sectionScores,
    finalScore: finalScore
  }

  done(null, scores);
}
*/