import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import UserRepository from '../repository/user_repository.js';
import EmailService from '../utils/sendEmail.js';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
} from '../utils/jwt.js';

class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
    this.emailService = new EmailService();
  }

  // Register user
  async register({ email, password, role }) {
    // Cek apakah email sudah terdaftar
    const existingUser = await this.userRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    const userData = {
      email,
      password_hash: hashedPassword,
      role
    };

    const user = await this.userRepository.createUser(userData);
    
    return {
      user: {
        email: user.email,
        role: user.role
      }
    };
  }

  // Login user
  async login(email, password) {
    // Cari user
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    // Verifikasi password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      throw new Error('Invalid password');
    }

    // Generate tokens menggunakan fungsi dari jwt.js
    const tokenPayload = {
      id_user: user.id_user.toString(),
      email: user.email,
      role: user.role
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    return {
      user: {
        id_user: user.id_user,
        email: user.email,
        role: user.role
      },
      token: accessToken,
      refreshToken
    };
  }

  // Refresh token
  async refreshToken(token) {
    try {
      const decoded = verifyRefreshToken(token);
      
      const newPayload = {
        id_user: decoded.id_user,
        email: decoded.email,
        role: decoded.role
      };

      const newAccessToken = generateAccessToken(newPayload);

      return {
        token: newAccessToken
      };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  // Request password reset
  async requestPasswordReset(emailRecovery) {
    const user = await this.userRepository.findUserByRecoveryEmail(emailRecovery);
    
    if (!user) {
      return null; // Return null untuk security
    }

    // Generate reset token menggunakan ACCESS_SECRET dengan expiry 1 jam
    const resetTokenPayload = {
      id_user: user.id_user.toString(),
      email: user.email,
      purpose: 'password_reset'
    };

    // Buat token reset khusus (bisa menggunakan ACCESS_SECRET atau secret khusus)
    const resetToken = generateAccessToken(resetTokenPayload); // 15 menit default

    // Atau buat token khusus untuk reset dengan expiry 1 jam
    // const resetToken = jwt.sign(resetTokenPayload, ACCESS_SECRET, { expiresIn: '1h' });

    // Kirim email
    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    await this.emailService.sendResetEmail(emailRecovery, resetLink, user.nama);

    return {
      token: resetToken,
      email: user.email
    };
  }

  // Reset password
  async resetPassword(token, newPassword) {
    try {
      // Verifikasi token menggunakan verifyAccessToken
      const decoded = verifyAccessToken(token);
      
      // Pastikan token untuk password reset
      if (decoded.purpose !== 'password_reset') {
        throw new Error('Invalid token purpose');
      }
      
      // Hash password baru
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      
      // Update password
      const updatedUser = await this.userRepository.updatePassword(
        decoded.id_user,
        hashedPassword
      );

      if (!updatedUser) {
        throw new Error('User tidak ditemukan');
      }

      return {
        success: true,
        user: {
          email: updatedUser.email
        }
      };
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        throw new Error('Token tidak valid atau kadaluarsa');
      }
      throw error;
    }
  }

  // Get user by email
  async getUserByEmail(email) {
    const user = await this.userRepository.findUserByEmail(email);
    
    if (!user) {
      return null;
    }

    // Hapus password dari response
    const { password_hash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  // Verify user token (untuk middleware)
  async verifyToken(token) {
    try {
      return verifyAccessToken(token);
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

   async updateProfile(userId, updateData) {
    try {
      // Validasi data yang boleh diupdate
      const allowedFields = ['nama', 'email'];
      const filteredData = {};
      
      Object.keys(updateData).forEach(key => {
        if (allowedFields.includes(key)) {
          filteredData[key] = updateData[key];
        }
      });

      // Validasi email jika diupdate
      if (filteredData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(filteredData.email)) {
          throw new Error('Format email tidak valid');
        }

        // Cek email sudah digunakan oleh user lain
        const existingUser = await this.userRepository.findByEmail(filteredData.email);
        if (existingUser && existingUser.id_user !== userId) {
          throw new Error('Email sudah digunakan');
        }
      }

      // Update profile
      const updatedUser = await this.userRepository.update(userId, filteredData);
      
      // Hapus password dari response
      const { password_hash, ...userWithoutPassword } = updatedUser;
      
      return {
        user: userWithoutPassword,
        message: 'Profil berhasil diperbarui'
      };
    } catch (error) {
      console.error('Error in AuthService.updateProfile:', error);
      throw new Error('Gagal mengupdate profil');
    }
  }
}

export default UserService;
