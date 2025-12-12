import { Router } from 'express';
import { verifyToken } from "../../middleware/authentication.js";
import DosenHandler from '../handler/dosen_handler.js';
import { authorizeRole } from "../../middleware/rbacMiddleware.js";

const router = Router();
const dosenHandler = new DosenHandler();


// Semua route butuh auth + role dosen
router.use(verifyToken, );

// Routes
router.post("/profile-aing",authorizeRole(["dosen"]), dosenHandler.createProfileHandler); // buat profil baru
router.get("/profile-aing", authorizeRole(["dosen"]),dosenHandler.getProfileHandler);     // lihat profil
router.patch("/profile-aing", authorizeRole(["dosen"]),dosenHandler.updateProfileHandler); // update profil

// GET /dosen/kelas-aing
router.get('/kelas-aing',authorizeRole(["dosen"]), dosenHandler.getKelasByDosenId);
router.get('/statistik-aing',authorizeRole(["dosen"]), dosenHandler.getStatistikDosen);

export default router;
