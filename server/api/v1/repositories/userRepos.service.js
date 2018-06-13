const request = require('superagent');
const config = require('../../../config');
const logger = require('../../../applogger');

//Go to Gitlab for the specified user and get his/her repositories list
const getUserRepos = function(username, options, done) {
  let authConfig = config.USER_AUTH[options.accessProvider];

  // Refer https://docs.gitlab.com/ce/api/projects.html
  // Get all projects by setting per_page to really max number, else only first 20 are returned

  let gitURL = `${authConfig.BASE_URL}/api/v3/projects?per_page=999&order_by=updated_at&sort=desc&access_token=${options.accessToken}`;
  logger.debug('getUserRepos from ', gitURL);

  request
    .get(gitURL)
    .then((res, err) => {
      if (err) {
        logger.error('Cannot get list of assignment names:', err);
        return done(err);
      }

      const gitRepoColln = res.body;
      // logger.debug('User Repo from gitlab ', gitRepoColln);
      let repoColln = {
        user: username,
        repos: []
      };

      let userRepos = gitRepoColln.map((repo) => {
        let _repo = {
          name: repo.name,
          id: repo.id,
          nameWithNameSpace: repo.name_with_namespace,
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

      repoColln.repos = userRepos;
      // console.log("repository branches*************",userRepos);
      done(null, repoColln);
    });
}

module.exports = {
  getUserRepos: getUserRepos
}
