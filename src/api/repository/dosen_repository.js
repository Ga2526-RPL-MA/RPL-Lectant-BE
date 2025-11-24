import prisma from "../../config/prisma.js";

// CREATE profil dosen
export const createDosen = async (data) => {
  return await prisma.dosen.create({
    data,
    select: { id_user: true, nama: true, nip: true, email: true, no_telepon: true, jurusan: true },
  });
};

// Ambil profil dosen berdasarkan id_user
export const findDosenById = async (id_user) => {
  return await prisma.dosen.findUnique({
    where: { id_user: Number(id_user) },
    select: { id_user: true, nama: true, nip: true, email: true, no_telepon: true, jurusan: true },
  });
};

// Update profil dosen
export const updateDosen = async (id_user, data) => {
  return await prisma.dosen.update({
    where: { id_user: Number(id_user) },
    data,
    select: { id_user: true, nama: true, nip: true, email: true, no_telepon: true, jurusan: true },
  });
};
