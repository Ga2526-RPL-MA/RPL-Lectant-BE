import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LowonganRepository {

  // Helper untuk format jadwal
  formatJadwal(hari, jamMulai, jamSelesai) {
    const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' };
    const mulai = new Date(jamMulai).toLocaleTimeString('id-ID', options);
    const selesai = new Date(jamSelesai).toLocaleTimeString('id-ID', options);
    return `${hari}, ${mulai} - ${selesai}`;
  }

  // GET PENDAFTAR BY LOWONGAN
  async getPendaftarByLowonganId(lowonganId) {
    try {
      const pendaftar = await prisma.pendaftaran.findMany({
        where: { id_lowongan: parseInt(lowonganId) },
        include: {
          mahasiswa: {
            select: { id_user: true, nama: true, nrp: true, jurusan: true, semester: true, no_telepon: true }
          }
        },
        orderBy: { tanggal_daftar: 'desc' }
      });

      return pendaftar.map(p => ({
        id: p.id_pendaftaran,
        nama: p.mahasiswa.nama,
        nrp: p.mahasiswa.nrp,
        semester: p.mahasiswa.semester,
        no_telp: p.mahasiswa.no_telepon,
        tanggal_daftar: new Date(p.tanggal_daftar).toLocaleDateString('id-ID', {
          day: '2-digit', month: 'short', year: 'numeric'
        }),
        status: p.status_pendaftaran
      }));
    } catch (error) {
      console.error('Error in LowonganRepository.getPendaftarByLowonganId:', error);
      throw error;
    }
  }

  // GET DETAIL PENDAFTAR BY ID
  async getDetailPendaftar(lowonganId, pendaftarId) {
    try {
      // Get pendaftaran detail
      const pendaftaran = await prisma.pendaftaran.findFirst({
        where: {
          id_pendaftaran: parseInt(pendaftarId),
          id_lowongan: parseInt(lowonganId)
        },
        include: {
          mahasiswa: {
            select: {
              id_user: true,
              nama: true,
              nrp: true,
              jurusan: true,
              semester: true,
              no_telepon: true,
              email: true,
              dokumen_url: true
            }
          }
        }
      });

      if (!pendaftaran) {
        return null;
      }

      // Get pengalaman (asistensi yang sudah/sedang berjalan)
      const pengalaman = await prisma.asistensi.findMany({
        where: {
          id_mahasiswa: pendaftaran.id_mahasiswa
        },
        include: {
          lowongan: {
            include: {
              kelas: {
                include: {
                  mata_kuliah: true
                }
              },
              dosen: {
                select: {
                  nama: true
                }
              }
            }
          }
        },
        orderBy: {
          tanggal_mulai: 'desc'
        }
      });

      return {
        pendaftaran,
        pengalaman
      };
    } catch (error) {
      console.error('Error in LowonganRepository.getDetailPendaftar:', error);
      throw error;
    }
  }

  // UPDATE STATUS LOWONGAN
  async updateStatusLowongan(idLowongan, status) {
    try {
      const result = await prisma.$transaction(async (tx) => {
        const lowongan = await tx.lowongan.update({
          where: { id_lowongan: parseInt(idLowongan) },
          data: { status },
          include: {
            kelas: { include: { mata_kuliah: { select: { nama_mk: true } } } }
          }
        });

        if (status === 'tutup') {
          await tx.pendaftaran.updateMany({
            where: { id_lowongan: parseInt(idLowongan), status_pendaftaran: 'pending' },
            data: { status_pendaftaran: 'rejected' }
          });
        }

        return {
          id_lowongan: lowongan.id_lowongan,
          nama_matkul: lowongan.kelas?.mata_kuliah?.nama_mk || 'Unknown',
          status: lowongan.status
        };
      });

      return result;
    } catch (error) {
      console.error('Error in updateStatusLowongan:', error);
      if (error.code === 'P2025') throw new Error('Lowongan not found');
      throw error;
    }
  }

  // CREATE LOWONGAN
  async createLowongan(payload) {
    try {
      const { matkul, kelas, tahun_ajaran, jumlah_asisten, honor, mulai_lowongan, akhir_lowongan, mulai_kontrak, akhir_kontrak, persyaratan } = payload.body;

      if (!payload.user || !payload.user.id_user) {
        throw new Error("Token tidak memiliki userId");
      }

      const dosenData = await prisma.dosen.findFirst({ where: { id_user: BigInt(payload.user.id_user) } });
      if (!dosenData) throw new Error("Dosen tidak ditemukan");

      const mkData = await prisma.mata_kuliah.findFirst({ where: { nama_mk: matkul} });
      if (!mkData) throw new Error("Mata kuliah tidak ditemukan");

      const kelasData = await prisma.kelas.findFirst({ where: { nama_kelas: kelas, id_mk: mkData.id_mk } });
      if (!kelasData) throw new Error("Kelas tidak ditemukan untuk mata kuliah tersebut");

      const result = await prisma.lowongan.create({
        data: {
          id_dosen: dosenData.id_user,
          id_kelas: kelasData.id_kelas,
          tahun_ajaran,
          jumlah_asisten,
          honor,
          tanggal_mulai_pendaftaran: new Date(mulai_lowongan),
          tanggal_akhir_pendaftaran: new Date(akhir_lowongan),
          tanggal_mulai_kontrak: new Date(mulai_kontrak),
          tanggal_akhir_kontrak: new Date(akhir_kontrak),
          status: "aktif",
          persyaratan
        }
      });

      return result;

    } catch (error) {
      console.error("Error in createLowongan:", error);
      throw error;
    }
  }

  // READ ALL LOWONGAN (semua lowongan terlepas dari status)
  async getAllLowongan() {
    try {
      const data = await prisma.lowongan.findMany({
        include: {
          dosen: true,
          kelas: { include: { mata_kuliah: true } }
        },
        orderBy: { id_lowongan: 'desc' }
      });

      return data.map(l => ({
        id_lowongan: l.id_lowongan,
        matkul: l.kelas?.mata_kuliah?.nama_mk,
        dosen: l.dosen?.nama,
        jadwal: this.formatJadwal(l.kelas.hari, l.kelas.jam_mulai, l.kelas.jam_selesai),
        jumlah_asisten: l.jumlah_asisten,
        lokasi: l.dosen?.jurusan,
        deadline_pendaftaran: new Date(l.tanggal_akhir_pendaftaran).toLocaleDateString('id-ID', {
          day: '2-digit', month: 'long', year: 'numeric'
        }),
        persyaratan: l.persyaratan || '',
        status: l.status
      }));
    } catch (error) {
      console.error("Error in getAllLowongan:", error);
      throw error;
    }
  }

  // GET LOWONGAN AKTIF (hanya lowongan dengan status 'aktif')
  async getLowonganAktif() {
    try {
      const data = await prisma.lowongan.findMany({
        where: { status: 'aktif' },
        include: {
          dosen: true,
          kelas: { include: { mata_kuliah: true } }
        },
        orderBy: { id_lowongan: 'desc' }
      });

      return data.map(l => ({
        id_lowongan: l.id_lowongan,
        matkul: l.kelas?.mata_kuliah?.nama_mk,
        dosen: l.dosen?.nama,
        jadwal: this.formatJadwal(l.kelas.hari, l.kelas.jam_mulai, l.kelas.jam_selesai),
        jumlah_asisten: l.jumlah_asisten,
        lokasi: l.dosen?.jurusan,
        deadline_pendaftaran: new Date(l.tanggal_akhir_pendaftaran).toLocaleDateString('id-ID', {
          day: '2-digit', month: 'long', year: 'numeric'
        }),
        persyaratan: l.persyaratan || '',
        status: l.status
      }));
    } catch (error) {
      console.error("Error in getLowonganAktif:", error);
      throw error;
    }
  }

  // GET LOWONGAN BY DOSEN (lowongan milik dosen tertentu)
  async getLowonganByDosen(dosenId) {
    try {
      const data = await prisma.lowongan.findMany({
        where: { id_dosen: BigInt(dosenId) },
        include: {
          dosen: true,
          kelas: { include: { mata_kuliah: true } }
        },
        orderBy: { id_lowongan: 'desc' }
      });

      return data.map(l => ({
        id_lowongan: l.id_lowongan,
        matkul: l.kelas?.mata_kuliah?.nama_mk,
        dosen: l.dosen?.nama,
        jadwal: this.formatJadwal(l.kelas.hari, l.kelas.jam_mulai, l.kelas.jam_selesai),
        jumlah_asisten: l.jumlah_asisten,
        lokasi: l.dosen?.jurusan,
        deadline_pendaftaran: new Date(l.tanggal_akhir_pendaftaran).toLocaleDateString('id-ID', {
          day: '2-digit', month: 'long', year: 'numeric'
        }),
        persyaratan: l.persyaratan || '',
        status: l.status
      }));
    } catch (error) {
      console.error("Error in getLowonganByDosen:", error);
      throw error;
    }
  }

  // READ BY ID
  async findLowonganById(idLowongan) {
    try {
      const lowongan = await prisma.lowongan.findUnique({
        where: { id_lowongan: parseInt(idLowongan) },
        include: { dosen: true, kelas: { include: { mata_kuliah: true } } }
      });

      if (!lowongan) return null;

      return {
        id_lowongan: lowongan.id_lowongan,   // tambahkan
        id_dosen: lowongan.id_dosen,         // tambahkan
        matkul: lowongan.kelas?.mata_kuliah?.nama_mk,
        dosen: lowongan.dosen?.nama,
        jadwal: this.formatJadwal(lowongan.kelas.hari, lowongan.kelas.jam_mulai, lowongan.kelas.jam_selesai),
        jumlah_asisten: lowongan.jumlah_asisten,
        lokasi: lowongan.dosen?.jurusan,
        deadline_pendaftaran: new Date(lowongan.tanggal_akhir_pendaftaran).toLocaleDateString('id-ID', {
          day: '2-digit', month: 'long', year: 'numeric'
        }),
        persyaratan: lowongan.persyaratan || ''
      };
    } catch (error) {
      console.error("Error in findLowonganById:", error);
      throw error;
    }
  }

  // UPDATE LOWONGAN
  async updateLowongan(idLowongan, payload) {
    try {
      const updateData = {};
      if (payload.tahun_ajaran) updateData.tahun_ajaran = payload.tahun_ajaran;
      if (payload.jumlah_asisten) updateData.jumlah_asisten = payload.jumlah_asisten;
      if (payload.honor) updateData.honor = payload.honor;
      if (payload.mulai_lowongan) updateData.tanggal_mulai_pendaftaran = new Date(payload.mulai_lowongan);
      if (payload.akhir_lowongan) updateData.tanggal_akhir_pendaftaran = new Date(payload.akhir_lowongan);
      if (payload.mulai_kontrak) updateData.tanggal_mulai_kontrak = new Date(payload.mulai_kontrak);
      if (payload.akhir_kontrak) updateData.tanggal_akhir_kontrak = new Date(payload.akhir_kontrak);
      if (payload.persyaratan) updateData.persyaratan = payload.persyaratan;

      const result = await prisma.lowongan.update({
        where: { id_lowongan: parseInt(idLowongan) },
        data: updateData
      });

      return result;
    } catch (error) {
      console.error("Error in updateLowongan:", error);
      throw error;
    }
  }

  // DELETE LOWONGAN
  async deleteLowongan(idLowongan) {
    try {
      await prisma.pendaftaran.deleteMany({ where: { id_lowongan: parseInt(idLowongan) } });
      const result = await prisma.lowongan.delete({ where: { id_lowongan: parseInt(idLowongan) } });
      return result;
    } catch (error) {
      console.error("Error in deleteLowongan:", error);
      throw error;
    }
  }
}

export default LowonganRepository;
