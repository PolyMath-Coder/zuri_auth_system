const { Router } = require('express');

const router = Router();

const { authenticatingUser, authorizeManager } = require('../helpers/auth');

const { deleteUser } = require('../controllers/user.controllers');

router.delete(
  '/delete/user/:id',
  authenticatingUser,
  authorizeManager,
  deleteUser
);

module.exports = router;
