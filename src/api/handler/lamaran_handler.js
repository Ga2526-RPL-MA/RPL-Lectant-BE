import LamaranService from '../service/lamaran_service.js';
import { getFileUrl, deleteFile } from '../../middleware/uploadMiddleware.js';

class LamaranHandler {
  constructor() {
    this.lamaranService = LamaranService;
  }

  createLamaran = async (req, res) => {
    try {
      const userId = req.user.id_user;
      const { id_lowongan, motivasi } = req.body;
      
      // Validasi input
      if (!id_lowongan) {
        // Hapus file jika ada karena validasi gagal
        if (req.file) {
          await deleteFile(req.file.path).catch(console.error);
        }
        return res.status(400).json({
          success: false,
          message: 'ID lowongan wajib diisi'
        });
      }

      if (!motivasi || motivasi.trim() === '') {
        if (req.file) {
          await deleteFile(req.file.path).catch(console.error);
        }
        return res.status(400).json({
          success: false,
          message: 'Motivasi wajib diisi'
        });
      }

      // Prepare file data
      let file_berkas = null;
      if (req.file) {
        file_berkas = {
          filename: req.file.filename,
          originalname: req.file.originalname,
          size: req.file.size,
          mimetype: req.file.mimetype,
          path: req.file.path,
          url: getFileUrl(req.file.filename)
        };
      }

      const result = await this.lamaranService.createLamaran(userId, {
        id_lowongan: parseInt(id_lowongan),
        motivasi: motivasi.trim(),
        file_berkas: file_berkas ? file_berkas.filename : null
      });

      return res.status(201).json({
        message: result.message,
      });
    } catch (error) {
      console.error('Error in LamaranHandler.createLamaran:', error);
      
      // Cleanup file jika ada error
      if (req.file) {
        await deleteFile(req.file.path).catch(console.error);
      }

      // Error handling berdasarkan pesan error
      if (error.message.includes('tidak ditemukan') || 
          error.message.includes('tidak aktif') ||
          error.message.includes('ditutup') ||
          error.message.includes('sudah mendaftar') ||
          error.message.includes('Hanya mahasiswa') ||
          error.message.includes('Motivasi') ||
          error.message.includes('Format file')) {
        return res.status(400).json({
          success: false,
          message: error.message
        });
      }
      return res.status(500).json({
        success: false,
        message: 'Gagal membuat lamaran'
      });
    }
  };

  getLamaranSaya = async (req, res) => {
    try {
      const userId = req.user.id_user;

      const result = await lamaranService.getLamaranSayaWithDetails(userId);
      
      res.status(200).json(result);
    } catch (error) {
      console.error('Error in LamaranHandler.getLamaranSaya:', error);
      
      res.status(500).json({
        success: false,
        message: error.message || 'Gagal mendapatkan data lamaran'
      });
    }
  }


  getDetailLamaran = async (req, res) => {
    try {
      const { idLamaran } = req.params;
      const userId = req.user.id_user;

      const result = await lamaranService.getDetailLamaran(idLamaran, userId);
      
      res.status(200).json(result);
    } catch (error) {
      console.error('Error in LamaranHandler.getDetailLamaran:', error);
      
      if (error.message.includes('tidak ditemukan')) {
        return res.status(404).json({
          success: false,
          message: error.message
        });
      }

      if (error.message.includes('tidak memiliki akses')) {
        return res.status(403).json({
          success: false,
          message: error.message
        });
      }
      
      res.status(500).json({
        success: false,
        message: error.message || 'Gagal mendapatkan detail lamaran'
      });
    }
  }
}


export default LamaranHandler;