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

// Fungsi register user (dummy)
export const createUser = async ({ email, password_hash }) => {
  const newUser = {
    id_user: users.length + 1,
    email,
    password_hash,
  };
  users.push(newUser);
  return newUser;
};

export const updatePassword = async (email, newHashedPassword) => {
  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1) return null;

  users[userIndex].password_hash = newHashedPassword;
  return users[userIndex];
};