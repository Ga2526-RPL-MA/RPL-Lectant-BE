import { PrismaClient } from './src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  try {
    const firstUser = await prisma.users.findFirst();
    console.log('✅ Koneksi DB sukses:', firstUser);
  } catch (err) {
    console.error('❌ Koneksi DB gagal:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
