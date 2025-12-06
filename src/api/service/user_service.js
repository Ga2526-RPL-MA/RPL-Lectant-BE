import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.js";
import { sendEmail } from "../utils/sendEmail.js";
import { 
  findUserByAnyEmail, 
  findUserByEmail,
  findUserByResetToken,
  createUser, 
  updateResetToken, 
  updatePasswordAndClearToken 
} from "../repository/user_repository.js";
import crypto from "crypto";


export const registerUser = async (email, password) => {
  if (!email || !password) throw { status: 400, message: "Email dan kata sandi wajib diisi." };

  let role;
  if (/^[a-zA-Z0-9._%+-]+@student\.its\.ac\.id$/.test(email)) role = "mahasiswa";
  else if (/^[a-zA-Z0-9._%+-]+@if\.its\.ac\.id$/.test(email)) role = "dosen";
  else throw { status: 400, message: "Gunakan akun resmi ITS." };

  const existing = await findUserByEmail(email);
  if (existing) throw { status: 409, message: "Email sudah terdaftar." };

  const hash = await bcrypt.hash(password, 10);
  const user = await createUser({ email, password_hash: hash, role });
  return { email: user.email, role: user.role };
};

export const loginUser = async (email, password) => {
  if (!email || !password) throw { status: 400, message: "Email dan kata sandi wajib diisi." };

  const user = await findUserByEmail(email);
  if (!user) throw { status: 404, message: "Pengguna tidak ditemukan." };

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw { status: 401, message: "Kata sandi salah." };

  const payload = { id_user: user.id_user.toString(), role: user.role };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return { accessToken, refreshToken, role: user.role };
};

export const refreshToken = (token) => {
  const payload = verifyRefreshToken(token);
  return generateAccessToken({ id_user: payload.id_user, role: payload.role });
};

export const forgotPassword = async (email) => {
  if (!email) throw { status: 400, message: "Email wajib diisi." };

  // Cek di 3 tabel
  const user = await findUserByAnyEmail(email);
  if (!user) throw { status: 404, message: "Email tidak ditemukan." };

  // Cek email mahasiswa/dosen
  const mhs = await prisma.mahasiswa.findUnique({
    where: { id_user: user.id_user },
    select: { email: true }
  });

  const dsn = await prisma.dosen.findUnique({
    where: { id_user: user.id_user },
    select: { email: true }
  });

  // list email yg dikirim
  const targets = [
    user.email,
    mhs?.email,
    dsn?.email
  ].filter(Boolean);

  // Generate token
  const rawToken = crypto.randomBytes(20).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");
  const expiryDate = new Date(Date.now() + 60 * 60 * 1000);

  await updateResetToken(user.id_user, hashedToken, expiryDate);

  // Kirim ke semua email
  await Promise.all(
    targets.map(to => sendEmail({
      to,
      subject: "Reset Password Anda",
      html: `
        <p>Klik link berikut untuk reset password:</p>
        <p><a href="https://your-frontend-url.com/reset-password?token=${rawToken}">Reset Password</a></p>
        <p>Token berlaku 1 jam.</p>
      `,
    }))
  );

  return { message: "Instruksi reset password telah dikirim ke semua email terkait." };
};


/* ============================
   RESET PASSWORD SERVICE
============================= */
export const resetPassword = async (rawToken, newPassword) => {
  if (!rawToken || !newPassword)
    throw { status: 400, message: "Token dan password baru wajib diisi." };

  // Hash token dari user (supaya bisa dicocokkan dengan DB)
  const hashedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  // Cari user berdasarkan hashed token
  const user = await findUserByResetToken(hashedToken);
  if (!user) throw { status: 400, message: "Token tidak valid atau sudah kadaluarsa." };

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await updatePasswordAndClearToken(user.id_user, hashedPassword);

  return { message: "Password berhasil direset. Silakan login kembali." };
};
