import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET ;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

export const generateAccessToken = (payload) =>
  jwt.sign(payload, ACCESS_SECRET, { expiresIn: "1d" });

export const generateRefreshToken = (payload) =>
  jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });

export const verifyAccessToken = (token) =>
  jwt.verify(token, ACCESS_SECRET);

export const verifyRefreshToken = (token) =>
  jwt.verify(token, REFRESH_SECRET);
