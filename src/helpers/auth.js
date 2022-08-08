const jwt = require('jsonwebtoken');
require('dotenv').config();
const JSON_WEB_SECRET = process.env.TOKEN_SECRET;
const User = require('../models/auth.models');

const userAuthentication = (req, res, next) => {
  const bearerHeader = req.headers['x-auth-access'];
  // console.log(bearerHeader);
  if (!bearerHeader) {
    res.status(403).json({
      status: 'error',
      msg: "Oops! Something sure went wrong... You're not allowed in here!",
    });
    return;
  }
  const bearer = bearerHeader.split(' ');
  const [tops, token] = bearer;
  // console.log(token);
  jwt.verify(token, JSON_WEB_SECRET, async (err, decodedToken) => {
    if (err) {
      res.status(401).json({
        status: 'error',
        msg: 'Oops! Your token might be expired...',
      });
      return;
    } else {
      console.log(decodedToken);
      const user = await User.findOne({ _id: decodedToken._id });
      req.user = user;
      //console.log(req.user);

      // console.log(req.user);
      return next();
    }
  });
  // req.token = bearer;
  // console.log(bearer[1]);
};

const authenticatingUser = (req, res, next) => {
  const bearerHeader = req.headers['x-auth-access'];
  // console.log(bearerHeader);
  if (!bearerHeader) {
    res.status(403).json({
      status: 'error',
      msg: "Oops! Something sure went wrong... You're not allowed in here!",
    });
    return;
  }
  const bearer = bearerHeader.split(' ');
  const [tops, token] = bearer;
  // console.log(token);
  jwt.verify(token, JSON_WEB_SECRET, async (err, decodedToken) => {
    if (err) {
      res.status(401).json({
        status: 'error',
        msg: 'Oops! Your token might be expired...',
      });
      return;
    } else {
      console.log(decodedToken);
      const user = await User.findOne({ _id: decodedToken.id });

      req.user = user;
      console.log(req.user);

      // console.log(req.user);
      return next();
    }
  });
  // req.token = bearer;
  // console.log(bearer[1]);
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.userRole !== 'admin') {
    res
      .status(400)
      .json({ status: 'error', msg: 'Only admins are allowed Here!' });
    return;
  }
  return next();
};

const authorizeStaff = (req, res, next) => {
  if (req.user.userRole !== 'staff') {
    res
      .status(400)
      .json({ status: 'error', msg: 'Only staff are allowed Here!' });
    return;
  }
  return next();
};

const authorizeManager = (req, res, next) => {
  if (req.user.userRole !== 'manager') {
    res
      .status(400)
      .json({ status: 'error', msg: 'Only Managers are allowed Here!' });
    return;
  }
  return next();
};

module.exports = {
  userAuthentication,
  authenticatingUser,
  authorizeManager,
  authorizeStaff,
  authorizeAdmin,
};
