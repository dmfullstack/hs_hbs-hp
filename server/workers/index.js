const registerWorker = require('./registerWorker');

module.exports = function() {
  registerWorker('evalComplete', require('./evalComplete'));
  registerWorker('evalFindings', require('./evalScores'));
}
