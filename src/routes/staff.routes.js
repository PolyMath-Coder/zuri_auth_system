const { Router } = require('express');
const { getAllUsers } = require('../controllers/user.controllers');

const { authenticatingUser, authorizeStaff } = require('../helpers/auth');

const router = Router();

router.get('/users', authenticatingUser, authorizeStaff, getAllUsers);

module.exports = router;
