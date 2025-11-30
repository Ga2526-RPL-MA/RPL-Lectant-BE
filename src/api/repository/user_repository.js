import prisma from "../../config/prisma.js";

export const findUserByEmail = async (email) => {
  return prisma.users.findUnique({ where: { email } });
};

export const findUserByRecoveryEmail = async (email_recovery) => {
  // Cek di tabel dosen
  const dosen = await prisma.dosen.findFirst({
    where: { email: email_recovery },
    select: {
      email: true,
      nama: true,
      user: {
        select: {
          id_user: true,
          role: true
        }
      }
    }
  });

  if (dosen) {
    return {
      id_user: dosen.user.id_user,
      nama: dosen.nama,
      role: dosen.user.role
    };
  }

  // Cek di tabel mahasiswa
  const mahasiswa = await prisma.mahasiswa.findFirst({
    where: { email: email_recovery },
    select: {
      email: true,
      nama: true,
      user: {
        select: {
          id_user: true,
          role: true
        }
      }
    }
  });

  if (mahasiswa) {
    return {
        id_user: mahasiswa.user.id_user,
      nama: mahasiswa.nama,
      role: mahasiswa.user.role
    };
  }

  return null;
};

export const createUser = async (data) => {
  return prisma.users.create({ data });
};

export const updatePassword = async (id_user, newHashedPassword) => {
  return prisma.users.update({
    where: { id_user: BigInt(id_user) },
    data: { password_hash: newHashedPassword },
  });
};