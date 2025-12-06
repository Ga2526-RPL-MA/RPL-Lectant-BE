import { createMahasiswa, findMahasiswaByUserId, updateMahasiswa } from "../repository/mahasiswa_repository.js";

export const createProfile = async (id_user, payload) => {
  // 1. Cek profil exist
  const existing = await findMahasiswaByUserId(id_user);
  if (existing) throw { status: 409, message: "Profil mahasiswa sudah ada." };

  // 2. Validasi minimal (tetap)
  if (!payload.nrp || !payload.nama || !payload.email || !payload.dokumen_url) {
    throw { status: 400, message: "NRP, nama, email dan dokumen wajib diisi." };
  }

  // 3. TANPA sanitasi — payload langsung dipakai
  const data = {
    id_user: BigInt(id_user),
    nrp: payload.nrp,
    nama: payload.nama,
    email: payload.email,
    no_telepon: payload.no_telepon,
    jurusan: payload.jurusan,
    angkatan: payload.angkatan,
    semester: payload.semester !== undefined ? payload.semester : null,
    dokumen_url: payload.dokumen_url ?? null,
  };

  // 4. Call repository
  try {
    return await createMahasiswa(data);
  } catch (err) {
    throw { status: 500, message: "Gagal membuat profil mahasiswa", detail: err.message };
  }
};

export const editProfile = async (id_user, payload) => {
  const existing = await findMahasiswaByUserId(id_user);
  if (!existing) throw { status: 404, message: "Profil mahasiswa tidak ditemukan." };

  // Tidak ada sanitasi — ambil apa adanya
  const data = {
    nrp: payload.nrp ?? existing.nrp,
    nama: payload.nama ?? existing.nama,
    email: payload.email ?? existing.email,
    no_telepon: payload.no_telepon ?? existing.no_telepon,
    jurusan: payload.jurusan ?? existing.jurusan,
    angkatan: payload.angkatan ?? existing.angkatan,
    semester: payload.semester !== undefined ? payload.semester : existing.semester,
    dokumen_url: payload.dokumen_url ?? existing.dokumen_url,
  };

  try {
    return updateMahasiswa(id_user, data);
  } catch (err) {
    throw { status: 500, message: "Gagal meng-update mahasiswa", detail: err.message };
  }
};

export const getProfile = async (id_user) => {
  const data = await findMahasiswaByUserId(id_user);
  if (!data) throw { status: 404, message: "Profil mahasiswa tidak ditemukan." };
  return data;
};
