import lamaranService from '../service/lamaran_service.js';

class LamaranHandler {
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