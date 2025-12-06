import prisma from '../../config/prisma.js';

export const createMahasiswa = async (mahasiswaData) => {
  const {
    nrp,
    nama,
    email,
    no_telepon,
    jurusan,
    angkatan,
    semester,
    dokumen_url, 
    id_user
  } = mahasiswaData;

  return prisma.mahasiswa.create({
    data: {
      nrp,
      nama,
      email,
      no_telepon,
      jurusan,
      angkatan,
      semester,
      dokumen_url,
      id_user
    },
    select: {
      id_user: true,
      nrp: true,
      nama: true,
      email: true,
      no_telepon: true,
      jurusan: true,
      angkatan: true,
      semester: true,
      dokumen_url: true
    }
  });
};

export const updateMahasiswa = async (id_user, mahasiswaData) => {
  const {
    nrp,
    nama,
    email,
    no_telepon,
    jurusan,
    angkatan,
    semester,
    dokumen_url
  } = mahasiswaData;

  return prisma.mahasiswa.update({
    where: { id_user: BigInt(id_user) },
    data: {
      nrp,
      nama,
      email,
      no_telepon,
      jurusan,
      angkatan,
      semester,
      dokumen_url
    },
    select: {
      id_user: true,
      nrp: true,
      nama: true,
      email: true,
      no_telepon: true,
      jurusan: true,
      angkatan: true,
      semester: true,
      dokumen_url: true
    }
  });
};

export const findMahasiswaByUserId = async (id_user) => {
  return prisma.mahasiswa.findUnique({ where: { id_user: BigInt(id_user) } });
};