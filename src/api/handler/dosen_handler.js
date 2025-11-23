import DosenService from "../service/dosen_services.js";

class DosenHandler {
  constructor() {
    this.dosenService = new DosenService();
  }

  // CREATE
  createProfileHandler = async (req, res) => {
    try {
      const profile = await createProfileService(req.user.id_user, req.body);
      res.status(201).json({ success: true, data: profile });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error." });
    }
  };

  // READ
  getProfileHandler = async (req, res) => {
    try {
      const profile = await getProfileService(req.user.id_user);
      res.status(200).json({ success: true, data: profile });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error." });
    }
  };

  // UPDATE
  updateProfileHandler = async (req, res) => {
    try {
      const profile = await updateProfileService(req.user.id_user, req.body);
      res.status(200).json({ success: true, data: profile });
    } catch (err) {
      res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error." });
    }
  };

  getKelasByDosenId = async (req, res) => {
    try {
      // Get dosen ID from authenticated user
      console.log("req.user:", req.user); 
      const dosenId = req.user?.dosenId;

      if (!dosenId) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized'
        });
      }

      const kelas = await this.dosenService.getKelasByDosenId(dosenId);

      return res.status(200).json(kelas);
    } catch (error) {
      console.error('Error in getKelasByDosenId:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  };
}

export default DosenHandler;

