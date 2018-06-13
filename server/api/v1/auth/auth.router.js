const router = require('express').Router();
const controller = require('./gitlab.controller');
const config = require('../../../config');

router.get('/provider', function(req, res){
  return res.send({provider: config.AUTH_PROVIDER});
});

router.get('/cadet/:provider/complete', function(req, res, next) {
  let authPayload = getAuthPayload(req.params.provider);

  if (authPayload) {
    controller.complete(authPayload, req, res, next);
  } else {
    res.status(404).send();
  };
});

router.get('/cadet/:provider/', function(req, res, next) {
  let authPayload = getAuthPayload(req.params.provider);

  if (authPayload) {
    controller.redirect(authPayload, req, res, next);
  } else {
    res.status(404).send();
  };
});

function getAuthPayload(authProvider) {
  let authInstance = config.USER_AUTH[authProvider];
  let authPayload = undefined;

  if (authInstance) {
    authPayload = {
      provider: authInstance.PROVIDER,
      clientID: authInstance.CLIENT_ID,
      clientSecret: authInstance.CLIENT_SECRET,
      redirectURL: authInstance.REDIRECT_URL,
      baseURL: authInstance.BASE_URL,
      adminToken: authInstance.ADMIN_TOKEN
    };
  } else {
    authPayload = undefined;
  }

  return authPayload;
}

module.exports = router;
