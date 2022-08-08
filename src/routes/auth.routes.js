const { Router } = require('express');
const router = Router();
const { userAuthentication } = require('../helpers/auth');
const {
  userLoginValidator,
  userSignUpValidator,
} = require('../helpers/validate');
const { logOut } = require('../controllers/auth.controller');
const { checkEmail } = require('../helpers/checkEmail');
const {
  login,
  signUp,
  passwordRecovery,
  resetPassword,
  confirmPin,
} = require('../controllers/auth.controller');

router.post('/signup', userSignUpValidator, checkEmail, signUp);
router.post('/login', userLoginValidator, login);
router.get('/logout', userAuthentication, logOut);
router.post('/forgot/password', passwordRecovery);
router.post('/confirm/pin', userAuthentication, confirmPin);
router.patch('/password/reset', userAuthentication, resetPassword);

module.exports = router;
