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
  MONGO: {
    DBNAME: process.env.HOBBES_DB || 'hobbes',
    HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.MONGO_PORT || 27017,
  },
  AUTH_PROVIDER: process.env.AUTH_PROVIDER || "gitlab-dev",
  USER_AUTH: {
/*    "gitlab-dev": {
      PROVIDER: "gitlab-dev",
      CLIENT_ID: '85f92dbd4e3ecd324a5e19493d9ece72567a6715bca7f1ecf16396b35fa3c49c',
      CLIENT_SECRET: '335cb020ce80eb262817eea70e06bdf8f3005673703786ab696bb9f124c271bb',
      REDIRECT_URL: 'http://internal.stackroute.in/api/v1/auth/cadet/gitlab-dev/complete',
      BASE_URL: 'https://gitlab-dev.stackroute.in',
      ADMIN_TOKEN: '525b4f45ec945e1106298e83331c152e8ec236f47b568fd8fffc0e2d2df6b10b'
    }*/
    "gitlab-dev": {
      PROVIDER: "gitlab-dev",
      CLIENT_ID: 'db2ef21db8eacee2a438392746e67c1b3b358986e2c8e30c7c5ad75d694223d6',
      CLIENT_SECRET: '7d09ff711eafb46968cf60374849b6f1b565a22f87249f82f2f989bd1da74047',
      REDIRECT_URL: 'https://hobbes-dev.stackroute.in/api/v1/auth/cadet/gitlab-dev/complete',
      BASE_URL: 'https://gitlab-dev.stackroute.in',
      ADMIN_TOKEN: '525b4f45ec945e1106298e83331c152e8ec236f47b568fd8fffc0e2d2df6b10b'
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
