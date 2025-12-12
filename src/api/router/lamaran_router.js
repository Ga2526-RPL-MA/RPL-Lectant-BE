import { Router } from 'express';
import LamaranHandler from '../handler/lamaran_handler.js';
import { verifyToken } from '../../middleware/authentication.js';
import { authorizeRole } from '../../middleware/rbacMiddleware.js';

const router = Router();
const lamaranHandler = new LamaranHandler();


router.post('/lamaran/:id_lowongan',
  verifyToken,
  authorizeRole(['mahasiswa']),
  lamaranHandler.createLamaran
);

router.get(
  '/lamaran/lamaran-saya',
  verifyToken,                    
  authorizeRole(['mahasiswa']),     
  lamaranHandler.getLamaranSaya
);

router.get(
    '/lamaran/lamaran-saya/:idLamaran', verifyToken, authorizeRole(['mahasiswa']),
    lamaranHandler.getDetailLamaran
);

// Update status pendaftaran (hanya dosen)
router.patch(
  '/lamaran/status/:idPendaftaran',
  verifyToken,
  authorizeRole(['dosen']),
  lamaranHandler.updateStatusPendaftaran
);

export default router;