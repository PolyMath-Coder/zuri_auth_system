const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');

const hashPassword = async (password) => {
  let salt = await bcrypt.genSaltSync(10);
  hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};

// const otpGenerator = () => {
//   const OTP = otpGenerator.generate();
//   return OTP;
// };
module.exports = { hashPassword };
