const userReposService = require('./userRepos.service');
const groupReposService = require('./groupRepos.service');
const projectReposService = require('./projectRepos.service');
const groupMembersService = require('./groupMembers.service');
const userGroupsService = require('./userGroups.service');
const userService = require('./user.service.js');
const async = require('async');

const getMyRepositories = function(username, options, done) {
  userReposService.getUserRepos(username, options, done);
}

const getGroupRepositories = function(groupname, options, done) {
  groupReposService.getGroupRepos(groupname, options, done);
}

const getGroupMembers = function(groupName, options, done) {
  groupMembersService.getGroupMembers(groupName, options, done);
}

const getMyStackGroupRepositories = function(username, options, done){
  //fetching all groups from git and then taking stack_groups
  // fetching repos from that stack assignment groups
  async.waterfall([
    userGroupsService.getUserStackGroups.bind(null, username, options),
    (groups, cb) => {
      groupReposService.getStackGroupRepositories(groups, options, cb)
    }
  ], (err, result) => {
    if(err){
      done(err);
    } else {
      done(null, result);
    }
  })
}

const getStackProjectRepoBranches = function(projectId, options, done){
	projectReposService.getStackProjectRepoBranches(projectId, options, done);
}

const getProjectRepoBranches = function(projectId, options, done){
	projectReposService.getProjectRepoBranches(projectId, options, done);
}

const getUserGitGroups = function(username, options, done){
  userGroupsService.getUserGitGroups(username, options, done);
}

const findGitUsers = function({search, limit}, {accessProvider, accessToken}, done){
  userService.findGitUsers({search, limit}, {accessProvider, accessToken}, done);
}

module.exports = {
  getMyRepositories,
  getGroupRepositories,
  getMyStackGroupRepositories,
  getProjectRepoBranches,
  getStackProjectRepoBranches,
  getGroupMembers,
  getUserGitGroups,
  findGitUsers
}
