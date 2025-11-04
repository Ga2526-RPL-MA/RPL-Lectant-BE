import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/jwt.js";
import { findUserByEmail, createUser, updatePassword } from "../repository/user_repository.js";
import { findByEmail } from "../repository/user_repository.js";
import { sendResetEmail } from "../utils/sendEmail.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email dan kata sandi wajib diisi." });

    let role;
    if (/^[a-zA-Z0-9._%+-]+@student\.its\.ac\.id$/.test(email)) role = "mahasiswa";
    else if (/^[a-zA-Z0-9._%+-]+@if\.its\.ac\.id$/.test(email)) role = "dosen";
    else return res.status(400).json({ message: "Gunakan akun resmi ITS." });

    const existing = await findUserByEmail(email);
    if (existing) return res.status(409).json({ message: "Email sudah terdaftar." });

    const hash = await bcrypt.hash(password, 10);
    const user = await createUser({ email, password_hash: hash, role });

    res.status(201).json({
      success: true,
      message: "Akun berhasil dibuat.",
      data: { email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("Kesalahan saat register:", err);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email dan kata sandi wajib diisi." });

    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan." });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ message: "Kata sandi salah." });

    const payload = { id_user: user.id_user.toString(), role: user.role };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "Login berhasil.",
      accessToken,
      role: user.role,
    });
  } catch (err) {
    console.error("Kesalahan saat login:", err);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};

export const refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "Token refresh tidak ditemukan." });

  try {
    const payload = verifyRefreshToken(token);
    const newAccess = generateAccessToken({
      id_user: payload.id_user,
      role: payload.role,
    });
    res.json({ accessToken: newAccess, message: "Token baru berhasil dibuat." });
  } catch {
    res.status(403).json({ message: "Token refresh tidak valid atau kedaluwarsa." });
  }
};

export const logout = (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/auth/refresh",
  });
  res.json({ message: "Logout berhasil." });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email.endsWith("@gmail.com")) {
    return res.status(400).json({ message: "Gunakan email @gmail.com" });
  }

  const user = findByEmail(email);
  if (!user) return res.status(404).json({ message: "Email tidak ditemukan" });

  const token = generateAccessToken({ email });
  const resetLink = `http://localhost:4000/auth/reset-password?token=${token}`;

  try {
    await sendResetEmail(email, resetLink);
    res.json({ message: "Email reset password telah dikirim" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengirim email" });
  }
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res.status(400).json({ message: "Token dan password wajib diisi" });
  }

  try {
    const decoded =  verifyAccessToken(token);;
    const hashed = await bcrypt.hash(password, 10);
    const user = await updatePassword(decoded.email, hashed);

    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    res.json({ message: "Password berhasil direset" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Token tidak valid atau kadaluarsa" });
  }
};

