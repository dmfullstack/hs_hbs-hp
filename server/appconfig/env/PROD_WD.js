let config = {
  JWT_SECRET: 'abcdefghijklmnopqrstuvwxyz',
  PORT: process.env.PORT || 3000,
  AMQP_URL: process.env.AMQP_URL || 'amqp://localhost',
  DP_API_BASE_URL: process.env.DP_API_BASE_URL || 'localhost:8081/api/v1',
  STACK_GROUP_PREFIX: process.env.STACK_GROUP_PREFIX || 'stack_',
  ASSIGNMENT_GROUP_NAME_SUFFIX: process.env.ASSIGNMENT_GROUP_NAME_SUFFIX || '_assignments',
  ASSIGNMENTS_GIT_SERVER_BASE_URL: process.env.ASSIGNMENT_REPO_BASE_URL || 'https://gitlab-wd.stackroute.in',
  ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN: process.env.ASSIGNMENT_ADMIN_TOKEN || 'd73b3fdcfc63d24c088fd4ea75e01cee3ca88e4ff66e1ef3589b83737ab82665',
  HOBBES_HTTP_BASE_URL: process.env.HOBBES_HTTP_BASE_URL || "http://localhost:3000",
  JSFS_BASE_REPO_URL:process.env.JSFS_BASE_REPO_URL || "ssh://git@gitlab-wd.stackroute.in:2222/assignments/base-boilerplate.git",
  HOBBES_REPO_EVAL_CONFIG_FILE_NAME: ".hobbes",
  RE_FETCH_EVALPARAMS_FOR_RE_EVAL: true,
  GIT_SSH_COMMAND: process.env.GIT_SSH_COMMAND || "ssh -o \"StrictHostKeyChecking no\" -i /ssh/id_rsa",
  MONGO: {
    DBNAME : process.env.HOBBES_DB || 'hobbes',
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-wd",
  USER_AUTH: {
   "gitlab-wd": {
      PROVIDER: "gitlab-wd",
      CLIENT_ID: '404fae6e5faac4b07c611c0e336e17fa63b29a837ebdd084785e9f39f9b6434f',
      CLIENT_SECRET: '2d7c5ecb774a97ce42fb3ee2a80dcae91deddc82d5c6110330ae22ee30883aa7',
      REDIRECT_URL: 'https://hobbes.stackroute.in/api/v1/auth/cadet/gitlab-wd/complete',
      BASE_URL: 'https://gitlab-wd.stackroute.in',
      ADMIN_TOKEN: 'd73b3fdcfc63d24c088fd4ea75e01cee3ca88e4ff66e1ef3589b83737ab82665'
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
