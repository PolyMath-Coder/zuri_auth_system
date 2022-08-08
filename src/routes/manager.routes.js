const { Router } = require('express');

const router = Router();

const { authenticatingUser, authorizeAdmin } = require('../helpers/auth');

const { deleteUser } = require('../controllers/user.controllers');

router.delete(
  '/delete/user/:id',
  authenticatingUser,
  authorizeAdmin,
  deleteUser
);

module.exports = router;
