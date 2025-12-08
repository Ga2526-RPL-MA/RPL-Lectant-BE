<<<<<<< HEAD
import { Router } from 'express';
import { authMiddleware } from "../../middleware/authentication.js";
import DosenHandler from '../handler/dosen_handler.js';
import { authorizeRole } from "../../middleware/rbacMiddleware.js";

const router = Router();
const dosenHandler = new DosenHandler();


// Semua route butuh auth + role dosen
router.use(authMiddleware, authorizeRole(["dosen"]));

// Routes
router.post("/profile-aing", dosenHandler.createProfileHandler); // buat profil baru
router.get("/profile-aing", dosenHandler.getProfileHandler);     // lihat profil
router.patch("/profile-aing", dosenHandler.updateProfileHandler); // update profil

// GET /dosen/kelas-aing
router.get('/kelas-aing', dosenHandler.getKelasByDosenId);
router.get('/statistik-aing', dosenHandler.getStatistikDosen);

export default router;
=======
// src/router/dosen_router.js

import express from "express";
import { auth } from "../../middleware/authentication.js";
import DosenHandler from '../handler/dosen_handler.js';

const router = express.Router();
const dosenHandler = new DosenHandler();

// Route untuk get kelas by dosen
// Endpoint: GET /dosen/kelas-aing
// Need Auth: yes
router.get("/kelas-aing", auth, dosenHandler.getKelasByDosenId);

export default router;
>>>>>>> f86ed4f (fix: fix automatic registration)
