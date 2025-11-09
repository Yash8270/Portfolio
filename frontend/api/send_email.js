import nodemailer from 'nodemailer';

export default async function handler(req, res) {
      res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Check if all fields are filled
  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: 'Please fill in all required fields.' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL_USER, // your email
      pass: process.env.REACT_APP_EMAIL_PASS, // your Gmail app password
    },
  });

  // Email to you (the portfolio owner)
  const mailOptions = {
    from: email, // the user's email
    to: process.env.REACT_APP_EMAIL_USER, // your inbox
    subject: `Portfolio Message: ${subject}`,
    text: `
You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send email. Please try again.' });
  }
}
