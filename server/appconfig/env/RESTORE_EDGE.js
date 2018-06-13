let config = {
  JWT_SECRET: 'abcdefghijklmnopqrstuvwxyz',
  PORT: process.env.PORT || 3000,
  AMQP_URL: process.env.AMQP_URL || 'amqp://10.20.3.158:5672',
  DP_API_BASE_URL: process.env.DP_API_BASE_URL || 'localhost:8081/api/v1',
  STACK_GROUP_PREFIX: process.env.STACK_GROUP_PREFIX || 'stack_',
  ASSIGNMENT_GROUP_NAME_SUFFIX: process.env.ASSIGNMENT_GROUP_NAME_SUFFIX || '_assignments',
  ASSIGNMENTS_GIT_SERVER_BASE_URL: process.env.ASSIGNMENT_REPO_BASE_URL || 'https://gitlab-edge.stackroute.in/',
  ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN: process.env.ASSIGNMENT_ADMIN_TOKEN || '81cd34fba1d7d87256a6c18b83b1127817845d7dde513518d6d7c872fea805a3',
  HOBBES_HTTP_BASE_URL: process.env.HOBBES_HTTP_BASE_URL || "http://localhost:3000",
  JSFS_BASE_REPO_URL: process.env.JSFS_BASE_REPO_URL || "ssh://git@gitlab-dev.stackroute.in:2222/assignments/base-boilerplate.git",
  HOBBES_REPO_EVAL_CONFIG_FILE_NAME: ".hobbes",
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
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-edge",
  USER_AUTH: {
    "gitlab-edge": {
      PROVIDER: "gitlab-edge",
      CLIENT_ID: 'e8bf9f4d2b2125114179835b58cf3bb4fc2aff478bc8ac8ea1c8474456d84e34',
      CLIENT_SECRET: '9fc378a5f8e3b04293a51d92bbd98191158a7587a7f44b80bb010d8706ba993f',
      REDIRECT_URL: 'https://hobbes-edge.stackroute.in/api/v1/auth/cadet/gitlab-edge/complete',
      BASE_URL: 'https://gitlab-edge.stackroute.in/',
      ADMIN_TOKEN: '81cd34fba1d7d87256a6c18b83b1127817845d7dde513518d6d7c872fea805a3'
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
