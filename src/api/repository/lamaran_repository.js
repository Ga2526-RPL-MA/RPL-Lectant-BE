import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LamaranRepository {
  async findByMahasiswaIdWithDetails(id_mahasiswa) {
    try {
      const lamaranList = await prisma.pendaftaran.findMany({
        where: { 
          id_mahasiswa: BigInt(id_mahasiswa)
        },
        select: {
          id_pendaftaran: true,
          id_lowongan: true,
          id_mahasiswa: true,
          status_pendaftaran: true,
          tanggal_daftar: true,
          motivasi: true,
          file_berkas: true,
          lowongan: {
            select: {
              id_lowongan: true,
              tahun_ajaran: true,
              jumlah_asisten: true,
              persyaratan: true,
              honor: true,
              status: true,
              tanggal_mulai_pendaftaran: true,
              tanggal_akhir_pendaftaran: true,
              tanggal_mulai_kontrak: true,
              tanggal_akhir_kontrak: true,
              kelas: {
                select: {
                  id_kelas: true,
                  nama_kelas: true,
                  hari: true,
                  jam_mulai: true,
                  jam_selesai: true,
                  mata_kuliah: {
                    select: {
                      id_mk: true,
                      kode_mk: true,
                      nama_mk: true,
                      jumlah_sks: true
                    }
                  }
                }
              },
              dosen: {
                select: {
                  id_user: true,
                  nip: true,
                  nama: true,
                  email: true,
                  no_telepon: true
                }
              }
            }
          }
        },
        orderBy: {
          tanggal_daftar: 'desc'
        }
      });

      return lamaranList;
    } catch (error) {
      console.error('Error in LamaranRepository.findByMahasiswaIdWithDetails:', error);
      throw error;
    }
  }
}

export default new LamaranRepository();