// src/middleware/auth.middleware.js
import jwt from 'jsonwebtoken';
import { verifyAccessToken } from '../api/utils/jwt.js';

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication token required'
      });
    }

    const decoded = verifyAccessToken(token);
    
    // Menyimpan informasi user dari token
    req.user = {
      id_user: decoded.id_user,  
      email: decoded.email,         // user_id dari tabel users
      role: decoded.role,       // "dosen" atau "mahasiswa"
      dosenId: decoded.dosenId, // id dari tabel dosen (jika role = dosen)
      mahasiswaId: decoded.mahasiswaId // id dari tabel mahasiswa (jika role = mahasiswa)
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

// Middleware untuk memastikan user adalah dosen
export const isDosenMiddleware = (req, res, next) => {
  if (req.user?.role !== 'dosen') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Dosen only.'
    });
  }
  next();
};  

// Middleware untuk memastikan user adalah mahasiswa
export const isMahasiswaMiddleware = (req, res, next) => {
  if (req.user?.role !== 'mahasiswa') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Mahasiswa only.'
    });
  }
  next();
};



