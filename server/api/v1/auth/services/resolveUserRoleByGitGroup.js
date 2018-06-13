const logger = require('../../../../applogger');

function resolveUserRoleByGitGroup({ access_token, refresh_token }, userProfile, userGitGroups, done) {
	// logger.debug('For user: ', userProfile.username, ' Got user git groups ', userGitGroups);

	let userRole = 'CADET';

	//Commander is a higher precedence role, hence will check for commander group first
	let isCommander = userGitGroups.find((group) => {
		return (group.name === 'HobbesCommanders');
	});

	if(!isCommander) {
		let isCadet = userGitGroups.find((group) => {
			return (group.name === 'HobbesCadets');
		});
		if(isCadet) userRole = 'CADET';
	} else {
		userRole = 'COMMANDER';
	}

	// logger.debug('User ', userProfile.username, ' assigned role: ', userRole);

	done(null, { access_token, refresh_token },
		userProfile,
		userGitGroups,
		userRole);
}

module.exports = resolveUserRoleByGitGroup;
