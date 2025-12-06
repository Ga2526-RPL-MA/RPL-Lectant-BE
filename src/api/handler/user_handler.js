// src/api/handler/auth.handler.js
import UserService from '../service/user_service.js';


class UserHandler {
  constructor() {
    this.authService = new UserService();
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

      const result = await this.UserService.register({
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

      const result = await this.UserService.login(email, password);

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
    const { email_recovery } = req.body;

    // Validasi input
    if (!email_recovery) {
      return res.status(400).json({ 
        message: "Email wajib diisi"
      });
    }

    if (!email_recovery.includes('@') || !email_recovery.includes('.')) {
      return res.status(400).json({ 
        message: "Format email tidak valid"
      });
    }

    try {
      // Panggil service
      const user = await this.authService.requestPasswordReset(email_recovery);

      // Handle berdasarkan response dari service
      if (user) {
        // Email ditemukan dan berhasil mengirim link
        return res.status(200).json({
          message: "Link reset password telah dikirim ke email Anda."
        });
      } else {
        // Email tidak ditemukan
        return res.status(404).json({
          message: "Email tidak terdaftar dalam sistem."
        });
      }
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      
      // Cek jenis error
      if (error.message.includes('Terlalu banyak permintaan')) {
        return res.status(429).json({
          message: "Terlalu banyak permintaan. Silakan coba lagi nanti."
        });
      }
      
      if (error.message.includes('Gagal mengirim email')) {
        return res.status(500).json({
          message: "Gagal mengirim email reset password."
        });
      }
      
      // Default error response
      return res.status(500).json({
        message: "Terjadi kesalahan pada server."
      });
    }
  };

  resetPassword = async (req, res) => {
    try {
      const { token, password } = req.body;
      
      if (!token || !password) {
        return res.status(400).json({ 
          message: "Token dan password wajib diisi" 
        });
      }

      const result = await this.authService.resetPassword(token, password);
      
      res.json({
        message: "Password berhasil direset"
      });
    } catch (error) {
      console.error("Error in resetPassword:", error);
      
      if (error.message.includes('Token tidak valid') || 
          error.message.includes('kadaluarsa')) {
        return res.status(400).json({ 
          success: false,
          message: "Token tidak valid atau telah kadaluarsa" 
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: "Gagal mereset password" 
      });
    }
  };

  getUserByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const user = await this.authService.getUserByEmail(email);
      
      if (!user) {
        return res.status(404).json({ 
          success: false,
          message: "User tidak ditemukan" 
        });
      }
      
      res.json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error("Error in getUserByEmail:", error);
      res.status(500).json({ 
        success: false,
        message: "Gagal mengambil data user" 
      });
    }
  };

    getProfile = async (req, res) => {
    try {
      const userId = req.user.id_user;
      
      const user = await this.authService.getProfile(userId);

      return res.status(200).json({
        success: true,
        message: 'Profil berhasil diambil',
        data: user
      });
    } catch (error) {
      console.error('Error in AuthHandler.getProfile:', error);

      if (error.message.includes('User tidak ditemukan')) {
        return res.status(404).json({
          success: false,
          message: error.message
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Gagal mendapatkan profil'
      });
    }
  };

  updateProfile = async (req, res) => {
    try {
      const userId = req.user.id_user;
      const updateData = req.body;

      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Data update wajib diisi'
        });
      }

      const result = await this.authService.updateProfile(userId, updateData);

      return res.status(200).json({
        success: true,
        message: result.message,
        data: result.user
      });
    } catch (error) {
      console.error('Error in AuthHandler.updateProfile:', error);

      if (error.message.includes('Format email tidak valid') ||
          error.message.includes('Email sudah digunakan') ||
          error.message.includes('Data update wajib diisi')) {
        return res.status(400).json({
          success: false,
          message: error.message
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Gagal mengupdate profil'
      });
    }
  };
};

export default UserHandler;
