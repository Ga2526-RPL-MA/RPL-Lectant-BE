// src/api/handler/auth.handler.js
import AuthService from '../service/user_service.js';


class userHandler {
  constructor() {
    this.authService = new AuthService();
  }

  // Register new user (auto-detect role from email domain)
  register = async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validasi input dasar
      if (!email || !password) {
        return res.status(400).json({ 
          message: 'Email dan kata sandi wajib diisi.' 
        });
      }

      // Validasi email domain dan tentukan role otomatis
      let role;
      if (/^[a-zA-Z0-9._%+-]+@student\.its\.ac\.id$/.test(email)) {
        role = 'mahasiswa';
      } else if (/^[a-zA-Z0-9._%+-]+@if\.its\.ac\.id$/.test(email)) {
        role = 'dosen';
      } else {
        return res.status(400).json({ 
          message: 'Gunakan akun resmi ITS.' 
        });
      }

      // Call service untuk register
      const result = await this.authService.register({
        email,
        password,
        role
      });

      return res.status(201).json({
        success: true,
        message: 'Akun berhasil dibuat.',
        data: {
          email: result.user.email,
          role: result.user.role
        }
      });
    } catch (error) {
      console.error('Kesalahan saat register:', error);
      
      if (error.message === 'Email already registered') {
        return res.status(409).json({
          message: 'Email sudah terdaftar.'
        });
      }

      return res.status(500).json({
        message: 'Terjadi kesalahan pada server.'
      });
    }
  };

  // Login user
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validasi input
      if (!email || !password) {
        return res.status(400).json({
          message: 'Email dan kata sandi wajib diisi.'
        });
      }

      // Call service untuk login
      const result = await this.authService.login(email, password);

      // Set refresh token di httpOnly cookie
      res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/auth/refresh',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
      });

      return res.status(200).json({
        success: true,
        message: 'Login berhasil.',
        accessToken: result.token,
        role: result.user.role
      });
    } catch (error) {
      console.error('Kesalahan saat login:', error);

      if (error.message === 'User not found') {
        return res.status(404).json({
          message: 'Pengguna tidak ditemukan.'
        });
      }

      if (error.message === 'Invalid password') {
        return res.status(401).json({
          message: 'Kata sandi salah.'
        });
      }

      return res.status(500).json({
        message: 'Terjadi kesalahan pada server.'
      });
    }
  };

  // Refresh access token from cookie
  refresh = async (req, res) => {
    try {
      // Ambil refresh token dari cookie
      const token = req.cookies.refreshToken;

      if (!token) {
        return res.status(401).json({
          message: 'Token refresh tidak ditemukan.'
        });
      }

      // Call service untuk refresh token
      const result = await this.authService.refreshToken(token);

      return res.status(200).json({
        accessToken: result.token,
        message: 'Token baru berhasil dibuat.'
      });
    } catch (error) {
      console.error('Kesalahan saat refresh:', error);

      return res.status(403).json({
        message: 'Token refresh tidak valid atau kedaluwarsa.'
      });
    }
  };

  // Logout user and clear cookie
  logout = async (req, res) => {
    try {
      // Clear refresh token cookie
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/auth/refresh',
      });

      return res.status(200).json({
        message: 'Logout berhasil.'
      });
    } catch (error) {
      console.error('Kesalahan saat logout:', error);

      return res.status(500).json({
        message: 'Terjadi kesalahan pada server.'
      });
    }
  };

  // Forgot password - send reset link to recovery email
  forgotPassword = async (req, res) => {
    try {
      const { email_recovery } = req.body;

      // Validasi email recovery harus @gmail.com
      if (!email_recovery || !email_recovery.endsWith('@gmail.com')) {
        return res.status(400).json({
          message: 'Gunakan email @gmail.com'
        });
      }

      // Email ITS berasal dari token login (user sudah login)
      const email_its = req.user?.email;
      if (!email_its) {
        return res.status(401).json({
          message: 'Unauthorized'
        });
      }

      // Call service untuk forgot password
      await this.authService.forgotPassword(email_its, email_recovery);

      return res.status(200).json({
        message: 'Link reset password telah dikirim ke email recovery Anda.'
      });
    } catch (error) {
      console.error('Kesalahan saat forgot password:', error);

      return res.status(500).json({
        message: 'Gagal mengirim email reset'
      });
    }
  };

  // Reset password with token from email
  resetPassword = async (req, res) => {
    try {
      const { token, password } = req.body;

      if (!token || !password) {
        return res.status(400).json({
          message: 'Token dan password wajib diisi'
        });
      }

      // Call service untuk reset password
      await this.authService.resetPassword(token, password);

      return res.status(200).json({
        message: 'Password berhasil direset'
      });
    } catch (error) {
      console.error('Kesalahan saat reset password:', error);

      if (error.message === 'Invalid or expired reset token') {
        return res.status(400).json({
          message: 'Token tidak valid atau kadaluarsa'
        });
      }

      if (error.message === 'User not found') {
        return res.status(404).json({
          message: 'User tidak ditemukan'
        });
      }

      return res.status(500).json({
        message: 'Terjadi kesalahan pada server.'
      });
    }
  };
}


export default userHandler;
