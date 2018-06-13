const logger = require('../../../../applogger');
const config = require('../../../../config');

const resolveUserStackGitGroups = function({ access_token, refresh_token },
  userProfile,
  userGitGroups,
  userRole,
  accessGrants,
  done) {

  //Use map to ensure no duplicate groups are picked
  let userStackGroups = new Map();

  userGitGroups.forEach((groupName) => {
    if (groupName.name.toLowerCase().startsWith(config.STACK_GROUP_PREFIX)
      && groupName.name.toLowerCase().endsWith(config.ASSIGNMENT_GROUP_NAME_SUFFIX)) {
      //Group is already a stackgroup, hence no need of any additional treatment
      userStackGroups.set(groupName.name, groupName.name);
    } else if (groupName.name.toLowerCase().startsWith(config.STACK_GROUP_PREFIX)) {
      let name = `${groupName.name}${config.ASSIGNMENT_GROUP_NAME_SUFFIX}`;
      userStackGroups.set(name, name);
    }
  });

  //Convert from map back to a array of string values of group names
  userStackGroups = Array.from(userStackGroups.values());

  logger.debug("User stack groups: ", userStackGroups);

  done(null, { access_token, refresh_token },
    userProfile,
    userGitGroups,
    userRole,
    accessGrants,
    userStackGroups);
}

module.exports = resolveUserStackGitGroups;