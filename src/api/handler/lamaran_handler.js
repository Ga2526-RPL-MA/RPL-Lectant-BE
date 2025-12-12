import LamaranService from "../service/lamaran_service.js";
import { uploadFileToSupabase } from "../utils/supabase_storage.js";

class LamaranHandler {
  constructor() {
    this.lamaranService = LamaranService;
  }

  // ============================
  // CREATE LAMARAN
  // ============================
  createLamaran = async (req, res) => {
    try {
      const userId = req.user.id_user;
      const { id_lowongan } = req.params;
      const { motivasi } = req.body;

      // Validasi dasar
      if (!id_lowongan) {
        return res.status(400).json({
          success: false,
          message: "ID lowongan wajib diisi",
        });
      }

      if (!motivasi || motivasi.trim() === "") {
        return res.status(400).json({
          success: false,
          message: "Motivasi wajib diisi",
        });
      }

      // ========================
      // Upload file ke Supabase
      // ========================
      let file_berkas = null;

      if (req.file) {
        const bucket = process.env.SUPABASE_BUCKET || "dokumen";
        const folder = `lamaran/${userId}/`;

        const uploaded = await uploadFileToSupabase(req.file, bucket, folder);

        file_berkas = uploaded.publicURL; // Simpan URL saja
      }

      const result = await this.lamaranService.createLamaran(userId, {
        id_lowongan: parseInt(id_lowongan),
        motivasi: motivasi.trim(),
        file_berkas, // URL atau null
      });

      return res.status(201).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      console.error("Error in LamaranHandler.createLamaran:", error);

      // Kalau error karena input salah
      if (
        error.message.includes("tidak ditemukan") ||
        error.message.includes("tidak aktif") ||
        error.message.includes("ditutup") ||
        error.message.includes("sudah mendaftar") ||
        error.message.includes("Hanya mahasiswa") ||
        error.message.includes("Motivasi") ||
        error.message.includes("Format file")
      ) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Gagal membuat lamaran",
      });
    }
  };

  // ============================
  // GET LAMARAN SAYA
  // ============================
  getLamaranSaya = async (req, res) => {
    try {
      const userId = req.user.id_user;

      const result = await this.lamaranService.getLamaranSayaWithDetails(
        userId
      );

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error("Error in LamaranHandler.getLamaranSaya:", error);

      res.status(500).json({
        success: false,
        message: error.message || "Gagal mendapatkan data lamaran",
      });
    }
  };

  // ============================
  // GET DETAIL LAMARAN
  // ============================
  getDetailLamaran = async (req, res) => {
    try {
      const { idLamaran } = req.params;
      const userId = req.user.id_user;

      const result = await this.lamaranService.getDetailLamaran(
        idLamaran,
        userId
      );

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      console.error("Error in LamaranHandler.getDetailLamaran:", error);

      if (error.message.includes("tidak ditemukan")) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      if (error.message.includes("tidak memiliki akses")) {
        return res.status(403).json({
          success: false,
          message: error.message,
        });
      }

      res.status(500).json({
        success: false,
        message: error.message || "Gagal mendapatkan detail lamaran",
      });
    }
  };

  // ============================
  // UPDATE STATUS PENDAFTARAN
  // ============================
  updateStatusPendaftaran = async (req, res) => {
    try {
      const { idPendaftaran } = req.params;
      const { status_pendaftaran } = req.body;
      const userId = req.user.id_user;

      console.log(status_pendaftaran);
      
      // Validasi input
      if (!status_pendaftaran) {
        return res.status(400).json({
          success: false,
          message: "Status pendaftaran wajib diisi",
        });
      }

      const result = await this.lamaranService.updateStatusPendaftaran(
        idPendaftaran,
        status_pendaftaran,
        userId
      );

      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      console.error("Error in LamaranHandler.updateStatusPendaftaran:", error);

      // Handle error untuk dosen yang tidak memiliki akses
      if (error.message.includes("Hanya dosen")) {
        return res.status(403).json({
          success: false,
          message: error.message,
        });
      }

      // Handle error untuk pendaftaran tidak ditemukan
      if (error.message.includes("tidak ditemukan")) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      // Handle error untuk status tidak valid
      if (error.message.includes("tidak valid")) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      // Handle error untuk akses tidak diizinkan
      if (error.message.includes("tidak memiliki akses")) {
        return res.status(403).json({
          success: false,
          message: error.message,
        });
      }

      res.status(500).json({
        success: false,
        message: "Gagal mengupdate status pendaftaran",
      });
    }
  };
}

export default LamaranHandler;
