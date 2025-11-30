import prisma from "../../config/prisma.js";

class DosenRepository {

  // CREATE profil dosen
  async createDosen(data) {
    return await prisma.dosen.create({
      data,
      select: { id_user: true, nama: true, nip: true, email: true, no_telepon: true, jurusan: true },
    });
  };

  // Ambil profil dosen berdasarkan id_user
  async findDosenById(id_user) {
    return await prisma.dosen.findUnique({
      where: { id_user: Number(id_user) },
      select: { id_user: true, nama: true, nip: true, email: true, no_telepon: true, jurusan: true },
    });
  };

  // Update profil dosen
  async updateDosen(id_user, data){
    return await prisma.dosen.update({
      where: { id_user: Number(id_user) },
      data,
      select: { id_user: true, nama: true, nip: true, email: true, no_telepon: true, jurusan: true },
    });
  };

  async findKelasByDosenId(dosenId) {
   try {
      const kelas = await prisma.kelas.findMany({
         where: {
          id_dosen: BigInt(dosenId) // pastikan tipe BigInt sesuai schema
        },
        select: {
          mata_kuliah: {
            select: {
              kode_mk: true,
              nama_mk: true,
              jumlah_sks: true,
            }
          }
        },
        orderBy: {
          id_mk: 'asc'
        }
      });
      console.log(kelas);

      return kelas;
    } catch (error) {
      console.error('Error in DosenRepository.findKelasByDosenId:', error);
      throw error;
    }
  }

  async findDosenByUserId(userId) {
    try {
      const dosen = await prisma.dosen.findUnique({
        where: {
          id_user: userId  //first: (user_id) is changed to (id_user) to match prisma schema (delete this comment if dev is done)
        },
        include: {
          user: {
            select: {
              email: true,
              role: true
            }
          }
        }
      });

      return dosen;
    } catch (error) {
      console.error('Error in DosenRepository.findDosenByUserId:', error);
      throw error;
    }
  }
}

export default DosenRepository;
