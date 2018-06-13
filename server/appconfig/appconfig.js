const path = require('path');
const extend = require('util')._extend;

const defaults = {
  SERVER_ROOT: path.resolve(__dirname, '../'),
  NODE_ENV: process.env.NODE_ENV
};

const appConfig = {
  development: extend(require('./env/DEV'), defaults),
  internal: extend(require('./env/INTERNAL'), defaults),
  test: extend(require('./env/INTERNAL'), defaults),
  edge: extend(require('./env/EDGE'), defaults),
  production: extend(require('./env/PROD'), defaults),
  production_wd: extend(require('./env/PROD_WD'), defaults),
  production_mtree: extend(require('./env/PROD_MTREE'), defaults),
  production_diginxt: extend(require('./env/PROD_DIGINXT'), defaults),
  production_cgi: extend(require('./env/PROD_CGI'), defaults),
  production_cts: extend(require('./env/PROD_CTS'), defaults),
  production_learn: extend(require('./env/PROD_LEARN'), defaults),
  restore_edge: extend(require('./env/RESTORE_EDGE'), defaults)
};

const effectiveENV = (process.env.HOBBES_INSTANCE_ENV || process.env.NODE_ENV || 'development');

process.stdout.write('\nConfiguring for environment: ' + effectiveENV);

const effectiveConfig = appConfig[effectiveENV];
process.stdout.write('\nconfig settings: ' + JSON.stringify(effectiveConfig) + "\n");

module.exports = effectiveConfig;
