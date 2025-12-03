// src/api/repository/UserRepository.js
import { PrismaClient } from '@prisma/client';

class UserRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findUserByEmail(email) {
    return await this.prisma.users.findUnique({
      where: { email },
      select: {
        id_user: true,
        email: true,
        role: true,
        password_hash: true, // WAJIB agar bcrypt bisa compare
      },
    });
  }

  async findUserById(id_user) {
    return await this.prisma.users.findUnique({
      where: { id_user },
      select: {
        id_user: true,
        email: true,
        role: true,
        password_hash: true,
      },
    });
  }

  async findUserByRecoveryEmail(email_recovery) {
    // Cek di tabel dosen
    const dosen = await this.prisma.dosen.findFirst({
      where: { email: email_recovery },
      select: {
        email: true,
        nama: true,
        user: {
          select: {
            id_user: true,
            role: true
          }
        }
      }
    });

    if (dosen) {
      return {
        id_user: dosen.user.id_user,
        nama: dosen.nama,
        role: dosen.user.role
      };
    }

    // Cek di tabel mahasiswa
    const mahasiswa = await this.prisma.mahasiswa.findFirst({
      where: { email: email_recovery },
      select: {
        email: true,
        nama: true,
        user: {
          select: {
            id_user: true,
            role: true
          }
        }
      }
    });

    if (mahasiswa) {
      return {
        id_user: mahasiswa.user.id_user,
        nama: mahasiswa.nama,
        role: mahasiswa.user.role
      };
    }

    return null;
  }

  async createUser(data) {
    return await this.prisma.users.create({ data });
  }

  async updatePassword(id_user, newHashedPassword) {
    return await this.prisma.users.update({
      where: { id_user: BigInt(id_user) },
      data: { password_hash: newHashedPassword },
    });
  }

  async updateUserToken(email, token) {
    const expiry = new Date(Date.now() + 3600000); // 1 jam
    return await this.prisma.users.update({
      where: { email },
      data: { 
        resetToken: token, 
        resetTokenExpiry: expiry 
      },
    });
  }

  async findUserByToken(token) {
    return await this.prisma.users.findFirst({
      where: { 
        resetToken: token, 
        resetTokenExpiry: { 
          gte: new Date() 
        } 
      },
    });
  }

  async resetUserPassword(id_user, newPassword) {
    const bcrypt = await import('bcryptjs');
    const hashed = await bcrypt.default.hash(newPassword, 10);
    
    return await this.prisma.users.update({
      where: { id_user },
      data: { 
        password_hash: hashed, 
        resetToken: null, 
        resetTokenExpiry: null 
      },
    });
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}

export default UserRepository;