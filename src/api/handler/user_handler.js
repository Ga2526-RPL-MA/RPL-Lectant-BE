import { 
  registerUser, 
  loginUser, 
  refreshToken,
  forgotPassword,
  resetPassword
} from "../service/user_service.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);

    res.status(201).json({
      success: true,
      message: "Akun berhasil dibuat.",
      data: user,
    });
  } catch (err) {
    console.error("Kesalahan saat register:", err);
    res.status(err.status || 500).json({ message: err.message || "Terjadi kesalahan pada server." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken, role } = await loginUser(email, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Login berhasil.", accessToken, role });
  } catch (err) {
    console.error("Kesalahan saat login:", err);
    res.status(err.status || 500).json({ message: err.message || "Terjadi kesalahan pada server." });
  }
};

export const refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "Token refresh tidak ditemukan." });

  try {
    const newAccess = refreshToken(token);
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

export const forgot = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await forgotPassword(email);

    res.json({
      success: true,
      message: result.message,
    });
  } catch (err) {
    console.error("Kesalahan saat forgot password:", err);
    res
      .status(err.status || 500)
      .json({ message: err.message || "Terjadi kesalahan pada server." });
  }
};

export const reset = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const result = await resetPassword(token, newPassword);

    res.json({
      success: true,
      message: result.message,
    });
  } catch (err) {
    console.error("Kesalahan saat reset password:", err);
    res
      .status(err.status || 500)
      .json({ message: err.message || "Terjadi kesalahan pada server." });
  }
};