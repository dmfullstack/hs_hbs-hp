const request = require('superagent');
const config = require('../../../config');
const logger = require('../../../applogger');
const async = require('async');

const getAssignmentGroupRepos = function(groupName, done) {
  //Will go to the server, configured as Assignment repository server
  let serverURL = `${config.ASSIGNMENTS_GIT_SERVER_BASE_URL}/api/v3/groups/${groupName}/`;
  logger.debug('Getting Assignment group repos from ', serverURL);
  let token = `${config.ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN}`;
  let gitURL = serverURL + '?access_token=' + token;
  getGroupReposFromServer(gitURL, groupName, done);
}

const getGroupRepos = function(groupName, options, done) {
  //Will go to the same server from which user was authenticated
  let authConfig = config.USER_AUTH[options.accessProvider];

  let serverURL = `${authConfig.BASE_URL}/api/v3/groups/${groupName}/`;
  let token = `${authConfig.ADMIN_TOKEN}`;
  let gitURL = serverURL + '?access_token=' + token;
  getGroupReposFromServer(gitURL, groupName, done);
}

const getGroupReposFromServer = function(gitURL, groupName, done) {
  // logger.debug('getGroupRepos from ', gitURL);
  //let gitURL = serverURL + '?access_token=' + token;
  request
    .get(gitURL)
    .end((err, res) => {
      let repoColln = {
        group: groupName,
        repos: []
      };

      if (err) {
        let msg = "";
        if(res && res.body) {
          msg = res.body;
        } else if (err.response) {
          msg = `Something wrong ${err.response.statusText}`;
        } else {
          msg = 'Something wrong, possible network issues or server not responding..!'
        }
        logger.error('Cannot get list of assignment names:', msg, " for ", groupName);
        done(null, repoColln);
        return;
      }

      let gitRepoColln = [];
      gitRepoColln = gitRepoColln.concat(res.body.projects, res.body.shared_projects);
      // logger.debug('Group Repo from gitlab ', gitRepoColln);

      let groupRepos = gitRepoColln.map((repo) => {
        let _repo = {
          name: repo.name,
          id: repo.id,
          description: repo.description,
          defaultBranch: repo.default_branch,
          ssh: repo.ssh_url_to_repo,
          http: repo.http_url_to_repo,
          web: repo.web_url,
          tags: repo.tag_list,
          public: repo.public,
          createdAt: repo.createdAt,
          lastActivityAt: repo.last_activity_at,
          stars: repo.star_count,
          forks: repo.forks_count,
          openIssues: repo.open_issues_count,
          sharedWithGroups: repo.shared_with_groups
        };
        return _repo;
      });

      repoColln.repos = groupRepos;

      done(null, repoColln);
      return;
    });
};

const getStackGroupRepositories = function(groups, options, done){
  async.map(groups, getAssignmentGroupRepos, function(err, result){
    if(err) {
      done(err)
      return;
    }
    done(null, result);
  })
}

// unused code need to remove commented in (17th-jan)
/*const getRepoBranches = function(id, options, done){
  let authConfig = config.USER_AUTH[options.adminToken];
  let gitURL = `${authConfig.BASE_URL}/api/v3/projects/${id}/repository/branches?access_token=${options.adminToken}`;
  logger.debug('getBranch form id ', gitURL);

  request
   .get(gitURL)
   .then((res, err) => {
      if (err) {
        logger.error('Cannot get the list of branches for this repository:', err);
        return done(err);
      }
      let gitBranchColln = res.body;
      let branch = gitBranchColln.map((branch)=>{
        return branch.name;
      })
      done(null, branch);
    });
}
*/
module.exports = {
  getGroupRepos: getGroupRepos,
  getStackGroupRepositories: getStackGroupRepositories,
  //getRepoBranches: getRepoBranches
}
