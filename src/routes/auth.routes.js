const { Router } = require('express');
const router = Router();
const { userAuthentication } = require('../helpers/auth');

const {
  login,
  signUp,
  passwordRecovery,
  resetPassword,
  confirmPin,
} = require('../controllers/auth.controller');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/forgot/password', passwordRecovery);
router.post('/confirm/pin', userAuthentication, confirmPin);
router.patch('/password/reset', userAuthentication, resetPassword);

module.exports = router;
