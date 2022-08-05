const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
  let salt = await bcrypt.genSaltSync(10);
  hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};

module.exports = { hashPassword };
