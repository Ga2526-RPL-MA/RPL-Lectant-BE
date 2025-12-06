import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LamaranRepository {
  async create(lamaranData) {
    try {
      // ✅ Validasi lowongan exist dan aktif bisa dilakukan di sini atau di service
      const lamaran = await prisma.pendaftaran.create({
        data: {
          id_lowongan: lamaranData.id_lowongan,
          id_mahasiswa: lamaranData.id_mahasiswa,
          motivasi: lamaranData.motivasi,
          file_berkas: lamaranData.file_berkas,
          status_pendaftaran: 'pending',
          tanggal_daftar: new Date()
        },
        include: {
          mahasiswa: {
            select: {
              id_user: true,
              nama: true,
              email: true,
              nrp: true
            }
          },
          lowongan: {
            select: {
              id_lowongan: true,  
              status: true
            }
          }
        }
      });
      
      return lamaran; // ✅ Return langsung tanpa reassign
    } catch (error) {
      console.error('Error in LamaranRepository.create:', error);
      
      // Handle specific Prisma errors
      if (error.code === 'P2003') {
        throw new Error('Lowongan tidak ditemukan');
      }
      
      throw error;
    }
  }

  async findById(id_pendaftaran) {
    const lamaran = await prisma.pendaftaran.findUnique({
      where: { id_pendaftaran },
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true,
            deskripsi: true,
            status: true
          }
        }
      }
    });
    
    return lamaran;
  }

  async findByMahasiswaId(id_mahasiswa) {
    const lamaranList = await prisma.pendaftaran.findMany({
      where: { id_mahasiswa },
      include: {
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true,
            status: true
          }
        }
      },
      orderBy: {
        tanggal_daftar: 'desc'
      }
    });
    
    return lamaranList;
  }

  async findAll() {
    const lamaranList = await prisma.pendaftaran.findMany({
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true,
            status: true
          }
        }
      },
      orderBy: {
        tanggal_daftar: 'desc'
      }
    });
    
    return lamaranList;
  }

  async updateStatus(id_pendaftaran, status_pendaftaran) {
    // Validasi status
    const validStatus = ['pending', 'accepted', 'rejected'];
    if (!validStatus.includes(status_pendaftaran)) {
      throw new Error('Status tidak valid');
    }

    const updatedLamaran = await prisma.pendaftaran.update({
      where: { id_pendaftaran },
      data: { 
        status_pendaftaran,
        // Anda bisa tambahkan timestamp untuk tracking
        // updated_at: new Date() // jika ada field updated_at
      },
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true
          }
        }
      }
    });
    
    return updatedLamaran;
  }

  async findByStatus(status_pendaftaran) {
    const validStatus = ['pending', 'accepted', 'rejected'];
    if (!validStatus.includes(status_pendaftaran)) {
      throw new Error('Status tidak valid');
    }

    const lamaranList = await prisma.pendaftaran.findMany({
      where: { status_pendaftaran },
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true,
            status: true
          }
        }
      },
      orderBy: {
        tanggal_daftar: 'desc'
      }
    });
    
    return lamaranList;
  }

  async findByLowonganId(id_lowongan) {
    const lamaranList = await prisma.pendaftaran.findMany({
      where: { id_lowongan },
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        }
      },
      orderBy: {
        tanggal_daftar: 'desc'
      }
    });
    
    return lamaranList;
  }

  async delete(id_pendaftaran) {
    const deletedLamaran = await prisma.pendaftaran.delete({
      where: { id_pendaftaran }
    });
    
    return deletedLamaran;
  }

  async updatePendaftaran(id_pendaftaran, updateData) {
    const updatedLamaran = await prisma.pendaftaran.update({
      where: { id_pendaftaran },
      data: updateData,
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true
          }
        }
      }
    });
    
    return updatedLamaran;
  }

  async getStatistikByMahasiswa(id_mahasiswa) {
    const statistik = await prisma.pendaftaran.groupBy({
      by: ['status_pendaftaran'],
      where: { id_mahasiswa },
      _count: {
        id_pendaftaran: true
      }
    });

    const total = await prisma.pendaftaran.count({
      where: { id_mahasiswa }
    });

    // Format hasil
    const result = {
      total,
      pending: 0,
      accepted: 0,
      rejected: 0
    };

    statistik.forEach(stat => {
      result[stat.status_pendaftaran] = stat._count.id_pendaftaran;
    });

    return result;
  }

  async getStatistikByLowongan(id_lowongan) {
    const statistik = await prisma.pendaftaran.groupBy({
      by: ['status_pendaftaran'],
      where: { id_lowongan },
      _count: {
        id_pendaftaran: true
      }
    });

    const total = await prisma.pendaftaran.count({
      where: { id_lowongan }
    });

    const result = {
      total,
      pending: 0,
      accepted: 0,
      rejected: 0
    };

    statistik.forEach(stat => {
      result[stat.status_pendaftaran] = stat._count.id_pendaftaran;
    });

    return result;
  }

  async searchByMahasiswaNama(searchQuery) {
    const lamaranList = await prisma.pendaftaran.findMany({
      where: {
        mahasiswa: {
          nama: {
            contains: searchQuery,
            mode: 'insensitive'
          }
        }
      },
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true
          }
        }
      },
      orderBy: {
        tanggal_daftar: 'desc'
      }
    });
    
    return lamaranList;
  }

  async findWithPagination(skip = 0, take = 10, filters = {}) {
    const where = {};

    if (filters.status_pendaftaran) {
      const validStatus = ['pending', 'accepted', 'rejected'];
      if (!validStatus.includes(filters.status_pendaftaran)) {
        throw new Error('Status tidak valid');
      }
      where.status_pendaftaran = filters.status_pendaftaran;
    }

    if (filters.id_lowongan) {
      where.id_lowongan = parseInt(filters.id_lowongan);
    }

    const lamaranList = await prisma.pendaftaran.findMany({
      where,
      include: {
        mahasiswa: {
          select: {
            id_user: true,
            nama: true,
            email: true,
            nim: true
          }
        },
        lowongan: {
          select: {
            id_lowongan: true,
            judul: true,
            perusahaan: true,
            status: true
          }
        }
      },
      orderBy: {
        tanggal_daftar: 'desc'
      },
      skip,
      take
    });
    
    return lamaranList;
  }
}

export default new LamaranRepository();