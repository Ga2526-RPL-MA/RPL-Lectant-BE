import express from "express";
import { auth } from "../../middleware/authentication.js";
import { authorizeRole } from "../../middleware/rbacMiddleware.js";
import { createProfileHandler, getProfileHandler, updateProfileHandler } from "../handler/dosen_handler.js";

const router = express.Router();

// Semua route butuh auth + role dosen
router.use(auth, authorizeRole(["dosen"]));

// Routes
router.post("/profile", createProfileHandler); // buat profil baru
router.get("/profile", getProfileHandler);     // lihat profil
router.patch("/profile", updateProfileHandler); // update profil

export default router;
