const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();
const JSON_WEB_SECRET = process.env.TOKEN_SECRET;
const AUTH_PASSWORD = process.env.PASSWORD;
const GOOGLE_CLIENTID = process.env.OAUTH_CLIENTID;
const GOOGLE_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const AUTH_EMAIL = process.env.EMAIL_ADDRESS;
// const { email, mailGenerator } = require('./email');
const sendEmail = (user) => {
  console.log(user);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // type: 'OAuth2',
      user: AUTH_EMAIL,
      pass: AUTH_PASSWORD,
      clientId: GOOGLE_CLIENTID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
    },
  });

  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      // Appears in header & footer of e-mails
      name: 'The Zuri Nodemailer Team',
      link: 'https://mailgen.js/',
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  const email = {
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

  let mailOptions = {
    from: `"Ayooluwa from Zuri" <ayoluwadeleke@gmail.com>`,
    to: user.email,
    subject: 'Zuri Training Nodemailer Project',
    html: mailGenerator.generate(email),
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log('Error ' + err);
    }
    console.log(`Email sent successfully, ${data}`);
  });
};
module.exports = { sendEmail };
