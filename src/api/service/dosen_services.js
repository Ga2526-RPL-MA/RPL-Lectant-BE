import DosenRepository from "../repository/dosen_repository.js";

class DosenService {
  constructor() {
    this.dosenRepository = new DosenRepository();
  }

  async getKelasByDosenId(dosenId) {
    try {
      const kelas = await this.dosenRepository.findKelasByDosenId(dosenId);

      // Convert semua BigInt menjadi string menggunakan JSON replacer
      const kelasResponse = JSON.parse(JSON.stringify(kelas, (_, v) =>
        typeof v === 'bigint' ? v.toString() : v
      ));

      const result = kelasResponse.map(k => ({
          kode_matkul: k.mata_kuliah.kode_mk,
          nama_matkul: k.mata_kuliah.nama_mk,
          sks: k.mata_kuliah.jumlah_sks // sudah string jika BigInt
        
      }));

      return result;
    } catch (error) {
      console.error('Error in DosenService.getKelasByDosenId:', error);
      throw error;
    }
  }
}

export default DosenService;
