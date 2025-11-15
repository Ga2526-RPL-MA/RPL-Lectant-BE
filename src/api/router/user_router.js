import express from "express";
import { PrismaClient } from "@prisma/client";
import { register, login, refresh, logout, forgotPassword, resetPassword } from "../handler/user_handler.js";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
