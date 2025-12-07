import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LamaranRepository {
  async findByIdWithFullDetails(id_pendaftaran) {
    try {
      const lamaran = await prisma.pendaftaran.findUnique({
        where: { id_pendaftaran },
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
          },
          mahasiswa: {
            select: {
              id_user: true,
              nrp: true,
              nama: true,
              email: true,
              no_telepon: true,
              jurusan: true,
              angkatan: true,
              semester: true
            }
          }
        }
      });

      return lamaran;
    } catch (error) {
      console.error('Error in LamaranRepository.findByIdWithFullDetails:', error);
      throw error;
    }
  }
}

export default new LamaranRepository();