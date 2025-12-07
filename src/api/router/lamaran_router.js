
import express from 'express';
import LamaranHandler from '../handler/lamaran_handler.js';
import { authMiddleware } from '../../middleware/authentication.js';
import { authorizeRole } from '../../middleware/rbacMiddleware.js';

const router = express.Router();
const lamaranHandler = new LamaranHandler();

router.get(
    '/lamaran/lamaran-saya/:idLamaran', authMiddleware, authorizeRole(['mahasiswa']),
    lamaranHandler.getDetailLamaran
);

export default router;