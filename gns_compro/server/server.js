// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Atur port yang diinginkan

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email sender configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Ganti dengan email Gmail kamu
    pass: 'your-password', // Ganti dengan password aplikasi (jangan pakai password biasa)
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'almayrizqd@gmail.com', // Email tujuan
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, error: error.message });
    }
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
