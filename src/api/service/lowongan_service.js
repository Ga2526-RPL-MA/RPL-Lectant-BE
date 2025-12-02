// src/api/service/lowongan.service.js
import LowonganRepository from '../repository/lowongan_repository.js';

class LowonganService {
  constructor() {
    this.lowonganRepository = new LowonganRepository();
  }

  async updateStatusLowongan(idLowongan, status, dosenId) {
    try {
      const lowongan = await this.lowonganRepository.findLowonganById(idLowongan);

      if (!lowongan) {
        throw new Error('Lowongan not found');
      }

      if (Number(lowongan.id_dosen) !== Number(dosenId)) {
        throw new Error('Unauthorized');
        }

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

    async getPendaftarByLowonganId(lowonganId, dosenId) {
    try {
      const data = await this.lowonganRepository.getPendaftarByLowonganId(
        lowonganId,
        dosenId
      );

      return data;
    } catch (error) {
      console.error('Error in LowonganService.getPendaftarByLowonganId:', error);
      throw error;
    }
  }
}

export default LowonganService;