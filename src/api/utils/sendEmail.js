import nodemailer from "nodemailer";

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  }

  async sendResetEmail(emailRecipient, resetLink, nama = '') {
    const mailOptions = {
      from: `"Sistem Lectant ITS" <${process.env.EMAIL_USER}>`,
      to: emailRecipient,
      subject: 'Reset Password - Lectant Support',
      html: `
        <h2>Reset Password</h2>
        ${nama ? `<p>Halo ${nama},</p>` : ''}
        <p>Anda telah meminta untuk mereset password. Klik link berikut untuk melanjutkan:</p>
        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p>Atau copy link berikut ke browser Anda:</p>
        <p>${resetLink}</p>
        <p><strong>Link ini akan kadaluarsa dalam 1 jam.</strong></p>
        <p>Jika Anda tidak meminta reset password, abaikan email ini.</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Email ini dikirim secara otomatis, mohon tidak membalas email ini.</p>
      `
    };

    return await this.transporter.sendMail(mailOptions);
  }
}

export default EmailService;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false, // TLS handled by STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async ({ to, subject, text, html }) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    text,
    html,
  });
  return info;
};
