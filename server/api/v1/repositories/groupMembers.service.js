const request = require('superagent');
const config = require('../../../config');
const logger = require('../../../applogger');

const getGroupMembers = function(groupName, options, done) {
  //Will go to the same server from which user was authenticated
  let authConfig = config.USER_AUTH[options.accessProvider];

  let serverURL = `${authConfig.BASE_URL}/api/v3/groups/${groupName}/members`;
  let token = `${authConfig.ADMIN_TOKEN}`;
  let gitURL = `${serverURL}/?access_token=${token}&per_page=${options.limit}`;

  request
   .get(gitURL)
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
       logger.error('Cannot get groupmembers:', msg, " for ", groupName);
       done(msg);
       return;
     }

     let memberColln = res.body;

     let usernames = memberColln.map((userInfo) => {
      let membersInfo = {
        //userInfo.username;
        username : userInfo.username,
        avatarUrl : userInfo.avatar_url
      }

      return membersInfo;
    })
     done(null, usernames);
  })
}

module.exports = {
  getGroupMembers : getGroupMembers
}
