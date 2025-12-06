import { Router } from 'express';
import LamaranHandler from '../handler/lamaran_handler.js';
import { authMiddleware } from '../../middleware/authentication.js';
import { uploadSingle } from '../../middleware/uploadMiddleware.js';

const router = Router();
const lamaranHandler = new LamaranHandler();

// Upload single file untuk lamaran baru
router.post('/lamaran',
  authMiddleware,
  uploadSingle('file_berkas'), // Field name: 'file_berkas'
  lamaranHandler.createLamaran
);

export default router;