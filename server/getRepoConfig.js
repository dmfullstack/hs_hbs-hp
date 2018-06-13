const child_process = require('child_process');
const lodash = require('lodash');
const config = require('./config');
const logger = require('./applogger');

module.exports = function(submission, done) {
  console.log("this is submission",submission);
  //Assuming currently the solutionRepoRef is of type branch, if this has to change, we have to check command format accordingly
  let cmd = `git archive --remote="${submission.solutionRepoUrl}" ${submission.solutionRepoRef} "${config.HOBBES_REPO_EVAL_CONFIG_FILE_NAME}" | tar -xO`;

  console.log('Executing CMD: ', cmd);
  let cmdProcess = child_process.spawn(cmd, {env: lodash.merge({GIT_SSH_COMMAND: config.GIT_SSH_COMMAND}, process.env), shell:true});

  let stdout = '';
  cmdProcess.stdout.on('data', (data) => {
    logger.debug(cmd,'STDOUT:', data.toString());
    stdout += data.toString();
  });

  let stderr = '';
  cmdProcess.stderr.on('data', (data) => {
    logger.debug(cmd,'STDERR:', data.toString());
    stderr += data.toString();
  });

  cmdProcess.stderr.on('error', (err) => {
    logger.debug(cmd,'ERROR:', err);
    stderr += data.toString();
  });

  cmdProcess.on('exit', (exitCode) => {
    cmdProcess = null;
    logger.debug('Process (', cmd, ') exited with code:', exitCode);

    if(exitCode > 0 && stderr) {
      logger.error('Error in getting evaluation config ', stderr);
      return done({error: 'Error in evaluation settings, please verify same and try again..!'});
    }

    try {
      let evalParams = JSON.parse(stdout.replace(/\n/.g,''));

      if (!evalParams || !evalParams.workflow || !evalParams.scores ) {
        logger.error('Invalid evaluation config, expected config settings not found..!');
        return done({error: 'invalid evaluation settings in assignment, please verify same and try again..!'});
      }

      // PS: This should be CASE SENSITIVE match as work flows are saved in a file, which is case sensitive
      if (!config.DP_SUPPORTED_WORKFLOWS.find((workflow) => workflow == evalParams.workflow)) {
        logger.error('Invalid or Unsupported evaluation workflow ', evalParams.workflow);
        return done({ error: 'invalid evaluation schema settings for assignment, please verify same and try again..!' });
      }

      logger.debug("Got evaluation params of ", submission.solutionRepoUrl, " : ", evalParams);

      done(null, evalParams);
    } catch (err) {
      logger.error('Error in parsing evaluation config ', err);
      return done({error: 'error in evaluation settings or format, please verify same and try again..!'});
    }
  });
}
