const User = require('../models/auth.models');

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const options = { new: true };
    const user = await User.findByIdAndDelete(id, options);
    res
      .status(200)
      .json({ status: 'success', msg: 'User accout now deactivated...' });
  } catch (err) {
    res.status(400).json({ status: 'error', msg: 'An error occurred Here...' });
  }
};

const getCertainUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({ status: 'success', msg: `User ${id} now fetched!` });
};

const makeUserAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const options = { new: true };
    const user = await User.findByIdAndUpdate(
      id,
      { userRole: 'superAdmin' },
      options
    );
    res.status(200).json({
      status: 'success',
      msg: `User ${id} is now an admin...`,
      user,
    });
  } catch (err) {
    res.status(400).json({ status: 'error', msg: 'An error kinda happened!' });
  }
};

module.exports = { deleteUser, getCertainUser, makeUserAdmin };
