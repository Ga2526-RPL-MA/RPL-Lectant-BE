import { Router } from 'express';
import LowonganHandler from '../handler/lowongan_handler.js';
import { verifyToken } from "../../middleware/authentication.js";
import { authorizeRole } from "../../middleware/rbacMiddleware.js";
import { checkProfileComplete } from "../../middleware/profileChecking.js";

const router = Router();
const lowonganHandler = new LowonganHandler();

// CREATE LOWONGAN (hanya dosen)
router.post(
  '/',
  verifyToken,
  checkProfileComplete(['dosen']),   // cek profile dosen lengkap
  authorizeRole(['dosen']),
  lowonganHandler.createLowongan
);

// GET ALL LOWONGAN - Daftar Kelas (semua lowongan terlepas dari status)
router.get(
  '/all',
  verifyToken,
  checkProfileComplete(['mahasiswa', 'dosen']),
  authorizeRole(['mahasiswa', 'dosen', 'admin']),
  lowonganHandler.getAllLowongan
);

// GET LOWONGAN AKTIF - Kelas yang Dibuka (hanya lowongan dengan status 'aktif')
router.get(
  '/aktif',
  verifyToken,
  checkProfileComplete(['mahasiswa', 'dosen']),
  authorizeRole(['mahasiswa', 'dosen', 'admin']),
  lowonganHandler.getLowonganAktif
);

// GET LOWONGAN BY DOSEN - Kelas yang Anda Buka (lowongan milik dosen yang login)
router.get(
  '/my-lowongan',
  verifyToken,
  checkProfileComplete(['dosen']),
  authorizeRole(['dosen']),
  lowonganHandler.getLowonganByDosen
);

// GET LOWONGAN BY ID (mahasiswa, dosen, admin)
router.get(
  '/:lowonganId',
  verifyToken,
  checkProfileComplete(['mahasiswa', 'dosen']),
  authorizeRole(['mahasiswa', 'dosen', 'admin']),
  lowonganHandler.getLowonganById
);

// UPDATE LOWONGAN (hanya dosen)
router.put(
  '/:lowonganId',
  verifyToken,
  checkProfileComplete(['dosen']),
  authorizeRole(['dosen']),
  lowonganHandler.updateLowongan
);

// DELETE LOWONGAN (dosen, admin)
router.delete(
  '/:lowonganId',
  verifyToken,
  checkProfileComplete(['dosen', 'admin']),
  authorizeRole(['dosen', 'admin']),
  lowonganHandler.deleteLowongan
);

// UPDATE STATUS LOWONGAN (dosen, admin)
router.put(
  '/:lowonganId/status',
  verifyToken,
  checkProfileComplete(['dosen', 'admin']),
  authorizeRole(['dosen', 'admin']),
  lowonganHandler.updateStatusLowongan
);

// GET PENDAFTAR BY LOWONGAN (dosen, admin)
router.get(
  '/:lowonganId/pendaftar',
  verifyToken,
  checkProfileComplete(['dosen', 'admin']),
  authorizeRole(['dosen', 'admin']),
  lowonganHandler.getPendaftarByLowonganId
);

// GET DETAIL PENDAFTAR BY ID (dosen, admin)
router.get(
  '/:lowonganId/pendaftar/:pendaftarId',
  verifyToken,
  checkProfileComplete(['dosen', 'admin']),
  authorizeRole(['dosen', 'admin']),
  lowonganHandler.getDetailPendaftar
);

export default router;
