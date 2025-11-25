import { Router } from 'express';
import userHandler from '../handler/user_handler.js';
import { authMiddleware } from '../../middleware/authentication.js';

const router = Router();
const userHandler = new userHandler();

// Authentication endpoints
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.post('/refresh', userHandler.refresh);
router.post('/logout', userHandler.logout);

// Password reset endpoints
router.post('/forgot-password', authMiddleware, userHandler.forgotPassword);
router.post('/reset-password', userHandler.resetPassword);

export default router;