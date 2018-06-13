const request = require('superagent');
const config = require('../../../config');
const logger = require('../../../applogger');


const findGitUsers = function({search, limit}, {accessProvider, accessToken}, done){
  let authConfig = config.USER_AUTH[accessProvider];
  let perPage = (limit || 999); // default fetch all

  // Get groups which user is added member (if Admin all groups are accessible to user)
  // Fetch all group, as by default only 20 groups are returned
  let gitUrl = `${authConfig.BASE_URL}/api/v3/users?search=${search}&access_token=${accessToken}&per_page=${perPage}`;

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
        logger.error('Cannot get list of groups:', msg, " for ", search);
        done(err);
        return;
    } else {
      if(res.body.length < 1){
        return done(null, []);
      }

      let userInfo = res.body.map((user) => {
        let userDetails = {
          "name" : user.name,
          "username": user.username,
          "avatarUrl": user["avatar_url"],
          "email":user.email
        }
        return userDetails;
      })
      done(null, userInfo);
    }
   })
}

module.exports = {
  findGitUsers
}