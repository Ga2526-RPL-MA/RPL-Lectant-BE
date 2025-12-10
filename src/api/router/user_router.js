import express from "express";
import {
  register,
  login,
  refresh,
  logout,
  forgot,
  reset,
} from "../handler/user_handler.js";

const router = express.Router();

// AUTH
router.post("/register", register);
router.post("/login", login);

// REFRESH + LOGOUT
router.post("/refresh", refresh);
router.post("/logout", logout);

// PASSWORD RESET
router.post("/forgot-password", forgot);
router.post("/reset-password", reset);

export default router;
