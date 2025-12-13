import KelasService from '../service/kelas_service.js';

class KelasHandler {
  constructor() {
    this.kelasService = new KelasService();
  }

  getAllKelas = async (req, res) => {
    try {
      const result = await this.kelasService.getAllKelas();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  getAllMataKuliah = async (req, res) => {
    try {
      const result = await this.kelasService.getAllMataKuliah();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}

export default KelasHandler;