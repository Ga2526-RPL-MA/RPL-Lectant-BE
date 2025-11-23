// src/api/router/auth.router.js
import { Router } from 'express';
import AuthHandler from '../handler/auth_handler.js';
import { authMiddleware } from '../../middleware/authentication.js';

const router = Router();
const authHandler = new AuthHandler();

// Authentication endpoints
router.post('/register', authHandler.register);
router.post('/login', authHandler.login);
router.post('/refresh', authHandler.refresh);
router.post('/logout', authHandler.logout);

// Password reset endpoints
router.post('/forgot-password', authMiddleware, authHandler.forgotPassword);
router.post('/reset-password', authHandler.resetPassword);

export default router;