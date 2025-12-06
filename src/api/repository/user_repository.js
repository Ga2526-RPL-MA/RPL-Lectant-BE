import prisma from "../../config/prisma.js";


export const findUserByEmail = async (email) => {
  return await prisma.users.findUnique({
    where: { email },
    select: {
      id_user: true,
      email: true,
      role: true,
      password_hash: true, 
    },
  });
};

export const findUserById = async (id_user) => {
  return await prisma.users.findUnique({
    where: { id_user },
    select: {
      id_user: true,
      email: true,
      role: true,
      password_hash: true,
    },
  });
};

export const createUser = async (data) => {
  return await prisma.users.create({ 
    data 
  });
};

export const updateResetToken = async (id_user, hashedToken, expiryDate) => {
  return prisma.users.update({
    where: { id_user },
    data: {
      reset_token: hashedToken,
      reset_token_expiry: expiryDate,
    },
  });
};

export const findUserByResetToken = async (hashedToken) => {
  return prisma.users.findFirst({
    where: {
      reset_token: hashedToken,
      reset_token_expiry: { gte: new Date() },
    },
  });
};

export const updatePasswordAndClearToken = async (id_user, newHashedPassword) => {
  return prisma.users.update({
    where: { id_user },
    data: {
      password_hash: newHashedPassword,
      reset_token: null,
      reset_token_expiry: null,
    },
  });
};

export const findUserByAnyEmail = async (email) => {
  // 1. Cek di users
  const userDirect = await prisma.users.findUnique({
    where: { email }
  });
  if (userDirect) return userDirect;

  // 2. Cek di mahasiswa
  const mhs = await prisma.mahasiswa.findUnique({
    where: { email },
    select: { id_user: true }
  });
  if (mhs) {
    return await prisma.users.findUnique({ where: { id_user: mhs.id_user } });
  }

  // 3. Cek di dosen
  const dsn = await prisma.dosen.findUnique({
    where: { email },
    select: { id_user: true }
  });
  if (dsn) {
    return await prisma.users.findUnique({ where: { id_user: dsn.id_user } });
  }

  return null;
};






export default {
  findUserByEmail,
  findUserById,
  createUser,
  updateResetToken,
  findUserByResetToken,
  updatePasswordAndClearToken,
  findUserByAnyEmail,
};