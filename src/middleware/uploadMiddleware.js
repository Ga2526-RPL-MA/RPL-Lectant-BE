import multer from "multer";
import path from "path";

// gunakan memory storage (WAJIB di Vercel)
const storage = multer.memoryStorage();

// Filter file
const fileFilter = (req, file, cb) => {
  const allowed = [
    ".pdf", ".doc", ".docx", ".jpg",
    ".jpeg", ".png", ".txt", ".zip", ".rar"
  ];

  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowed.includes(ext)) {
    return cb(new Error(`File tidak didukung. Gunakan: ${allowed.join(', ')}`));
  }

  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }
});

export const uploadSingle = (field = "file_berkas") =>
  upload.single(field);
