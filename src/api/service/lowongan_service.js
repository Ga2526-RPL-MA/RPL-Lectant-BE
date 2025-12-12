// src/api/service/lowongan.service.js
import LowonganRepository from '../repository/lowongan_repository.js';

class LowonganService {
  constructor() {
    this.lowonganRepository = new LowonganRepository();
  }

  // CREATE
  async createLowongan(payload) {
    try {
      return await this.lowonganRepository.createLowongan(payload);
    } catch (error) {
      console.error("Service createLowongan:", error);
      throw error;
    }
  }

  // READ ALL (semua lowongan terlepas dari status)
  async getAllLowongan() {
    try {
      return await this.lowonganRepository.getAllLowongan();
    } catch (error) {
      console.error("Service getAllLowongan:", error);
      throw error;
    }
  }

  // GET LOWONGAN AKTIF (hanya lowongan dengan status 'aktif')
  async getLowonganAktif() {
    try {
      return await this.lowonganRepository.getLowonganAktif();
    } catch (error) {
      console.error("Service getLowonganAktif:", error);
      throw error;
    }
  }

  // GET LOWONGAN BY DOSEN (lowongan milik dosen tertentu)
  async getLowonganByDosen(dosenId) {
    try {
      return await this.lowonganRepository.getLowonganByDosen(dosenId);
    } catch (error) {
      console.error("Service getLowonganByDosen:", error);
      throw error;
    }
  }

  // READ BY ID
  async findLowonganById(idLowongan) {
    try {
      const data = await this.lowonganRepository.findLowonganById(idLowongan);
      if (!data) throw new Error("Lowongan tidak ditemukan");
      return data;
    } catch (error) {
      console.error("Service findLowonganById:", error);
      throw error;
    }
  }

  // UPDATE
  async updateLowongan(idLowongan, payload) {
    try {
      return await this.lowonganRepository.updateLowongan(idLowongan, payload);
    } catch (error) {
      console.error("Service updateLowongan:", error);
      throw error;
    }
  }

  // DELETE
  async deleteLowongan(idLowongan) {
    try {
      return await this.lowonganRepository.deleteLowongan(idLowongan);
    } catch (error) {
      console.error("Service deleteLowongan:", error);
      throw error;
    }
  }

  // UPDATE STATUS LOWONGAN
// src/api/service/lowongan.service.js
async updateStatusLowongan(idLowongan, status, dosenId) {
  try {
    const lowongan = await this.lowonganRepository.findLowonganById(idLowongan);
    if (!lowongan) throw new Error("Lowongan tidak ditemukan");

    // validasi dosen pemilik
    if (Number(lowongan.id_dosen) !== Number(dosenId))
      throw new Error("Unauthorized");

    // update status lowongan + status pendaftar di repository
    await this.lowonganRepository.updateStatusLowongan(idLowongan, status);

    // kembalikan pesan gabungan
    return {
      message: "Status lowongan berhasil diubah. Status pendaftar berhasil diubah",
      id_lowongan: lowongan.id_lowongan,
      nama_matkul: lowongan.matkul
    };
  } catch (error) {
    console.error("Service updateStatusLowongan:", error);
    throw error;
  }
}


  // GET PENDAFTAR
  async getPendaftarByLowonganId(lowonganId, dosenId) {
    try {
      const lowongan = await this.lowonganRepository.findLowonganById(lowonganId);
      if (!lowongan) throw new Error("Lowongan tidak ditemukan");

      // hanya dosen pemilik lowongan
      if (Number(lowongan.id_dosen) !== Number(dosenId))
        throw new Error("Unauthorized");

      return await this.lowonganRepository.getPendaftarByLowonganId(lowonganId);
    } catch (error) {
      console.error("Service getPendaftarByLowonganId:", error);
      throw error;
    }
  }

  // GET DETAIL PENDAFTAR
  async getDetailPendaftar(lowonganId, pendaftarId, dosenId) {
    try {
      const lowongan = await this.lowonganRepository.findLowonganById(lowonganId);
      if (!lowongan) throw new Error("Lowongan tidak ditemukan");

      // hanya dosen pemilik lowongan
      if (Number(lowongan.id_dosen) !== Number(dosenId))
        throw new Error("Unauthorized");

      const result = await this.lowonganRepository.getDetailPendaftar(lowonganId, pendaftarId);

      if (!result) {
        throw new Error("Pendaftar tidak ditemukan");
      }

      const { pendaftaran, pengalaman } = result;

      // Format pengalaman
      const formattedPengalaman = pengalaman.map(p => ({
        id_lowongan: p.id_lowongan,
        nama_matkul: p.lowongan?.kelas?.mata_kuliah?.nama_mk || 'N/A',
        dosen: p.lowongan?.dosen?.nama || 'N/A',
        tahun_ajaran: p.lowongan?.tahun_ajaran || 'N/A',
        status: p.status === 'aktif' ? 'aktif' : 'tidak'
      }));

      // Format response
      return {
        id: pendaftaran.id_pendaftaran,
        nama: pendaftaran.mahasiswa.nama,
        nrp: pendaftaran.mahasiswa.nrp,
        jurusan: pendaftaran.mahasiswa.jurusan,
        semester: pendaftaran.mahasiswa.semester,
        tanggal_daftar: new Date(pendaftaran.tanggal_daftar).toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        email: pendaftaran.mahasiswa.email,
        no_telp: pendaftaran.mahasiswa.no_telepon,
        motivasi: pendaftaran.motivasi,
        pengalaman: formattedPengalaman,
        dokumen: pendaftaran.mahasiswa.dokumen_url,
        status: pendaftaran.status_pendaftaran
      };
    } catch (error) {
      console.error("Service getDetailPendaftar:", error);
      throw error;
    }
  }
}

export default LowonganService;
