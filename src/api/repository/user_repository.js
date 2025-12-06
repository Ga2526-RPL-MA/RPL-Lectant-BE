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

  async findByEmail(email) {
    return await prisma.users.findUnique({
      where: { email },
      select: {
        id_user: true,
        nama: true,
        email: true,
        role: true,
        nim: true,
        nip: true,
        password_hash: true,
        resetToken: true,
        resetTokenExpiry: true,
        created_at: true,
        updated_at: true
      }
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
        created_at: true,
        updated_at: true
      }
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

  async create(userData) {
    const { nama, email, password_hash, role, nim, nip } = userData;
    
    return await prisma.users.create({ 
      data: {
        nama,
        email,
        password_hash,
        role,
        nim: nim || null,
        nip: nip || null
      }
    });
  }

  async findAll() {
    return await prisma.users.findMany({
      select: {
        id_user: true,
        nama: true,
        email: true,
        role: true,
        nim: true,
        nip: true,
        created_at: true,
        updated_at: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  async update(id_user, userData) {
    const { nama, email } = userData;
    
    return await prisma.users.update({
      where: { id_user },
      data: { 
        nama,
        email,
        updated_at: new Date()
      }
    });
  }

  async delete(id_user) {
    return await prisma.users.delete({
      where: { id_user }
    });
  }

  async updatePassword(email, newHashedPassword) {
    return await prisma.users.update({
      where: { email },
      data: { 
        password_hash: newHashedPassword 
      },
    });
  }

  async updateUserToken(email, token) {
    const expiry = new Date(Date.now() + 3600000);
    
    return await prisma.users.update({
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


  async findByRole(role) {
    return await prisma.users.findMany({
      where: { role },
      select: {
        id_user: true,
        nama: true,
        email: true,
        role: true,
        nim: true,
        nip: true,
        created_at: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  async searchByName(nama) {
    return await prisma.users.findMany({
      where: {
        nama: {
          contains: nama,
          mode: 'insensitive'
        }
      },
      select: {
        id_user: true,
        nama: true,
        email: true,
        role: true,
        created_at: true
      },
      orderBy: {
        nama: 'asc'
      }
    });
  }

  async countByRole(role) {
    return await prisma.users.count({
      where: { role }
    });
  }

  async getUserStats() {
    const [total, mahasiswaCount, dosenCount] = await Promise.all([
      prisma.users.count(),
      prisma.users.count({ where: { role: 'mahasiswa' } }),
      prisma.users.count({ where: { role: 'dosen' } })
    ]);

    return {
      total,
      mahasiswa: mahasiswaCount,
      dosen: dosenCount
    };
  }

  async updateProfile(id_user, updateData) {
    const { nama, email, nim, nip } = updateData;
    
    return await prisma.users.update({
      where: { id_user },
      data: {
        ...(nama && { nama }),
        ...(email && { email }),
        ...(nim !== undefined && { nim }),
        ...(nip !== undefined && { nip }),
        updated_at: new Date()
      }
    });
  }

  async verifyUser(id_user) {
    return await prisma.users.update({
      where: { id_user },
      data: {
        is_verified: true,
        updated_at: new Date()
      }
    });
  }

  async changeUserStatus(id_user, is_active) {
    return await prisma.users.update({
      where: { id_user },
      data: {
        is_active,
        updated_at: new Date()
      }
    });
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }

}

export default new UserRepository();
