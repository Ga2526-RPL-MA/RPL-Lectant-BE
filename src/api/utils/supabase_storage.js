import supabase from "../../config/supabase.js";
import { v4 as uuidv4 } from "uuid";

export const uploadFileToSupabase = async (
  file,
  bucket = "dokumen",     // FIX 1: bucket default benar
  folder = ""
) => {
  const extension = file.originalname.split(".").pop().toLowerCase(); // FIX 2
  const filename = `${uuidv4()}.${extension}`;
  const path = `${folder}${filename}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
    });

  if (error) {
    console.error("Supabase upload error:", error); // debug detail
    throw { status: 500, message: "Gagal mengunggah berkas." }; // FIX 3 optional
  }

  const { data: publicData } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  const publicURL = publicData?.publicUrl ?? null;

  return { path, publicURL };
};
