import prisma from "../../config/prisma.js";

const users = [
  { id: 1, email: "risyaddaysir@gmail.com", password: "$2a$10$abcd1234hash" },
];

export const findUserByEmail = async (email) => {
  return prisma.users.findUnique({ where: { email } });
};

export const findByEmail = (email) => {
  return users.find((u) => u.email === email);
};

export const createUser = async (data) => {
  return prisma.users.create({ data });
}

export const updatePassword = async (email, newHashedPassword) => {
  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1) return null;

  users[userIndex].password_hash = newHashedPassword;
  return users[userIndex];
};
