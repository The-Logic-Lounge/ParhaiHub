
import nodemailer from "nodemailer"


export const Sendmail = async function(email, subject, message) {
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASS) {
    console.error("SMTP credentials missing in .env file");
    throw new Error("SMTP credentials missing");
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL.trim(),
      pass: process.env.SMTP_PASS.replace(/\s+/g, ''),
    },
  });

  const receiver = {
    from: `"ParhaiHub" <${process.env.SMTP_EMAIL.trim()}>`,
    to: email,
    subject: subject,
    html: message
  };

  try {
    const info = await transporter.sendMail(receiver);
    console.log('Email sent:', info.response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};