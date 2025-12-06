import supabase from "../../config/supabase.js";
import { v4 as uuidv4 } from "uuid";

/**
 * req.file expected shape from multer memoryStorage:
 * {
 *   originalname, mimetype, buffer
 * }
 */
export const uploadFileToSupabase = async (file, bucket = "mahasiswa-docs", folder = "") => {
  const extension = file.originalname.split(".").pop();
  const filename = `${uuidv4()}.${extension}`;
  const path = `${folder}${filename}`; // e.g. "mahasiswa/1234/uuid.pdf"

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
    });

  if (error) {
    console.error("Supabase upload error:", error);
    throw { status: 500, message: "Gagal mengunggah berkas." };
  }

  // Get public URL (or use createSignedUrl if you prefer expiring link)
  const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(path);
  const publicURL = publicData?.publicUrl ?? null;

  return { path, publicURL };
};
