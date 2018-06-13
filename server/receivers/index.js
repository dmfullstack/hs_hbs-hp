const registerReceiver = require('./registerReceiver');
const config = require('../config');

module.exports = function() {
	if(config.RECEIVER_BOTS.SLACKBOT)
		registerReceiver('EvalFlowEvents', 'slackBot', require('./evalFlowEvents/slackBot'));

	if(config.RECEIVER_BOTS.ILIMIBOT)
  	registerReceiver('EvalFlowEvents', 'ilimiBot', require('./evalFlowEvents/ilimiBot'));
}
