// Import required packages
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Parses incoming JSON requests

// Contact form route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail, or you can configure other services like SendGrid, Yahoo, etc.
    auth: {
      user: 'leborobynlr1@gmail.com', // Your email
      pass: 'Granny02$',  // Your email password or app-specific password (if using Gmail)
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Sender's email address (from form)
    to: 'leborobynlr1@gmail.com', // Your email address (where you want to receive contact messages)
    subject: `New message from ${name}`, // Subject line
    text: `You have received a message from ${name} (${email}): \n\n${message}`, // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
