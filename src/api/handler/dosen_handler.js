import { createProfileService, getProfileService, updateProfileService } from "../service/dosen_services.js";

// CREATE
export const createProfileHandler = async (req, res) => {
  try {
    const profile = await createProfileService(req.user.id_user, req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (err) {
    res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error." });
  }
};

// READ
export const getProfileHandler = async (req, res) => {
  try {
    const profile = await getProfileService(req.user.id_user);
    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error." });
  }
};

// UPDATE
export const updateProfileHandler = async (req, res) => {
  try {
    const profile = await updateProfileService(req.user.id_user, req.body);
    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    res.status(err.status || 500).json({ success: false, message: err.message || "Internal server error." });
  }
};
