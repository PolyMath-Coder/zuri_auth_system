const User = require('../models/auth.models');

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    res.status(400).json({
      status: 'error',
      message: 'Oops! A user with this email already exists!',
    });
    return;
  }
  next();
};

module.exports = { checkEmail };
