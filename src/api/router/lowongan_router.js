// src/api/router/lowongan.router.js
import { Router } from 'express';
import LowonganHandler from '../handler/lowongan_handler.js';
import { verifyToken } from "../../middleware/authentication.js";
import { authorizeRole } from "../../middleware/rbacMiddleware.js";

const router = Router();
const lowonganHandler = new LowonganHandler();

router.put('/:lowonganId/status', verifyToken, authorizeRole([ "dosen", "admin"]), lowonganHandler.updateStatusLowongan);
router.get('/:lowonganId/pendaftar', verifyToken, authorizeRole([ "dosen", "admin"]), lowonganHandler.getPendaftarByLowonganId);

export default router;