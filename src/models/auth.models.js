const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  userRole: {
    type: String,
    enum: ['user', 'staff', 'manager', 'admin'],
  },
});

// userSchema.pre('save', async function(next) {
//   const salt = await bcrypt.gensaltSync(10);
//   this.password = await bcrypt.hashSync(this.password, salt);
//   next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
