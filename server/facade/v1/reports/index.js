const router = require('express').Router();

router.use('/evaluations/', require('./evaluations/'));

module.exports = router;
