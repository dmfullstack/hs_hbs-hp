const JWT = require('jsonwebtoken');
const config = require('../../../../config');
const DEFAULT_TOKEN_EXPIRE_MINUTES = 240;

function createJWT({ provider },
   { access_token, refresh_token },
   userProfile,
   userGitGroups,
   userRole,
   accessGrants,
   userStackGroups, done) {

  // Please keep the payload as small as possible
  // If token becomes large, it will have many HTTP header, cookie related issues as it can't carry lengthy token
  let tokenPayload = {
    grants: accessGrants,
    role: userRole,
    accessProvider: provider,
    accessToken: access_token,
    username: userProfile.username,
    name: userProfile.name,
    avatar: userProfile.avatar_url,
    email: userProfile.email
  };

  let signingOptions = {
    subject: 'user',
    issuer: `StackRoute-Hobbes-${provider}`,
    expiresIn: ( parseInt((config.JWT_EXPIRES_IN_MINUTES || DEFAULT_TOKEN_EXPIRE_MINUTES)) * 60 ) //Has to be in seconds
  };
  // console.log("Signing token with options ", signingOptions);

  JWT.sign(tokenPayload, config.JWT_SECRET, signingOptions, (err, token) => {
    if (err) { done(err);
      return; }
    done(null, token);
  });

}

module.exports = createJWT;
