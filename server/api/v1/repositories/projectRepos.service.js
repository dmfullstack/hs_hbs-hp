const request = require('superagent');
const config = require('../../../config');
const logger = require('../../../applogger');

const getStackProjectRepoBranches = function(projectId, options, done){
  //Refer https://docs.gitlab.com/ee/api/branches.html for more info
  let gitURL = `${config.ASSIGNMENTS_GIT_SERVER_BASE_URL}/api/v3/projects/${projectId}/repository/branches?access_token=${config.ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN}`;

  logger.debug('getBranch form id ', gitURL);

  request
   .get(gitURL)
   .then((res, err) => {
      if (err) {
        logger.error('Error in getting list of branches for repository ', err);
        return done(err);
      }
      let gitBranchColln = res.body;
      let branch = gitBranchColln.map((branch)=>{
        return branch.name;
      })
      done(null, branch);
    });
}

const getProjectRepoBranches = function(projectId, options, done){
  let authConfig = config.USER_AUTH[options.accessProvider];

  //Refer https://docs.gitlab.com/ee/api/branches.html for more info
  let gitURL = `${authConfig.BASE_URL}/api/v3/projects/${projectId}/repository/branches?access_token=${options.accessToken}`;

  logger.debug('getBranch form id ', gitURL);

  request
   .get(gitURL)
   .then((res, err) => {
      if (err) {
        logger.error('Error in getting list of branches for repository ', err);
        return done(err);
      }
      let gitBranchColln = res.body;
      let branch = gitBranchColln.map((branch)=>{
        return branch.name;
      })
      done(null, branch);
    });
}

module.exports = {
  getProjectRepoBranches,
  getStackProjectRepoBranches
}
