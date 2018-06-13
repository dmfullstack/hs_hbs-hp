const request = require('superagent');
require('superagent-auth-bearer')(request);
const logger = require('../../../../applogger');

function retrieveUserGitGroups({ baseURL }, { access_token, refresh_token }, userProfile, done) {
	//Get groups, where user is a member
  request
    // .get(`${baseURL}/api/v3/groups?owned=true&all_available=true&per_page=999`) //This will give all accessible, which includes even public groups
    .get(`${baseURL}/api/v3/groups?per_page=999`) //This only gives, groups to which user is explicitly made member of
    .set('Authorization', `Bearer ${access_token}`)
    .end((err, res) => {
      if (err) {
      	logger.error('Error in requesting user git groups: ', err);
      	return done(err);
      }
      let userGitGroups = res.body;
      // logger.debug('User Git Groups data: ', userGitGroups);
      done(null, { access_token, refresh_token }, userProfile, userGitGroups);
    });
}

module.exports = retrieveUserGitGroups;
