const User = require('../models/auth.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const randomInt = require('random-int');
require('dotenv').config();
const JSON_WEB_SECRET = process.env.TOKEN_SECRET;
const AUTH_PASSWORD = process.env.PASSWORD;
const GOOGLE_CLIENTID = process.env.OAUTH_CLIENTID;
const GOOGLE_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const AUTH_EMAIL = process.env.EMAIL_ADDRESS;
const { sendEmail } = require('../helpers/nodemail');
const maxAge = 12 * 60 * 60;
const { hashPassword } = require('../helpers/configure');
const signUp = async (req, res) => {
  const data = req.body;
  data.pin = randomInt(100000, 999999);
  data.password = await bcrypt.hash(data.password, 10);
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
      .json({ status: 'error', msg: 'Ooops! Kindly register this mail.' });
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
  return res
    .status(200)
    .json({ status: 'success', msg: 'Login Successful', token });
};

const passwordRecovery = async (req, res) => {
  const { email } = req.body;
  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    throw Error('This email is not registered');
    // ({
    //   status: 'error',
    //   msg: 'This email is not registered... ',
    // });
  }
  sendEmail(checkUser);
  return res.status(200).json({
    status: 'success',
    msg:
      'We have received your request. You have just received a mail. Kindly go through in order to proceed to the next line of action.',
  });

  // res.json({ success: 'Heyy... So Good!' });
};

const confirmPin = (req, res) => {
  // console.log(req.user);
  const { pin } = req.body;
};

module.exports = { login, signUp, confirmPin, passwordRecovery };
