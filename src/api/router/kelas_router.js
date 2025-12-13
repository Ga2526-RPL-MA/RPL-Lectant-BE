import { Router } from 'express';
import KelasHandler from '../handler/kelas_handler.js';
import { verifyToken } from '../../middleware/authentication.js';
import { authorizeRole } from '../../middleware/rbacMiddleware.js';

const router = Router();
const kelasHandler = new KelasHandler();

router.get('/kelas', verifyToken, authorizeRole(['dosen', 'mahasiswa']), kelasHandler.getAllKelas);
router.get('/mata-kuliah', verifyToken, authorizeRole(['dosen', 'mahasiswa']), kelasHandler.getAllMataKuliah);

export default router;