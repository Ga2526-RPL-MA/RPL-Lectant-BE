import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function sendResetEmail(to, resetLink) {
  const mailOptions = {
    from: `"RPL Lectant Support" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Reset Password Akun Mahasiswa ITS",
    html: `
      <h3>Reset Password Akun ITS</h3>
      <p>Halo,</p>
      <p>Klik link di bawah untuk mengatur ulang password kamu:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>Link ini hanya berlaku selama 15 menit.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

