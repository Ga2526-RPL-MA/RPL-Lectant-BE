import { Router } from 'express';
import { authMiddleware } from "../../middleware/authentication.js";
import DosenHandler from '../handler/dosen_handler.js';
import { authorizeRole } from "../../middleware/rbacMiddleware.js";

const router = Router();
const dosenHandler = new DosenHandler();


// Semua route butuh auth + role dosen
router.use(authMiddleware, authorizeRole(["dosen"]));

// Routes
router.post("/profile-aing", dosenHandler.createProfileHandler); // buat profil baru
router.get("/profile-aing", dosenHandler.getProfileHandler);     // lihat profil
router.patch("/profile-aing", dosenHandler.updateProfileHandler); // update profil

// GET /dosen/kelas-aing
router.get('/kelas-aing', dosenHandler.getKelasByDosenId);
router.get('/statistik-aing', dosenHandler.getStatistikDosen);



export default router;
