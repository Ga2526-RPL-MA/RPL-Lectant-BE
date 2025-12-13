import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class KelasRepository {
  async getAllKelas() {
    return await prisma.kelas.findMany({
      include: {
        mata_kuliah: true,
        dosen: { select: { nama: true } }
      }
    });
  }

  async getAllMataKuliah() {
    return await prisma.mata_kuliah.findMany({
        include: {
            kelas: true
        }
    });
  }
}

export default KelasRepository;