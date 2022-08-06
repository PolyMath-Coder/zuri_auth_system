const jwt = require('jsonwebtoken');

const userAuthentication = (req, res, next) => {
  const token = req.headers['x-auth-access'];
  next();
};

module.exports = { userAuthentication };
