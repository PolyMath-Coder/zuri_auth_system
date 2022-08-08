const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/admin', require('./admin.routes'));
router.use('/manager', require('./manager.routes'));

module.exports = router;
