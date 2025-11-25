// src/api/router/lowongan.router.js
import { Router } from 'express';
import LowonganHandler from '../handler/lowongan_handler.js';
import { authMiddleware, isDosenMiddleware } from '../../middleware/authentication.js';

const router = Router();
const lowonganHandler = new LowonganHandler();

router.put('/:lowonganId/status', authMiddleware, isDosenMiddleware, lowonganHandler.updateStatusLowongan);
router.get('/:lowonganId/pendaftar', authMiddleware, isDosenMiddleware, lowonganHandler.getPendaftarByLowonganId);

export default router;