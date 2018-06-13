const router = require('express').Router();
const reposCtrl = require('./repositories.controller');
const logger = require('../../../applogger');
const lodash = require('lodash');

// middleware function to allow only commanders for some api's
const allowForCommanderOnly = function(req, res, next) {
  if (req.claims.role === 'COMMANDER')
    next();
  else
    res.status(401).send({ error: 'Access Denied' });
}

/**
 * Effective URL is /repos/
 *
 * API for fetching repositories of a specific user
 */
router.get('/', function(req, res) {
  try {
    let username = req.claims.username;
    let options = {
      accessProvider: req.claims.accessProvider,
      accessToken: req.claims.accessToken
    }
    reposCtrl.getMyRepositories(username, options, function(err, repositories) {
      if (err) {
        logger.error('Error in fetching user repositories ', err);
        // console.log('Error in fetching user repositories ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(repositories);
      return;
    });
  } catch (err) {
    logger.error('Error in fetching user repositories ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/**
 * Effective URL is /repos/groups
 * groups
 * API for fetching user git groups where user is a member
 * user git groups are taking from claims
 */
router.get('/groups', allowForCommanderOnly, function(req, res) {
  try {

    let options = {
      accessProvider : req.claims.accessProvider,
      access_token : req.claims.accessToken,
      owned : true,
      limit : 999,
    };
    let username = req.claims.username;

    reposCtrl.getUserGitGroups(username, options, function(err, groups) {
      if (err) {
        logger.error('Error in fetching user git groups', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(groups);
      return;
    })
  } catch (err) {
    logger.error('Error in fetching user git groups', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
})

/**
 * Effective URL is /repos/groups/:groupname
 * group/:groupname
 * API for fetching repositories of a specific group of the user
 */
/*router.get('/group/:groupname', function(req, res) {
  try {
    let options = {
      accessProvider: req.claims.accessProvider,
      accessToken: req.claims.accessToken
    }
    reposCtrl.getGroupRepositories(req.params.groupname, options, function(err, repositories) {
      if (err) {
        logger.error('Error in fetching group repositories ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(repositories);
      return;
    });
  } catch (err) {
    logger.error('Error in fetching group repositories ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});*/

/**
 * Effective URL is /repos/groups/:groupname/members
 * group/:groupname/members
 * API for fetching members of a specific group
 */
router.get('/groups/:groupname/members', allowForCommanderOnly, function(req, res) {
  try {
    let options = {
      accessProvider: req.claims.accessProvider,
      accessToken: req.claims.accessToken,
      owned: true,
      limit: 999
    }
    let groupName = req.params.groupname;

    reposCtrl.getGroupMembers(groupName, options, function(err, members) {
      if (err) {
        logger.error('Error in fetching group members ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(members);
      return;
    });
  } catch (err) {
    logger.error('Error in fetching group members ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/*
 * Effective url is /repos/groups/stackrepos
 * group/stackrepos
 * API for fetching stack group repositories
 */
router.get('/groups/stackrepos', function(req, res) {

  try{
    let options = {
      accessProvider : req.claims.accessProvider,
      access_token : req.claims.accessToken,
      owned : true,
      limit : 999,
      // req.query.gp is group prefix. Which is used for fetching groups starts with `stack_` prefix. where value taken as query param
      search: req.query.gp || ''
    };
    let username = req.claims.username;

    reposCtrl.getMyStackGroupRepositories(username, options, function(err, repositories){
      if (err) {
        logger.error('Error in fetching user groups repositories ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(repositories);
      return;
    })
  } catch (err) {
    logger.error('Error in fetching user groups repositories ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/*
 * Effective url is /repos/stackprojects/:projectId/repository/branches
 * projectId=[Gitlab provided id of the project]
 *
 * API for fetching branches of the specified Assignment or Stack project repository
 */
router.get('/stackprojects/:projectId/repository/branches', function(req, res) {
  try {
    let options = {
      accessProvider: req.claims.accessProvider,
      accessToken: req.claims.accessToken
    }
    reposCtrl.getStackProjectRepoBranches(req.params.projectId, options, function(err, branches) {
      if (err) {
        logger.error('Error in fetching branches from the project ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(branches);
      return;
    });
  } catch (err) {
    logger.error('Error in fetching branches from the repository ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/*
 * Effective url is /repos/projects/:projectId/repository/branches
 * projectId=[Gitlab provided id of the project]
 *
 * API for fetching branches of the specified project repository
 */
router.get('/projects/:projectId/repository/branches', function(req, res) {
  try {
    let options = {
      accessProvider: req.claims.accessProvider,
      accessToken: req.claims.accessToken
    }
    reposCtrl.getProjectRepoBranches(req.params.projectId, options, function(err, branches) {
      if (err) {
        logger.error('Error in fetching branches from the project ', err);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(branches);
      return;
    });
  } catch (err) {
    logger.error('Error in fetching branches from the repository ', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

/*
 * Effective url is /repos/git/users'
 *
 * API for fetching users from git
 *
 * API for fetching usernames with matching string from gitlab. if you pass `search` query parameter
 */
router.get('/git/users', allowForCommanderOnly, function(req, res) {
  try {

    if(!req.query.search){
      res.status(400).send({ error: 'Invalid request, missing one or more required input or parameter...!' });
      return;
    }
    if((/^[a-zA-Z0-9- ,.]*$/.test(req.query.search)) === false){
      logger.error('Invalid request, recieved query param is not alphabet')
      res.status(400).send({ error: 'Invalid request, should only contain alphabets'});
      return;
    }

    let options = {
      accessProvider: req.claims.accessProvider,
      accessToken: req.claims.accessToken
    }
    let search = (req.query.search || undefined );
    let limit = (req.query.limit || 999)

    reposCtrl.findGitUsers({search, limit}, options, function(err, usernames) {
      if (err) {
        logger.error('Error in fetching users from the gitlab ', err.response.error);
        res.status(500).send({ error: 'Internal error, please try later..!' });
        return;
      }
      res.send(usernames);
      return;
    });
  } catch (err) {
    logger.error('Cought exception in finding users in gitlab, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
})

module.exports = router;
