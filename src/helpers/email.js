const Mailgen = require('mailgen');
exports.mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    // Appears in header & footer of e-mails
    name: 'The Zuri Nodemailer Team',
    link: 'https://mailgen.js/',
    // Optional product logo
    // logo: 'https://mailgen.js/img/logo.png'
  },
});

exports.email = {
  body: {
    greeting: `Heyy There`,
    intro: [
      `Thanks for your interest in joining the Zuri X I4G Training .`,
      `You requested to reset your password. Head back to the app and input the token provided below. `,
    ],

    action: {
      instructions: `${user.pin}`,
      button: {
        color: '', // Optional action button color
        text: '',
        link: '',
      },
    },
    outro: "Kindly ignore if this wasn't you, Thanks.",
  },
};

// module.exports = { mailGenerator };

exports.mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    // Appears in header & footer of e-mails
    name: 'The Zuri Nodemailer Team',
    link: 'https://mailgen.js/',
    // Optional product logo
    // logo: 'https://mailgen.js/img/logo.png'
  },
});

exports.email = {
  body: {
    greeting: `Heyy There`,
    intro: [
      `Thanks for your interest in joining the Zuri X HNG Internship .`,
      `We regret to inform you that admission into this year's cohort is closed.`,
    ],

    action: {
      instructions: `Kindly fill out the forms for the waitlist towards 2023`,
      button: {
        color: '', // Optional action button color
        text: '',
        link: '',
      },
    },
    outro: "Kindly ignore if this wasn't you, Thanks in anticipation",
  },
};

// module.exports = { mailGenerator };
