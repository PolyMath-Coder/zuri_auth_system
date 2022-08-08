const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth.routes'));
router.use('/admin', require('./admin.routes'));
router.use('/manager', require('./manager.routes'));
router.use('/staff', require('./staff.routes'));

module.exports = router;
