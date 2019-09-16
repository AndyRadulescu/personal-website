import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

const cors = require('cors')({ origin: true });

admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'radulescu.eduard.andrei@gmail.com',
    pass: 'yourgmailaccpassword'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting dest email by query string
    const dest = req.query.dest;

    const mailOptions = {
      from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: dest,
      subject: 'I\'M A PICKLE!!!', // email subject
      html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            ` // email content in HTML
    };

    transporter.sendMail(mailOptions, (erro) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  });
});
