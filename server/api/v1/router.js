const router = require('express').Router();
const authVerifier = require('./auth/auth.verifier');

// Authentication related end points
router.use('/auth/', require('./auth'));

// Mount point for Repositories resource
// All exposed routes from the Repositories middleware will be prefixed with 'repos'
// Repos provide services for Listing repositories of a user, group
router.use('/repos', authVerifier, require('./repositories'));

// Mount point for Evaluations resource
// Evaluations resource provide services for submitting, fetching submissions and feedback
router.use('/evaluations', authVerifier, require('./evaluations'));

// Mount point for Evaluation workflow and its related resources
// Evaluation workflow resource provide services for fetching stages, which helps in troubleshooting a evaluation workflow
router.use('/evalworkflow', authVerifier, require('./evaluationworkflow'));

module.exports = router;
