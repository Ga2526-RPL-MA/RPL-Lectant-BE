import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Buat folder uploads jika belum ada
const uploadDir = 'uploads/lamaran';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Format: userID-timestamp-randomNumber.ext
    const userID = req.user?.id_user || 'anonymous';
    const timestamp = Date.now();
    const random = Math.round(Math.random() * 1E9);
    const originalName = path.parse(file.originalname).name;
    const extension = path.extname(file.originalname).toLowerCase();
    
    // Sanitize nama file (hapus karakter khusus)
    const sanitizedName = originalName.replace(/[^a-zA-Z0-9]/g, '_');
    
    const filename = `${userID}_${timestamp}_${random}_${sanitizedName}${extension}`;
    cb(null, filename);
  }
});

// Filter file berdasarkan tipe
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    '.pdf',  // PDF documents
    '.doc',  // Word documents
    '.docx', // Word documents (new)
    '.jpg',  // Images
    '.jpeg', // Images
    '.png',  // Images
    '.txt',  // Text files
    '.zip',  // Compressed files
    '.rar'   // Compressed files
  ];
  
  const extension = path.extname(file.originalname).toLowerCase();
  
  if (allowedTypes.includes(extension)) {
    cb(null, true);
  } else {
    cb(new Error(`Jenis file tidak didukung. Gunakan: ${allowedTypes.join(', ')}`), false);
  }
};

// Konfigurasi multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size
    files: 1 // Maksimal 1 file per request
  }
});

// Middleware untuk single file upload
const uploadSingle = (fieldName = 'file_berkas') => {
  return (req, res, next) => {
    const uploadMiddleware = upload.single(fieldName);
    
    uploadMiddleware(req, res, (err) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          // Error dari multer
          if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
              success: false,
              message: 'Ukuran file terlalu besar. Maksimal 10MB'
            });
          }
          if (err.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
              success: false,
              message: 'Hanya boleh mengupload 1 file'
            });
          }
          if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json({
              success: false,
              message: `Field name harus '${fieldName}'`
            });
          }
        }
        
        // Error custom dari fileFilter
        return res.status(400).json({
          success: false,
          message: err.message || 'Terjadi kesalahan saat upload file'
        });
      }
      
      // Jika tidak ada file yang diupload
      if (!req.file && req.method === 'POST') {
        return res.status(400).json({
          success: false,
          message: 'File wajib diupload'
        });
      }
      
      next();
    });
  };
};

// Helper untuk mendapatkan URL file
const getFileUrl = (filename) => {
  if (!filename) return null;
  return `${process.env.BASE_URL || 'http://localhost:3000'}/uploads/lamaran/${filename}`;
};

// Helper untuk menghapus file
const deleteFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        // Jika file tidak ditemukan, anggap sudah terhapus
        if (err.code === 'ENOENT') {
          resolve(true);
        } else {
          reject(err);
        }
      } else {
        resolve(true);
      }
    });
  });
};

// Validasi file sebelum upload (client-side validation)
const validateFileBeforeUpload = (file) => {
  const errors = [];
  
  if (!file) {
    errors.push('File tidak ditemukan');
    return errors;
  }
  
  // Check file size
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    errors.push(`Ukuran file melebihi ${maxSize / (1024 * 1024)}MB`);
  }
  
  // Check file extension
  const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.txt', '.zip', '.rar'];
  const extension = path.extname(file.name).toLowerCase();
  if (!allowedExtensions.includes(extension)) {
    errors.push(`Ekstensi file ${extension} tidak diizinkan`);
  }
  
  // Check file name length
  if (file.name.length > 255) {
    errors.push('Nama file terlalu panjang (maks 255 karakter)');
  }
  
  return errors;
};

export {
  upload,
  uploadSingle,
  getFileUrl,
  deleteFile,
  validateFileBeforeUpload
};