const request = require('superagent');
const async = require('async');
const config = require('../../../config');
const logger = require('../../../applogger');

// this api to get git groups of loggedin user where he is member of
const getUserGitGroups = function(username, options, done){
  let authConfig = config.USER_AUTH[options.accessProvider];
  let userOwned = (options.owned || true);
  let perPage = (options.limit || 999); // default fetch all
  // this is for fetching groups which has stack_. which used while loading repos fron stack_ groups
  let searchText = (options.search || "");
  searchText = (searchText !== '') ? `search=${searchText}&` : '';
  // Get groups which user is added member (if Admin all groups are accessible to user)
  // Fetch all group, as by default only 20 groups are returned
  let gitUrl = `${authConfig.BASE_URL}/api/v3/groups/?${searchText}access_token=${options.access_token}&owned=${userOwned}&per_page=${perPage}`;

   logger.debug("Fetching user's git groups ", gitUrl);

  request
    .get(gitUrl)
    .end((err, res) => {
      if (err) {
        let msg = "";
        if(res && res.body) {
          msg = res.body;
        } else if (err.response) {
          msg = `Something wrong ${err.response.statusText}`;
        } else {
          msg = 'Something wrong, possible network issues or server not responding..!'
        }
        logger.error('Cannot get list of groups:', msg, " for ", username);
        done(err);
        return;
      }

      done(null, res.body)
    })

}

// this takes groups collection as param and callback
// filtering the groups to get `stack_` groups and to get its `_assignment` groups
const resolveUserStackGroups = function(userGitGroups, done){
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
  done(null, userStackGroups);
}

const getUserStackGroups = function(username, options, done){
  async.waterfall([
    getUserGitGroups.bind(null, username,  options),
    resolveUserStackGroups
  ], (err, result) => {
    if(err){
      logger.error("Error in getting stackgroups", err);
      done(err);
    } else {
      done(null, result);
    }
  })
}

module.exports = {
  getUserGitGroups,
  getUserStackGroups
}