import DosenRepository from "../repository/dosen_repository.js";

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
