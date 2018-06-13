const async = require('async');
const retrieveAccessToken = require('./services/retrieveAccessToken');
const retrieveUserProfile = require('./services/retrieveUserProfile');
const retrieveUserGitGroups = require('./services/retrieveUserGitGroups');
const resolveUserRoleByGitGroup = require('./services/resolveUserRoleByGitGroup');
const resolveRoleAccessGrants = require('./services/resolveRoleAccessGrants');
const resolveUserStackGitGroups = require('./services/resolveUserStackGitGroups');
const createJWT = require('./services/createJWT');

function redirect({ clientID, redirectURL, baseURL }, req, res, next) {
  const url = `${baseURL}/oauth/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURL)}&response_type=code`
  res.redirect(url);
}

function complete({ provider, clientID, clientSecret, baseURL, redirectURL }, req, res, next) {
  const code = req.query.code;

  async.waterfall([
    retrieveAccessToken.bind(null, { clientID, clientSecret, baseURL, redirectURL }, code),
    retrieveUserProfile.bind(null, { baseURL }),
    retrieveUserGitGroups.bind(null, { baseURL }),
    resolveUserRoleByGitGroup,
    resolveRoleAccessGrants,
    resolveUserStackGitGroups,
    createJWT.bind(null, { provider })
  ], (err, result) => {
    if (err) {
      console.log('error in completing auth token generation: ', err);
      handleError(err, res);
      return;
    }
    res.cookie('jwt', result).redirect('/#/app');
  });
}

function handleError(err, res) {
  res.status(500).json(err);
}

module.exports = {
  redirect,
  complete
}