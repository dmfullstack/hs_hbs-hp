const JWT = require('jsonwebtoken');
const config = require('../../../config');
const logger = require('../../../applogger');

const verifyAuth = function(req, res, next) {
  try {
    req.claims = JWT.verify(req.cookies.jwt, config.JWT_SECRET);
    next();
    return;
  } catch (err) {
  	logger.error('Error in verifying token ', err);
  	if(err.name === 'TokenExpiredError') {
  		res.status(401).send({error: "Session has expired, please signin..!"});
  		return;
  	}
    res.status(401).send({error: "Authentication failed, please login and try later, if issue persists, contact coordinator..!"});
    return;
  }
}

module.exports = verifyAuth;
