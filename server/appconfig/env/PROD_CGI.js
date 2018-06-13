let config = {
  JWT_SECRET: 'SagarAbCdEfGhIjKlMnOpQrStUvWxYzVikramSurya0123456789Basav',
  PORT: process.env.PORT || 3001,
  AMQP_URL: process.env.AMQP_URL || 'amqp://localhost',
  DP_API_BASE_URL: process.env.DP_API_BASE_URL || 'localhost:8081/api/v1',
  STACK_GROUP_PREFIX: process.env.STACK_GROUP_PREFIX || 'stack_',
  ASSIGNMENT_GROUP_NAME_SUFFIX: process.env.ASSIGNMENT_GROUP_NAME_SUFFIX || '_assignments',
  ASSIGNMENTS_GIT_SERVER_BASE_URL: process.env.ASSIGNMENT_REPO_BASE_URL || 'https://gitlab-wd.stackroute.in',
  ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN: process.env.ASSIGNMENT_ADMIN_TOKEN || 'd73b3fdcfc63d24c088fd4ea75e01cee3ca88e4ff66e1ef3589b83737ab82665',
  HOBBES_HTTP_BASE_URL: process.env.HOBBES_HTTP_BASE_URL || "http://localhost:3001",
  JSFS_BASE_REPO_URL:process.env.JSFS_BASE_REPO_URL || "ssh://git@gitlab-mt.stackroute.in:2222/assignments/base-boilerplate.git",
  HOBBES_REPO_EVAL_CONFIG_FILE_NAME: ".hobbes",
  RE_FETCH_EVALPARAMS_FOR_RE_EVAL: true,
  GIT_SSH_COMMAND: process.env.GIT_SSH_COMMAND || "ssh -o \"StrictHostKeyChecking no\" -i /ssh/id_rsa",
  MONGO: {
    DBNAME : process.env.HOBBES_DB || 'hobbesCGI',
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-cgi",
  USER_AUTH: {
   "gitlab-cgi":{
      PROVIDER: "gitlab-cgi",
      CLIENT_ID: 'db964a803f92f71500d483b6f29a51fa3fdf508aed811c751d7af9132dd4497a',
      CLIENT_SECRET: 'e8b6db40390010dcc8bf8ce088914e654e8a0eb3c3d894b865dfb764f8cc6033',
      REDIRECT_URL: 'https://hobbes-cgi.stackroute.in/api/v1/auth/cadet/gitlab-cgi/complete',
      BASE_URL: 'https://gitlab-cgi.stackroute.in',
      ADMIN_TOKEN: '3aa61254dfc472354f88edf10b4c0e92158a1c42cbcfd8736c5e6eb0bb875d01'
    }
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
