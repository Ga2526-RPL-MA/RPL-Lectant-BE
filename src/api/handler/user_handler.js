// src/api/handler/auth.handler.js
import UserService from '../service/user_service.js';


class userHandler {
  constructor() {
    this.UserService = new UserService();
  }

  register = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ 
          message: 'Email dan kata sandi wajib diisi.' 
        });
      }

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

  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: 'Email dan kata sandi wajib diisi.'
        });
      }

      const result = await this.authService.login(email, password);

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

  refresh = async (req, res) => {
    try {
      const token = req.cookies.refreshToken;

      if (!token) {
        return res.status(401).json({
          message: 'Token refresh tidak ditemukan.'
        });
      }

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

  logout = async (req, res) => {
    try {
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

  forgotPassword = async (req, res) => {
    try {
      const { email_recovery } = req.body;

      if (!email_recovery || !email_recovery.endsWith('@gmail.com')) {
        return res.status(400).json({
          message: 'Gunakan email @gmail.com'
        });
      }

      const email_its = req.user?.email;
      if (!email_its) {
        return res.status(401).json({
          message: 'Unauthorized'
        });
      }

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

  resetPassword = async (req, res) => {
    try {
      const { token, password } = req.body;

      if (!token || !password) {
        return res.status(400).json({
          message: 'Token dan password wajib diisi'
        });
      }

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
