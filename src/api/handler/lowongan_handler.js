import LowonganService from '../service/lowongan_service.js';

class LowonganHandler {
  constructor() {
    this.lowonganService = new LowonganService();
  }

  
  // CREATE LOWONGAN

  createLowongan = async (req, res) => {
    try {
      const result = await this.lowonganService.createLowongan(req.body);

      return res.status(201).json({
        success: true,
        message: "Lowongan berhasil dibuat",
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

  // GET ALL LOWONGAN
  
  getAllLowongan = async (req, res) => {
    try {
      const result = await this.lowonganService.getAllLowongan();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  // GET LOWONGAN BY ID
  
  getLowonganById = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      const result = await this.lowonganService.findLowonganById(lowonganId);

      return res.status(200).json(result);
    } catch (error) {
      if (error.message === "Lowongan tidak ditemukan") {
        return res.status(404).json({
          success: false,
          message: error.message
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  // UPDATE LOWONGAN
  
  updateLowongan = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      const result = await this.lowonganService.updateLowongan(lowonganId, req.body);

      return res.status(200).json({
        success: true,
        message: "Lowongan berhasil diupdate",
        data: result
      });
    } catch (error) {
      if (error.message.includes("not found")) {
        return res.status(404).json({ success: false, message: "Lowongan tidak ditemukan" });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  // DELETE LOWONGAN

  deleteLowongan = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      await this.lowonganService.deleteLowongan(lowonganId);

      return res.status(200).json({
        success: true,
        message: "Lowongan berhasil dihapus"
      });
    } catch (error) {
      if (error.message.includes("not found")) {
        return res.status(404).json({ success: false, message: "Lowongan tidak ditemukan" });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  // UPDATE STATUS LOWONGAN
  updateStatusLowongan = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      const { idLowongan, status } = req.body;
      const dosenId = req.user?.id_user;

      console.log("req.user:", req.user); // cek token dan id_user
    console.log("req.params.lowonganId:", lowonganId);
    console.log("req.body.idLowongan:", idLowongan);

      if (!idLowongan || !status) {
        return res.status(400).json({ success: false, message: "idLowongan dan status wajib diisi" });
      }

      const validStatus = ['aktif', 'tutup'];
      if (!validStatus.includes(status.toLowerCase())) {
        return res.status(400).json({
          success: false,
          message: `Status tidak valid. Gunakan: ${validStatus.join(', ')}`
        });
      }

      if (lowonganId !== idLowongan.toString()) {
        return res.status(400).json({ success: false, message: "Lowongan ID mismatch" });
      }
      

      if (!dosenId) {
        return res.status(401).json({ success: false, message: "Token tidak memiliki dosenId" });
      }

      const result = await this.lowonganService.updateStatusLowongan(
        idLowongan,
        status,
        dosenId
      );

      return res.status(200).json({
        message: "Status lowongan berhasil diubah",
        id_lowongan: result.id_lowongan,
        nama_matkul: result.nama_matkul,
        status: result.status
      });
    } catch (error) {
      if (error.message === "Lowongan not found") {
        return res.status(404).json({ success: false, message: "Lowongan tidak ditemukan" });
      }

      if (error.message === "Unauthorized") {
        return res.status(403).json({ success: false, message: "Anda tidak memiliki akses" });
      }

      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  // GET PENDAFTAR BY LOWONGAN

  getPendaftarByLowonganId = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      const dosenId = req.user?.id_user;

      if (!dosenId) {
        return res.status(401).json({ success: false, message: "Token tidak memiliki dosenId" });
      }

      const result = await this.lowonganService.getPendaftarByLowonganId(
        lowonganId,
        dosenId
      );

      return res.status(200).json(result);
    } catch (error) {
      if (error.message === "Lowongan not found") {
        return res.status(404).json({ success: false, message: "Lowongan tidak ditemukan" });
      }

      if (error.message === "Unauthorized") {
        return res.status(403).json({
          success: false,
          message: "Anda tidak memiliki akses untuk melihat pendaftar"
        });
      }

      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  // GET DETAIL PENDAFTAR
  getDetailPendaftar = async (req, res) => {
    try {
      const { lowonganId, pendaftarId } = req.params;
      const dosenId = req.user?.id_user;

      if (!dosenId) {
        return res.status(401).json({
          success: false,
          message: "Token tidak memiliki dosenId"
        });
      }

      const result = await this.lowonganService.getDetailPendaftar(
        lowonganId,
        pendaftarId,
        dosenId
      );

      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      console.error("Error in LowonganHandler.getDetailPendaftar:", error);

      if (error.message === "Lowongan tidak ditemukan") {
        return res.status(404).json({
          success: false,
          message: "Lowongan tidak ditemukan"
        });
      }

      if (error.message === "Pendaftar tidak ditemukan") {
        return res.status(404).json({
          success: false,
          message: "Pendaftar tidak ditemukan"
        });
      }

      if (error.message === "Unauthorized") {
        return res.status(403).json({
          success: false,
          message: "Anda tidak memiliki akses untuk melihat detail pendaftar"
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };
}

export default LowonganHandler;
