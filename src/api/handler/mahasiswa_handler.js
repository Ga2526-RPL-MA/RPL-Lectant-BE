import {
  getProfile,
  createProfile,
  editProfile,
  
} from "../service/mahasiswa_service.js";
import { uploadFileToSupabase } from "../utils/supabase_storage.js";

// Utility: uniform error response
const sendError = (res, err) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server error",
  });
};

// ===============================
// GET PROFILE
// ===============================
export const getMyProfile = async (req, res) => {
  try {
    const id_user = req.user?.id_user;
    if (!id_user)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const profile = await getProfile(id_user);
    return res.json({ success: true, data: profile });
  } catch (err) {
    console.error("getMyProfile:", err);
    return sendError(res, err);
  }
};

// ===============================
// CREATE PROFILE
// ===============================
export const createMyProfile = async (req, res) => {
  try {
    const id_user = req.user?.id_user;
    if (!id_user)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const body = { ...req.body }; // ← tanpa sanitasi

    // Upload dokumen jika tersedia
    if (req.file) {
      const bucket = process.env.SUPABASE_BUCKET || "mahasiswa-docs";
      const fileRes = await uploadFileToSupabase(
        req.file,
        bucket,
        `mahasiswa/${id_user}/`
      );
      body.dokumen_url = fileRes.publicURL;
    }

    const profile = await createProfile(id_user, body);
    return res.status(201).json({ success: true, data: profile });
  } catch (err) {
    console.error("createMyProfile:", err);
    return sendError(res, err);
  }
};

// ===============================
// UPDATE PROFILE
// ===============================
export const updateMyProfile = async (req, res) => {
  try {
    const id_user = req.user?.id_user;
    if (!id_user)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const body = { ...req.body }; // ← tanpa sanitasi

    // Upload dokumen baru jika ada
    if (req.file) {
      const bucket = process.env.SUPABASE_BUCKET || "mahasiswa-docs";
      const fileRes = await uploadFileToSupabase(
        req.file,
        bucket,
        `mahasiswa/${id_user}/`
      );
      body.dokumen_url = fileRes.publicURL;
    }

    const profile = await editProfile(id_user, body);
    return res.json({ success: true, data: profile });
  } catch (err) {
    console.error("updateMyProfile:", err);
    return sendError(res, err);
  }
};

// ===============================
// DELETE PROFILE
// ===============================
export const deleteMyProfile = async (req, res) => {
  try {
    const id_user = req.user?.id_user;
    if (!id_user)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    await removeProfile(id_user);
    return res.json({ success: true, message: "Profil berhasil dihapus." });
  } catch (err) {
    console.error("deleteMyProfile:", err);
    return sendError(res, err);
  }
};
