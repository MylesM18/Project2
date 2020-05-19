const router = require('express').Router();
router.use('/api', require('./song-routes'));
router.use(require('./html-routes'));

module.exports = router;