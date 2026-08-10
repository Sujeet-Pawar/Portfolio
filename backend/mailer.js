// Shared SMTP/Nodemailer configuration used by server.js and test_email.js.
// Reads the same env vars as the original Flask backend:
//   SMTP_SERVER, SMTP_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD, RECIPIENT_EMAIL
const nodemailer = require('nodemailer');

const SMTP_SERVER = process.env.SMTP_SERVER || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || EMAIL_ADDRESS;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465, false for 587 (STARTTLS)
  auth:
    EMAIL_ADDRESS && EMAIL_PASSWORD
      ? { user: EMAIL_ADDRESS, pass: EMAIL_PASSWORD }
      : undefined
});

module.exports = { transporter, SMTP_SERVER, SMTP_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD, RECIPIENT_EMAIL };
