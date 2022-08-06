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
      console.log(decodedToken.id);
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

module.exports = { userAuthentication };
