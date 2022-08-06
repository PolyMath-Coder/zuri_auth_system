const { Router } = require('express');
const router = Router();
const { userAuthentication } = require('../helpers/auth');

const {
  login,
  signUp,
  passwordRecovery,
  confirmPin,
} = require('../controllers/auth.controller');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/forgot/password', passwordRecovery);
router.post('/confirm/pin', userAuthentication, confirmPin);

module.exports = router;
