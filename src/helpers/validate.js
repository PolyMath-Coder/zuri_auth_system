const { check, validationResult } = require('express-validator');

exports.userSignUpValidator = [
  check('email')
    .isEmail()
    .withMessage('Kindly input a valid email.'),

  check('name')
    .trim()
    .isString()
    .withMessage('Name Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'Full name is required. Minimum of three characters required.'
    ),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Minimum of five characters required.'),

  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res.status(400).send({
        error: error.array().map((item) => `${item.param} Error - ${item.msg}`),
      });
    next();
  },
];

exports.userLoginValidator = [
  check('email')
    .isEmail()
    .withMessage('Kindly input a valid email.'),

  check('password')
    .isLength({ min: 5 })
    .withMessage('Minimum of five characters required.'),

  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res.status(400).send({
        error: error.array().map((item) => `${item.param} Error - ${item.msg}`),
      });
    next();
  },
];
