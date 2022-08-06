const { Router } = require('express');
const router = Router();
const { userAuthentication } = require('../helpers/auth');

const {
  login,
  signUp,
  passwordRecovery,
} = require('../controllers/auth.controller');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/forgot/password', passwordRecovery);

module.exports = router;
