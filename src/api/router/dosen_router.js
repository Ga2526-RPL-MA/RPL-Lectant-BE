import { Router } from 'express';
import { auth } from "../../middleware/authentication.js";
import DosenHandler from '../handler/dosen_handler.js';
import { authorizeRole } from "../../middleware/rbacMiddleware.js";

const router = Router();
const dosenHandler = new DosenHandler();

<<<<<<< HEAD

// Semua route butuh auth + role dosen
router.use(auth, authorizeRole(["dosen"]));

// Routes
router.post("/profile-aing", dosenHandler.createProfileHandler); // buat profil baru
router.get("/profile-aing", dosenHandler.getProfileHandler);     // lihat profil
router.patch("/profile-aing", dosenHandler.updateProfileHandler); // update profil

// GET /dosen/kelas-aing
router.get('/kelas-aing', dosenHandler.getKelasByDosenId);
router.get('/statistik-aing', dosenHandler.getStatistikDosen);
=======
router.get('/kelas-aing', authMiddleware, isDosenMiddleware, (req, res) =>
  dosenHandler.getKelasByDosenId(req, res)
);
>>>>>>> 097fd6d (feat: add get all pendaftar api)

export default router;
