import lamaranService from '../service/lamaran_service.js';

class LamaranHandler {
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
}

export default LamaranHandler;