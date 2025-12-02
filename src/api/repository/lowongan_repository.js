// src/api/repository/lowongan.repository.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LowonganRepository {
  async findLowonganById(idLowongan) {
    try {      
      // Query lowongan dengan relasi kelas, mata_kuliah, dan dosen
      // Primary key adalah id_lowongan (bukan id)
      const lowongan = await prisma.lowongan.findUnique({
        where: {
          id_lowongan: parseInt(idLowongan)
        },
        include: {
          kelas: {
            include: {
              mata_kuliah: {
                select: {
                  nama_mk: true
                }
              }
            }
          }
        }
      });
      
      if (!lowongan) {
        console.log('Lowongan not found');
        console.log('===================================');
        return null;
      }

      return lowongan;
    } catch (error) {
      console.error('=== REPOSITORY ERROR ===');
      console.error('Error in LowonganRepository.findLowonganById:', error.message);
      console.error('Error code:', error.code);
      console.error('Error stack (first 500 chars):', error.stack?.substring(0, 500));
      console.error('========================');
      throw error;
    }
  }

  async updateStatusLowongan(idLowongan, status) {
    try {
      console.log('=== REPOSITORY updateStatusLowongan ===');
      console.log('Input idLowongan:', idLowongan);
      console.log('Input status:', status);

      // Gunakan transaction untuk update lowongan dan pendaftar
      const result = await prisma.$transaction(async (tx) => {
        // 1. Update status lowongan
        const lowongan = await tx.lowongan.update({
          where: {
            id_lowongan: parseInt(idLowongan)
          },
          data: {
            status: status
          },
          include: {
            kelas: {
              include: {
                mata_kuliah: {
                  select: {
                    nama_mk: true
                  }
                }
              }
            }
          }
        });

        console.log('Lowongan updated');

        // 2. Jika status = "tutup", reject semua pendaftar yang masih pending
        if (status === 'tutup') {
          const updateResult = await tx.pendaftaran.updateMany({
            where: {
              id_lowongan: parseInt(idLowongan),
              status_pendaftaran: 'pending'
            },
            data: {
              status_pendaftaran: 'rejected'
            }
          });
          console.log('Pendaftaran updated:', updateResult.count, 'records');
        }

        return {
          id_lowongan: lowongan.id_lowongan,
          nama_matkul: lowongan.kelas?.mata_kuliah?.nama_mk || 'Unknown',
          status: lowongan.status
        };
      });

      return result;
    } catch (error) {
      console.error('=== REPOSITORY ERROR ===');
      console.error('Error in LowonganRepository.updateStatusLowongan:', error.message);
      console.error('Error code:', error.code);
      console.error('========================');
      
      if (error.code === 'P2025') {
        throw new Error('Lowongan not found');
      }
      
      throw error;
    }
  }
}

export default LowonganRepository;