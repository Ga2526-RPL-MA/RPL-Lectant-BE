// src/api/repository/user.repository.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export const updatePassword = async (email, newHashedPassword) => {
  return await prisma.users.update({
    where: { email },
    data: { 
      password_hash: newHashedPassword 
    },
  });
};

export const updateUserToken = async (email, token) => {
  const expiry = new Date(Date.now() + 3600000); // 1 jam
  return await prisma.users.update({
    where: { email },
    data: { 
      resetToken: token, 
      resetTokenExpiry: expiry 
    },
  });
};

export const findUserByToken = async (token) => {
  return await prisma.users.findFirst({
    where: { 
      resetToken: token, 
      resetTokenExpiry: { 
        gte: new Date() 
      } 
    },
  });
};

export const resetUserPassword = async (id_user, newPassword) => {
  const bcrypt = await import('bcryptjs');
  const hashed = await bcrypt.default.hash(newPassword, 10);
  
  return await prisma.users.update({
    where: { id_user },
    data: { 
      password_hash: hashed, 
      resetToken: null, 
      resetTokenExpiry: null 
    },
  });
};

export default {
  findUserByEmail,
  findUserById,
  createUser,
  updatePassword,
  updateUserToken,
  findUserByToken,
  resetUserPassword,
};