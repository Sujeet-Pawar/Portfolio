// Portfolio Backend — Node.js (Express + Nodemailer)
// Same API as the previous Flask backend:
//   GET  /api/health    -> health check
//   POST /api/contact   -> validates the form and sends an email via SMTP
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { transporter, EMAIL_ADDRESS, EMAIL_PASSWORD, RECIPIENT_EMAIL } = require('./mailer');

const app = express();
app.use(cors()); // allow all origins (Netlify -> Render)
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', message: 'Portfolio backend is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const data = req.body || {};

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const { name, email, subject, message } = data;

    const emailContent = `
    New contact form submission:

    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}

    ---
    This message was sent from Sujeet Pawar's portfolio contact form.
    `;

    // Send email
    if (EMAIL_ADDRESS && EMAIL_PASSWORD) {
      await transporter.sendMail({
        from: EMAIL_ADDRESS,
        to: RECIPIENT_EMAIL,
        subject: `Portfolio Contact: ${subject}`,
        text: emailContent
      });
      console.log('Email sent successfully!');
    }

    res.json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error processing contact form:', err.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const port = parseInt(process.env.PORT || '5000', 10);
app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio backend listening on port ${port}`);
});
