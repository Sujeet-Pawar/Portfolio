// Sends a test email using the backend's SMTP configuration.
// Usage: node test_email.js  (or: npm run test:email)
require('dotenv').config();

const { transporter, EMAIL_ADDRESS, EMAIL_PASSWORD, RECIPIENT_EMAIL } = require('./mailer');

if (!EMAIL_ADDRESS || !EMAIL_PASSWORD) {
  console.error('EMAIL_ADDRESS and EMAIL_PASSWORD must be set (see backend/.env).');
  process.exit(1);
}

transporter
  .sendMail({
    from: EMAIL_ADDRESS,
    to: RECIPIENT_EMAIL,
    subject: 'Portfolio Backend — Test Email',
    text: 'This is a test email from your portfolio backend (Node.js).'
  })
  .then((info) => {
    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  })
  .catch((err) => {
    console.error('Failed to send test email:', err.message);
    process.exit(1);
  });
