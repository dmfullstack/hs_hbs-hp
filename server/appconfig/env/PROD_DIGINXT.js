let config = {
  JWT_SECRET: 'DIGINEXT_SagarAbCdEfGhIjKlMnOpQrStUvWxYzVikramSurya0123456789Basav',
  PORT: process.env.PORT || 3000,
  AMQP_URL: process.env.AMQP_URL || 'amqp://localhost',
  DP_API_BASE_URL: process.env.DP_API_BASE_URL || 'localhost:8081/api/v1',
  STACK_GROUP_PREFIX: process.env.STACK_GROUP_PREFIX || 'stack_',
  ASSIGNMENT_GROUP_NAME_SUFFIX: process.env.ASSIGNMENT_GROUP_NAME_SUFFIX || '_assignments',
  ASSIGNMENTS_GIT_SERVER_BASE_URL: process.env.ASSIGNMENT_REPO_BASE_URL || 'https://assignments-repo.stackroute.in/',
  ASSIGNMENTS_GIT_SERVER_ADMIN_TOKEN: process.env.ASSIGNMENT_ADMIN_TOKEN || 'b5e4b2c6851c314a32c9aa5fccc0590b4988558813452e243c9242dc5998bd43',
  HOBBES_HTTP_BASE_URL: process.env.HOBBES_HTTP_BASE_URL || "http://localhost:3000",
  JSFS_BASE_REPO_URL:process.env.JSFS_BASE_REPO_URL || "ssh://git@gitlab-wd.stackroute.in:2222/assignments/base-boilerplate.git",
  HOBBES_REPO_EVAL_CONFIG_FILE_NAME: ".hobbes",
  RE_FETCH_EVALPARAMS_FOR_RE_EVAL: true,
  GIT_SSH_COMMAND: process.env.GIT_SSH_COMMAND || "ssh -o \"StrictHostKeyChecking no\" -i /ssh/id_rsa",
  MONGO: {
    DBNAME : process.env.HOBBES_DB || 'hobbesDigiNxt',
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-diginxt",
  USER_AUTH: {
   "gitlab-diginxt":{
      PROVIDER: "gitlab-diginxt",
      CLIENT_ID: '10da7f5449141eaa7e24bf42e2f6611b008e1062f5109d3b5ce68b6cf502f33b',
      CLIENT_SECRET: '53453f1f26b0f20bab0926b48a02e579136c26f9cd7e0d92cffe6fcd3682edd3',
      REDIRECT_URL: 'https://hobbes.training.com/api/v1/auth/cadet/gitlab-diginxt/complete',
      BASE_URL: 'https://gitlab.training.com',
      ADMIN_TOKEN: '27fa6d15a26c42b70c804eeb7d4643332496f1330a897dfee2d71f6f4078822d'
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
