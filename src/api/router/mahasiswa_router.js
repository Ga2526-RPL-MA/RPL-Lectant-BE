import express from "express";
import {
  getMyProfile,
  createMyProfile,
  updateMyProfile,
  deleteMyProfile,
} from "../handler/mahasiswa_handler.js";
import { verifyToken } from "../../middleware/authentication.js";
import { uploadMemory } from "../../middleware/upload.js";

const router = express.Router();

// Protected routes: require verifyToken
router.get("/profile", verifyToken, getMyProfile);
router.post("/profile", verifyToken, uploadMemory.single("dokumen"), createMyProfile);
router.put("/profile", verifyToken, uploadMemory.single("dokumen"), updateMyProfile);
router.delete("/", verifyToken, deleteMyProfile);

export default router;
