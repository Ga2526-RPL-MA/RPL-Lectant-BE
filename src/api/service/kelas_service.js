import KelasRepository from '../repository/kelas_repository.js';

class KelasService {
  constructor() {
    this.kelasRepository = new KelasRepository();
  }

  async getAllKelas() {
    return await this.kelasRepository.getAllKelas();
  }

  async getAllMataKuliah() {
    return await this.kelasRepository.getAllMataKuliah();
  }
}

export default KelasService;