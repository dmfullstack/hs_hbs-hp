const logger = require('../../../../applogger');
const roleGrants = require('./roleWiseGrants');

function resolveRoleAccessGrants({ access_token, refresh_token },
	userProfile,
	userGitGroups,
	userRole,
	done) {
	// logger.debug('For user: ', userProfile.username, ' Got user role as ', userRole);

	let accessGrants = roleGrants[userRole] || [];

	// logger.debug('Assigned user ', userProfile.username, ' of role: ', userRole, ' with grants ', accessGrants);

	done(null, { access_token, refresh_token },
		userProfile,
		userGitGroups,
		userRole,
		accessGrants);
}

module.exports = resolveRoleAccessGrants;
