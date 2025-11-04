import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function findUserByEmail(email) {
  return await prisma.user.findUnique({ where: { email } });
}

export async function updateUserToken(email, token) {
  const expiry = new Date(Date.now() + 3600000); // 1 jam
  return await prisma.user.update({
    where: { email },
    data: { resetToken: token, resetTokenExpiry: expiry },
  });
}

export async function findUserByToken(token) {
  return await prisma.user.findFirst({
    where: { resetToken: token, resetTokenExpiry: { gte: new Date() } },
  });
}

export async function resetUserPassword(userId, newPassword) {
  const hashed = await bcrypt.hash(newPassword, 10);
  return await prisma.user.update({
    where: { id: userId },
    data: { password: hashed, resetToken: null, resetTokenExpiry: null },
  });
}
