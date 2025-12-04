import LowonganService from '../service/lowongan_service.js';

class LowonganHandler {
  constructor() {
    this.lowonganService = new LowonganService();
  }

  updateStatusLowongan = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      const { idLowongan, status } = req.body;
      const dosenId = req.user?.dosenId;

      // Validasi input
      if (!idLowongan) {
        return res.status(400).json({
          success: false,
          message: 'idLowongan is required'
        });
      }

      if (!status) {
        return res.status(400).json({
          success: false,
          message: 'status is required'
        });
      }

      // Validasi status hanya bisa "tutup", "buka", atau "pending"
      const validStatus = ['aktif', 'tutup'];
      if (!validStatus.includes(status.toLowerCase())) {
        return res.status(400).json({
          success: false,
          message: `Invalid status. Must be one of: ${validStatus.join(', ')}`
        });
      }

      if (lowonganId !== idLowongan.toString()) {
        return res.status(400).json({
          success: false,
          message: 'Lowongan ID mismatch'
        });
      }

      if (!dosenId) {
        return res.status(401).json({
          success: false,
          message: 'Dosen ID not found in token'
        });
      }

      const result = await this.lowonganService.updateStatusLowongan(
        idLowongan,
        status,
        dosenId
      );

      return res.status(200).json({
        message: 'Status lowongan berhasil diubah. Status pendaftar berhasil diubah',
        id_lowongan: result.id_lowongan,
        nama_matkul: result.nama_matkul
      });
    } catch (error) {
      console.error('Error in updateStatusLowongan:', error);

      if (error.message === 'Lowongan not found') {
        return res.status(404).json({
          success: false,
          message: 'Lowongan tidak ditemukan'
        });
      }

      if (error.message === 'Unauthorized') {
        return res.status(403).json({
          success: false,
          message: 'Anda tidak memiliki akses untuk mengubah lowongan ini'
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  };

    getPendaftarByLowonganId = async (req, res) => {
    try {
      const { lowonganId } = req.params;
      const dosenId = req.user?.dosenId;

      if (!dosenId) {
        return res.status(401).json({
          success: false,
          message: 'Dosen ID not found in token'
        });
      }

      const result = await this.lowonganService.getPendaftarByLowonganId(lowonganId, dosenId);

      return res.status(200).json(result);
    } catch (error) {
      console.error('Error in getPendaftarByLowonganId:', error);

      if (error.message === 'Lowongan not found') {
        return res.status(404).json({ success: false, message: 'Lowongan tidak ditemukan' });
      }

      if (error.message === 'Unauthorized') {
        return res.status(403).json({ success: false, message: 'Anda tidak memiliki akses melihat pendaftar lowongan ini' });
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  };
}

export default LowonganHandler;