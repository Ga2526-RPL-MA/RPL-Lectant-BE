import { verifyAccessToken } from "../api/utils/jwt.js";

export const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Unauthorized" });

  const token = header.split(" ")[1];
  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded; // --> simpan email ITS
    next();
  } catch {
    res.status(401).json({ message: "Token tidak valid" });
  }
};

