let config = {
  JWT_SECRET: 'SagarAbCdEfGhIjKlMnOpQrStUvWxYzVikramSurya0123456789Basav',
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
    DBNAME : process.env.HOBBES_DB || 'hobbesCTS',
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-cts",
  USER_AUTH: {
   "gitlab-cts":{
      PROVIDER: "gitlab-cts",
      CLIENT_ID: 'bd5cb68653b94897ab06823ddc9b53f8bda8748a4ecf64a327a0b185d6ac8632',
      CLIENT_SECRET: '03e3394b08c3f9ea485258cd0788bea29f71758ea8e3bbae0808f5abbf2e9c8c',
      REDIRECT_URL: 'https://hobbes-cts.stackroute.in/api/v1/auth/cadet/gitlab-cts/complete',
      BASE_URL: 'https://gitlab-cts.stackroute.in',
      ADMIN_TOKEN: '6ddeef6cfc6e6ae847cb5d1cbf0f1ce5375e3363797db60fa8520b246ea6ad32'
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
