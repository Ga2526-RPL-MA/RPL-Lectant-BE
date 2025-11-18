import prisma from "../../config/prisma.js";

export const findUserByEmail = async (email) => {
  return prisma.users.findUnique({ where: { email } });
};

export const createUser = async (data) => {
  return prisma.users.create({ data });
};

export const updatePassword = async (email, newHashedPassword) => {
  return prisma.users.update({
    where: { email },
    data: { password_hash: newHashedPassword },
  });
};
