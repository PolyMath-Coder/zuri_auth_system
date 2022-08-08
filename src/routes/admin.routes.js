const { Router } = require('express');
const { deleteUser } = require('../controllers/user.controllers');

const {
  authorizeAdmin,
  authenticatingUser,
  userAuthentication,
} = require('../helpers/auth');
const { makeUserAdmin } = require('../controllers/user.controllers');
const router = Router();

router.put('/make/:id', authenticatingUser, authorizeAdmin, makeUserAdmin);

router.delete(
  '/delete/user/:id',
  authenticatingUser,

  deleteUser
);

module.exports = router;
