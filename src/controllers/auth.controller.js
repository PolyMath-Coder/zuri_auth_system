const User = require('../models/auth.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const JSON_WEB_SECRET = process.env.TOKEN_SECRET;
const maxAge = 12 * 60 * 60;
const { hashPassword } = require('../helpers/configure');
const signUp = async (req, res) => {
  const data = req.body;
  data.password = hashPassword(data.password);
  console.log(data.password);
  const user = await User.create(data);

  user.userRole = 'not assigned';
  const token = jwt.sign({ id: user._id }, JSON_WEB_SECRET, {
    expiresIn: maxAge,
  });
  // console.log(token);
  res.set('x-auth-access', `Bearer ${token}`);
  res.json({ status: 'success', msg: 'User now created...', user, token });
  //   console.log('Yes');
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res
      .status(400)
      .json({ status: 'error', msg: 'Ooops! Kindly register with this mail.' });
    return;
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res
      .status(400)
      .json({ status: 'error', msg: 'Kindly input the right password...' });
  }
  const token = jwt.sign({ _id: user._id }, JSON_WEB_SECRET, {
    expiresIn: maxAge,
  });
  res.status(200).json({ status: 'success', msg: 'Login Successful', token });

  // console.log('NO');
};

module.exports = { login, signUp };
