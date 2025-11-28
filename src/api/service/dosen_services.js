// src/api/service/dosen.service.js
import DosenRepository from '../repository/dosen_repository.js';

class DosenService {
  constructor() {
    this.dosenRepository = new DosenRepository();
  }

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
}

export default DosenService;