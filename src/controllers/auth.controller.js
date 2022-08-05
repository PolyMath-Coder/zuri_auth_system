const signUp = (req, res) => {
  res.json({ msg: 'Here we are' });
  console.log('Yes');
};

const login = (req, res) => {
  console.log('NO');
};

module.exports = { login, signUp };
