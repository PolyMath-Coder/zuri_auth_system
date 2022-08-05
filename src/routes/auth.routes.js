const { Router } = require('express');
const router = Router();

const { login, signUp } = require('../controllers/auth.controller');

router.post('/signup', signUp);

router.post('/login', login);

module.exports = router;
