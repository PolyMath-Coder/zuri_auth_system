const { Router } = require('express');
const router = Router();

const { login, signUp } = require('../controllers/auth.controller');

router.post('/signup', signUp);
router.post('/login', login);
// router.post('/forgot/password');

module.exports = router;
