import { createDosen, findDosenById, updateDosen } from "../repository/dosen_repository.js";

// CREATE
export const createProfileService = async (id_user, payload) => {
  if (!payload.nama || !payload.nip || !payload.no_telepon || !payload.jurusan || !payload.email) {
    throw { status: 400, message: "Semua field wajib diisi." };
  }

  // Pastikan belum ada profil
  const existing = await findDosenById(id_user);
  if (existing) throw { status: 400, message: "Profil sudah ada." };

  return await createDosen({ id_user, ...payload });
};

// READ
export const getProfileService = async (id_user) => {
  const dosen = await findDosenById(id_user);
  if (!dosen) throw { status: 404, message: "Profil dosen tidak ditemukan." };
  return dosen;
};

// UPDATE
export const updateProfileService = async (id_user, payload) => {
  if (!payload.nama || !payload.nip || !payload.no_telepon || !payload.jurusan) {
    throw { status: 400, message: "Semua field wajib diisi." };
  }
  return await updateDosen(id_user, payload);
};
