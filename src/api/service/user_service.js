import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from '../utils/jwt.js';
import { sendResetEmail } from '../utils/sendEmail.js';

const prisma = new PrismaClient();

class UserService {
  async register(data) {
    const { email, password, role } = data;
    
    if (!['dosen', 'mahasiswa'].includes(role)) {
      throw new Error('Invalid role. Must be "dosen" or "mahasiswa"');
    }

    const existing = await prisma.users.findUnique({ 
      where: { email } 
    });
    
    if (existing) {
      throw new Error('Email already registered');
    }

    const password_hash = await bcrypt.hash(password, 10);

    const emailPrefix = email.split('@')[0];
    const nama = emailPrefix.replace(/[._]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    try {
      const result = await prisma.$transaction(async (tx) => {
        const user = await tx.users.create({
          data: {
            email,
            password_hash,  
            role,
          },
        });

        let dosen = null;
        let mahasiswa = null;

        if (role === 'dosen') {
          dosen = await tx.dosen.create({
            data: {
              nama: nama,
              nip: emailPrefix,
              jurusan: null,
              user: {
                connect: { id_user: user.id_user }  
              }
            },
          });
        } else if (role === 'mahasiswa') {
          mahasiswa = await tx.mahasiswa.create({
            data: {
              user_id: user.id_user,  
              nama: nama,
              nim: emailPrefix,
              jurusan: null,
            },
          });
        }

        return { user, dosen, mahasiswa };
      }, {
        maxWait: 5000,
        timeout: 10000,
      });

      delete result.user.password_hash;

      return result;
    } catch (error) {
      console.error('Transaction error in register:', error);
  
      if (error.code === 'P2002') {
        throw new Error('Email already registered');
      }
      if (error.code === 'P2003') {
        throw new Error('Foreign key constraint failed');
      }
      
      throw error;
    }
  }

  async login(email, password) {
    try {
      // Cari user berdasarkan email dengan relasi dosen/mahasiswa
      const user = await prisma.users.findUnique({
        where: { email },
        include: {
          dosen: true,
          mahasiswa: true
        }
      });

      console.log('User found:', !!user);
      
      if (!user) {
        throw new Error('User not found');
      }

      console.log('User data:', {
        id_user: user.id_user,
        email: user.email,
        role: user.role,
        hasPassword: !!user.password_hash,
        passwordLength: user.password_hash?.length
      });

      if (!user.password_hash) {
        console.error('ERROR: Password field is null or undefined in database!');
        throw new Error('Password not found in database');
      }

      console.log('Comparing passwords...');
      const match = await bcrypt.compare(password, user.password_hash);
      console.log('Password match:', match);

      if (!match) {
        throw new Error('Invalid password');
      }

      const payload = {
        id_user: user.id_user.toString(),
        email: user.email,
        role: user.role
      };

      if (user.role === 'dosen' && user.dosen) {
        payload.dosenId = user.dosen?.id_user?.toString();
        payload.nama = user.dosen?.nama;
        payload.nip = user.dosen.nip;
      } else if (user.role === 'mahasiswa' && user.mahasiswa) {
        payload.mahasiswaId = user.mahasiswa?.id?.toString();
        payload.nama = user.mahasiswa?.nama;
        payload.nim = user.mahasiswa.nim;
      }

      const accessToken = generateAccessToken(payload);
      const refreshToken = generateRefreshToken(payload);

      console.log('Login successful');
      console.log('==================');

      return {
        token: accessToken,
        refreshToken: refreshToken,
        user: {
          id_user: user.id_user,
          email: user.email,
          role: user.role,
          nama: payload.nama,
          ...(user.role === 'dosen' ? { nip: payload.nip } : { nim: payload.nim })
        }
      };
    } catch (error) {
      console.error('Error in AuthService.login:', error);
      throw error;
    }
  }

  async refreshToken(token) {
    try {
      const payload = verifyRefreshToken(token);

      const user = await prisma.users.findUnique({
        where: { id_user: payload.id || payload.id_user },
        include: {
          dosen: true,
          mahasiswa: true
        }
      });

      if (!user) {
        throw new Error('Invalid refresh token');
      }

      const newPayload = {
        id_user: user.id_user,
        email: user.email,
        role: user.role,
        dosenId: user.dosen?.id || null,
        mahasiswaId: user.mahasiswa?.id || null
      };

      const newAccess = generateAccessToken(newPayload);

      return {
        token: newAccess
      };
    } catch (error) {
      console.error('Error in AuthService.refreshToken:', error);
      throw new Error('Invalid refresh token');
    }
  }

  async forgotPassword(email_its, email_recovery) {
    try {
      const user = await prisma.users.findUnique({
        where: { email: email_its }
      });

      if (!user) {
        throw new Error('User not found');
      }

      const token = generateAccessToken({ 
        email: email_its,
        type: 'reset'
      });

      await prisma.users.update({
        where: { email: email_its },
        data: {
          resetToken: token,
          resetTokenExpiry: new Date(Date.now() + 3600000) // 1 jam
        }
      });

      const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

      await sendResetEmail(email_recovery, resetLink);

      return {
        message: 'Password reset link sent successfully'
      };
    } catch (error) {
      console.error('Error in AuthService.forgotPassword:', error);
      throw error;
    }
  }

  async resetPassword(token, password) {
    try {
      const decoded = verifyAccessToken(token);

      if (!decoded.email) {
        throw new Error('Invalid or expired reset token');
      }

      const user = await prisma.users.findFirst({
        where: {
          email: decoded.email,
          resetToken: token,
          resetTokenExpiry: {
            gte: new Date()
          }
        }
      });

      if (!user) {
        throw new Error('Invalid or expired reset token');
      }

      const hashed = await bcrypt.hash(password, 10);

      await prisma.users.update({
        where: { id_user: user.id_user },
        data: {
          password_hash: hashed,
          resetToken: null,
          resetTokenExpiry: null
        }
      });

      return { success: true };
    } catch (error) {
      console.error('Error in AuthService.resetPassword:', error);
      
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        throw new Error('Invalid or expired reset token');
      }
      
      throw error;
    }
  }
}

export default UserService;
