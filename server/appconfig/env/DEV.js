let config = {
  JWT_SECRET: 'abcdefghijklmnopqrstuvwxyz',
  PORT: process.env.PORT || 3000,
  AMQP_URL: process.env.AMQP_URL || 'amqp://localhost',
  DP_API_BASE_URL: process.env.DP_API_BASE_URL || 'localhost:8081/api/v1',
  STACK_GROUP_PREFIX: process.env.STACK_GROUP_PREFIX || 'stack_',
  ASSIGNMENT_GROUP_NAME_SUFFIX: process.env.ASSIGNMENT_GROUP_NAME_SUFFIX || '_assignments',
  ASSIGNMENTS_GIT_SERVER_BASE_URL: process.env.ASSIGNMENT_REPO_BASE_URL || 'https://gitlab-dev.stackroute.in/',
  ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN: process.env.ASSIGNMENT_ADMIN_TOKEN || '525b4f45ec945e1106298e83331c152e8ec236f47b568fd8fffc0e2d2df6b10b',
  HOBBES_HTTP_BASE_URL: process.env.HOBBES_HTTP_BASE_URL || "http://localhost:3000",
  JSFS_BASE_REPO_URL: process.env.JSFS_BASE_REPO_URL || "ssh://git@gitlab-dev.stackroute.in:2222/assignments/base-boilerplate.git",
  HOBBES_REPO_EVAL_CONFIG_FILE_NAME: ".hobbes",
  RE_FETCH_EVALPARAMS_FOR_RE_EVAL: true,
  GIT_SSH_COMMAND: process.env.GIT_SSH_COMMAND || "ssh -o \"StrictHostKeyChecking no\" -i /ssh/id_rsa",
  RUN_BOTS_WITH_WWW: process.env.RUN_BOTS_WITH_WWW || false,
  RECEIVER_BOTS: {
    SLACKBOT: process.env.SLACKBOT || false,
    ILIMIBOT: process.env.ILIMIBOT || false,
  },
  // ILIMI_ORCH_API_BASE_URL: process.env.ILIMI_ORCH_API_BASE_URL || "http://localhost:9090",
  ILIMI_ORCH_API_BASE_URL: process.env.ILIMI_ORCH_API_BASE_URL || "http://learn-dev.stackroute.in",
  ILIMIBOT_IGNORE_REQ_ERRORS: process.env.ILIMIBOT_IGNORE_REQ_ERRORS || false,
  MONGO: {
    DBNAME: process.env.HOBBES_DB || 'hobbes',
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-dev",
  USER_AUTH: {
    "gitlab-dev": {
      PROVIDER: "gitlab-dev",
      CLIENT_ID: 'cf5efaceae52ebdf57c13e1537997368591202afd1145b178d0354c5e0b874cf',
      CLIENT_SECRET: 'ee92903552344ce3a8508b2e32a599b446c7a07ddecf23e95547b5f5159d86c4',
      REDIRECT_URL: 'http://localhost:3000/api/v1/auth/cadet/gitlab-dev/complete',
      BASE_URL: 'https://gitlab-dev.stackroute.in',
      ADMIN_TOKEN: '525b4f45ec945e1106298e83331c152e8ec236f47b568fd8fffc0e2d2df6b10b'
    },
    "gitlab-wd": {
      PROVIDER: "gitlab-wd",
      CLIENT_ID: '607880f4d7df8330d8150df0a2cf9bbb533cc11296cde8ad99c1f88b7918a66d',
      CLIENT_SECRET: '4cb258e8ca29eac83042656c6f852a7455e28e0c0b5200908223f4a87ccb804e',
      REDIRECT_URL: 'http://localhost:3000/api/v1/auth/cadet/gitlab-wd/complete',
      BASE_URL: 'https://gitlab-wd.stackroute.in',
      ADMIN_TOKEN: 'd73b3fdcfc63d24c088fd4ea75e01cee3ca88e4ff66e1ef3589b83737ab82665'
    },
    "gitlab-mt": {
      PROVIDER: "gitlab-mt",
      CLIENT_ID: 'fe5079b200d7711e5c4552353b4a451c43e639c67002e61c1e6fe88ec5b36fe5',
      CLIENT_SECRET: '5ef6e04c250728070a835365e6f29f446d3d2e4de7908357f4ee32017671c39f',
      REDIRECT_URL: 'http://localhost:8080/api/v1/auth/cadet/gitlab-mt/complete',
      BASE_URL: 'https://gitlab-mt.stackroute.in',
      ADMIN_TOKEN: '1a43cccaac017025bd7d1d3efa3ecad4867659270b27d3054fb407c410483f71'
    },
    "gitlab-cts": {
      PROVIDER: "gitlab-cts",
      CLIENT_ID: 'e688c8ff97e3b31c2714876e9fe4892309e10307915add2c0e33282bebf86e67',
      CLIENT_SECRET: 'f8c54629ec7d66ae219a594372a6a5d1333ac14006e7e2343e81bcc3d9354ea1',
      REDIRECT_URL: 'http://localhost:3000/api/v1/auth/cadet/gitlab-cts/complete',
      BASE_URL: 'https://gitlab-cts.stackroute.in',
      ADMIN_TOKEN: '6ddeef6cfc6e6ae847cb5d1cbf0f1ce5375e3363797db60fa8520b246ea6ad32'
    },
    "gitlab-learn": {
      PROVIDER: "gitlab-learn",
      CLIENT_ID: 'e8aa7f203a72687f9bd8b801f809a7bc09331ef183f9e59a90d7871674f48022',
      CLIENT_SECRET: '25b63fa961d92a610f0b8908eff10c915043aad74baeb59726837422aa8168c3',
      REDIRECT_URL: 'http://localhost:3000/api/v1/auth/cadet/gitlab-learn/complete',
      BASE_URL: 'https://gitlab.stackroute.in',
      ADMIN_TOKEN: '68eb039c33337d41f4d4085eb89eb70db52d32f165644ac24240ad8c41be64ad'
    }
    // "gitlab-cgi":{
    //   PROVIDER: "gitlab-cgi",
    //   CLIENT_ID: '415add2e6fba332c25df1bf9690fad31d85c547de8fa426b2612cadb0665844e',
    //   CLIENT_SECRET: '6673ffda213223d797fbc845d49ba5bb6499ccdde56a5c9283634717450c3387',
    //   REDIRECT_URL: 'http://localhost:3001/api/v1/auth/cadet/gitlab-cgi/complete',
    //   BASE_URL: 'https://gitlab-cgi.stackroute.in',
    //   ADMIN_TOKEN: '3aa61254dfc472354f88edf10b4c0e92158a1c42cbcfd8736c5e6eb0bb875d01'
    // }
    // "gitlab-cgi": {
    //   PROVIDER: "gitlab-cgi",
    //   CLIENT_ID: '8b198daebd5ae910b5d4dbf506ae2ea997613376f28132499f8c53a560e2bce6',
    //   CLIENT_SECRET: 'b7592230385be2ea901fbdb013fd40633d483322f9f22433f8104b236eaf24f3',
    //   REDIRECT_URL: 'http://localhost:3000/api/v1/auth/cadet/gitlab-cgi/complete',
    //   BASE_URL: 'https://gitlab-cgi.stackroute.in',
    //   ADMIN_TOKEN: '3aa61254dfc472354f88edf10b4c0e92158a1c42cbcfd8736c5e6eb0bb875d01'
    // }
  },
  DP_SUPPORTED_WORKFLOWS: ["NodeJSConsoleApp",
    "NodeJSModuleApp",
    "NodeJSConsoleHTMLApp",
    "NodeJSExpressApp",
    "NodeJSExpressMongoApp",
    "NodeJSExpressCassandraApp",
    "NodeJSMongoAngularE2EEval",
    "NodeJSMongoAngularEval",
    "AngularIoApp",
    "OpenJDK8MavenApp",
    "OpenJDK8SpringApp",
    "OpenJDK8SpringMySQLApp",
    "OpenJDK8SpringMySQLMongoApp",
    "OpenJDK8SpringAngularMySQLApp",
    "SpringFullStackE2EEval",
    "DotNetApp",
    "DotNetMsSQLApp",
    "DotNetAngularMSSQLApp",
    "sonarqube"
  ]
};

config.MONGO.MONGO_URL = process.env.MONGO_URL || ('mongodb://' + config.MONGO.HOST + ':' + config.MONGO.PORT + '/' + config.MONGO.DBNAME);

module.exports = config;
