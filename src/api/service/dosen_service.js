// src/api/service/dosen.service.js
import DosenRepository from '../repository/dosen_repository.js';

class DosenService {
  constructor() {
    this.dosenRepository = new DosenRepository();
  }

  // CREATE
  async createProfileService(id_user, payload) {
    if (!payload.nama || !payload.nip || !payload.no_telepon || !payload.jurusan || !payload.email) {
      throw { status: 400, message: "Semua field wajib diisi." };
    }

    // Pastikan belum ada profil
    const existing = await findDosenById(id_user);
    if (existing) throw { status: 400, message: "Profil sudah ada." };

    return await createDosen({ id_user, ...payload });
  };

  // READ
  async getProfileService(id_user) {
    const dosen = await findDosenById(id_user);
    if (!dosen) throw { status: 404, message: "Profil dosen tidak ditemukan." };
    return dosen;
  };

  // UPDATE
  async updateProfileService(id_user, payload) {
    if (!payload.nama || !payload.nip || !payload.no_telepon || !payload.jurusan) {
      throw { status: 400, message: "Semua field wajib diisi." };
    }
    return await updateDosen(id_user, payload);
  };

  async getKelasByDosenId(dosenId) {
    try {
      const kelas = await this.dosenRepository.findKelasByDosenId(dosenId);

      // Data sudah ditransform di repository
      return kelas;
    } catch (error) {
      console.error('Error in DosenService.getKelasByDosenId:', error);
      throw error;
    }
  }

  async getStatistikDosen(dosenId) {
    try {
      // Ambil semua data statistik dari repository
      const statistik = await this.dosenRepository.getStatistikDosen(dosenId);
      
      return {
        total_matkul: statistik.total_matkul.toString(),
        jumlah_lowongan: statistik.jumlah_lowongan.toString(),
        jumlah_asisten: statistik.jumlah_asisten
      };
    } catch (error) {
      console.error('Error in DosenService.getStatistikDosen:', error);
      throw error;
    }
  }
}

export default DosenService;
