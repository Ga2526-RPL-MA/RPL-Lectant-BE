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

  // READ ALL
  async getAllLowongan() {
    try {
      return await this.lowonganRepository.getAllLowongan();
    } catch (error) {
      console.error("Service getAllLowongan:", error);
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
  async updateStatusLowongan(idLowongan, status, dosenId) {
    try {
      const lowongan = await this.lowonganRepository.findLowonganById(idLowongan);
      if (!lowongan) throw new Error("Lowongan tidak ditemukan");

      // hanya dosen pemilik lowongan
      if (Number(lowongan.id_dosen) !== Number(dosenId))
        throw new Error("Unauthorized");

      return await this.lowonganRepository.updateStatusLowongan(idLowongan, status);
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
}

export default LowonganService;
