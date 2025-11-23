// src/api/service/lowongan.service.js
import LowonganRepository from '../repository/lowongan_repository.js';

class LowonganService {
  constructor() {
    this.lowonganRepository = new LowonganRepository();
  }

  async updateStatusLowongan(idLowongan, status, dosenId) {
    try {
      // 1. Cek apakah lowongan exists dan milik dosen ini
      const lowongan = await this.lowonganRepository.findLowonganById(idLowongan);

      if (!lowongan) {
        throw new Error('Lowongan not found');
      }

      // 2. Validasi apakah dosen ini yang membuat lowongan
      // Asumsi: lowongan memiliki field id_dosen atau relasi ke kelas
      if (Number(lowongan.id_dosen) !== Number(dosenId)) {
        throw new Error('Unauthorized');
        }

      // 3. Update status lowongan dan status semua pendaftar
      const result = await this.lowonganRepository.updateStatusLowongan(
        idLowongan,
        status
      );

      return {
        id_lowongan: result.id_lowongan,
        nama_matkul: result.nama_matkul
      };
    } catch (error) {
      console.error('Error in LowonganService.updateStatusLowongan:', error);
      throw error;
    }
  }
}

export default LowonganService;