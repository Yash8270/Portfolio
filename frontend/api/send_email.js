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
  from: email,
  to: process.env.REACT_APP_EMAIL_USER,
  subject: `Portfolio Message: ${subject}`,
  html: `
    <div style="font-family: Fira Code, sans-serif; font-size: 15px; color: #333;">
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
      <hr />
      <p style="font-size: 13px; color: #777;">Sent from your portfolio contact form</p>
    </div>
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
