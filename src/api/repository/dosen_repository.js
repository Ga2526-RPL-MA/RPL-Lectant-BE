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
      // Query kelas berdasarkan dosen_id dengan join mata_kuliah
      const kelas = await prisma.kelas.findMany({
        where: {
          id_dosen: BigInt(dosenId)
        },
        include: {
          mata_kuliah: {
            select: {
              kode_mk: true,
              nama_mk: true,
              jumlah_sks: true
            }
          }
        },
        orderBy: {
          mata_kuliah: {
            kode_mk: 'asc'
          }
        }
      });

      // Transform data untuk response
      return kelas.map(k => ({
        kode_matkul: k.mata_kuliah.kode_mk,
        nama_matkul: k.mata_kuliah.nama_mk,
        sks: k.mata_kuliah.jumlah_sks,
        semester: this.getSemester(), // Helper function untuk semester
      }));
    } catch (error) {
      console.error('Error in DosenRepository.findKelasByDosenId:', error);
      throw error;
    }
  }

async getStatistikDosen(dosenId) {
  try {
    const dosenIdBigInt = BigInt(dosenId);

    const uniqueMatkul = await prisma.kelas.findMany({
      where: { id_dosen: dosenIdBigInt },
      select: { id_mk: true },
      distinct: ['id_mk']
    });
    const totalMatkul = uniqueMatkul.length;

    const jumlahLowongan = await prisma.lowongan.count({
      where: {
        id_dosen: dosenIdBigInt,
        status: 'aktif'
      }
    });

    const uniqueAsisten = await prisma.asistensi.findMany({
      where: {
        status: 'aktif',
        lowongan: { id_dosen: dosenIdBigInt }
      },
      select: { id_mahasiswa: true },
      distinct: ['id_mahasiswa']
    });
    const jumlahAsisten = uniqueAsisten.length;

    return {
      total_matkul: totalMatkul,
      jumlah_lowongan: jumlahLowongan,
      jumlah_asisten: jumlahAsisten
    };

  } catch (error) {
    console.error('Error in DosenRepository.getStatistikDosen:', error);
    throw error;
  }
}

  getSemester() {
    const month = new Date().getMonth() + 1; // 1-12
    // Januari-Juni = Genap, Juli-Desember = Ganjil
    return month >= 1 && month <= 6 ? 'genap' : 'ganjil';
  }

  // Method untuk mendapatkan data dosen berdasarkan user_id
  async findDosenByUserId(userId) {
    try {
      const dosen = await prisma.dosen.findUnique({
        where: {
          id_user: userId
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
