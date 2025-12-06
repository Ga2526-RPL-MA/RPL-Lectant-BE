import LamaranRepository from '../repository/lamaran_repository.js';
import userRepository from '../repository/user_repository.js';

class LamaranService {
  constructor() {
    this.lamaranRepository = LamaranRepository;
    this.userRepository = userRepository;
  }

    async validateMahasiswaProfile(userId) {
    try {
      // Cek apakah user ada dan role mahasiswa
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      if (user.role !== 'mahasiswa') {
        throw new Error('Hanya mahasiswa yang dapat membuat lamaran');
      }

      // Cek kelengkapan profil
      const profileCheck = await this.checkMahasiswaProfileComplete(userId);
      
      if (!profileCheck.isComplete) {
        const missingFieldsStr = profileCheck.missingFields.join(', ');
        throw new Error(`Profil Anda belum lengkap. Silakan lengkapi data berikut di halaman profil: ${missingFieldsStr}`);
      }

      return {
        isValid: true,
        message: 'Profil mahasiswa valid dan lengkap'
      };
    } catch (error) {
      console.error('Error in validateMahasiswaProfile:', error);
      throw error;
    }
  }

    async checkMahasiswaProfileComplete(userId) {
    try {
      // Dapatkan data mahasiswa lengkap dari database
      const mahasiswaData = await this.getMahasiswaDataFromDB(userId);
      
      if (!mahasiswaData) {
        return {
          isComplete: false,
          missingFields: ['Data profil mahasiswa tidak ditemukan'],
          completionPercentage: 0
        };
      }

      // ✅ FIELD YANG WAJIB DILENGKAPI BERDASARKAN MODEL:
      const requiredFields = [
        { 
          field: 'nama', 
          label: 'Nama Lengkap', 
          validate: (value) => value && value.trim().length > 0 
        },
        { 
          field: 'nrp', 
          label: 'NRP', 
          validate: (value) => value && value.trim().length > 0 
        },
        { 
          field: 'email', 
          label: 'Email', 
          validate: (value) => value && value.trim().length > 0 
        },
        { 
          field: 'no_telepon', 
          label: 'Nomor Telepon', 
          validate: (value) => value && value.trim().length > 0 
        },
        { 
          field: 'jurusan', 
          label: 'Jurusan', 
          validate: (value) => value && value.trim().length > 0 
        },
        { 
          field: 'angkatan', 
          label: 'Angkatan', 
          validate: (value) => value && value.trim().length > 0 
        },
        { 
          field: 'semester', 
          label: 'Semester', 
          validate: (value) => value !== null && value !== undefined && value > 0 
        }
      ];

      const missingFields = [];

      // Cek field wajib
      requiredFields.forEach(({ field, label, validate }) => {
        const value = mahasiswaData[field];
        
        if (!validate(value)) {
          missingFields.push(label);
        }
      });

      // Hitung persentase kelengkapan
      const completionPercentage = Math.round(
        ((requiredFields.length - missingFields.length) / requiredFields.length) * 100
      );

      return {
        isComplete: missingFields.length === 0,
        missingFields,
        completionPercentage,
        totalFields: requiredFields.length,
        filledFields: requiredFields.length - missingFields.length
      };

    } catch (error) {
      console.error('Error in checkMahasiswaProfileComplete:', error);
      return {
        isComplete: false,
        missingFields: ['Terjadi kesalahan saat memeriksa profil'],
        completionPercentage: 0
      };
    }
  }

    async getMahasiswaDataFromDB(userId) {
    try {
      const { PrismaClient } = await import('@prisma/client');
      const prisma = new PrismaClient();

      const mahasiswa = await prisma.mahasiswa.findUnique({
        where: { id_user: userId },
        select: {
          id_user: true,
          nrp: true,
          nama: true,
          email: true,
          no_telepon: true,
          jurusan: true,
          angkatan: true,
          semester: true,
          dokumen_url: true
        }
      });

      return mahasiswa;
    } catch (error) {
      console.error('Error in getMahasiswaDataFromDB:', error);
      return null;
    }
  }

  async createLamaran(userId, lamaranData) {
    const { id_lowongan, motivasi, file_berkas } = lamaranData;

    await this.validateMahasiswaProfile(userId);

    // Validasi user
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User tidak ditemukan');
    }

    // Hanya mahasiswa yang bisa membuat lamaran
    if (user.role !== 'mahasiswa') {
      throw new Error('Hanya mahasiswa yang dapat membuat lamaran');
    }

    // Validasi required fields
    if (!id_lowongan) {
      throw new Error('ID lowongan wajib diisi');
    }

    if (!motivasi || motivasi.trim() === '') {
      throw new Error('Motivasi wajib diisi');
    }

    // Validasi panjang motivasi
    if (motivasi.length > 1000) {
      throw new Error('Motivasi maksimal 1000 karakter');
    }

    // Validasi file jika ada
    if (file_berkas) {
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
      const fileExtension = file_berkas.substring(file_berkas.lastIndexOf('.')).toLowerCase();
      
      if (!allowedExtensions.includes(fileExtension)) {
        throw new Error('Format file tidak didukung. Gunakan: PDF, DOC, DOCX, JPG, PNG');
      }
    }

    try {
      // Buat lamaran
      const lamaran = await this.lamaranRepository.create({
        id_lowongan: parseInt(id_lowongan),
        id_mahasiswa: userId,
        motivasi: motivasi.trim(),
        file_berkas: file_berkas || null
      });

      return {
        success: true,
        data: lamaran,
        message: 'Lamaran berhasil dikirim'
      };
    } catch (error) {
      console.error('Error in LamaranService.createLamaran:', error);
      
      if (error.message.includes('Lowongan tidak ditemukan')) {
        throw new Error('Lowongan tidak ditemukan');
      }
      if (error.message.includes('Lowongan tidak aktif')) {
        throw new Error('Lowongan tidak aktif');
      }
      if (error.message.includes('Pendaftaran sudah ditutup')) {
        throw new Error('Pendaftaran sudah ditutup');
      }
      if (error.message.includes('Anda sudah mendaftar')) {
        throw new Error('Anda sudah mendaftar di lowongan ini');
      }
      
      throw new Error('Gagal membuat lamaran');
    }
  }

  async getLamaranByMahasiswa(userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya mahasiswa yang bisa melihat lamarannya sendiri
      if (user.role !== 'mahasiswa') {
        throw new Error('Hanya mahasiswa yang dapat melihat lamaran');
      }

      const lamaranList = await this.lamaranRepository.findByMahasiswaId(userId);
      
      return {
        success: true,
        data: lamaranList,
        total: lamaranList.length
      };
    } catch (error) {
      console.error('Error in LamaranService.getLamaranByMahasiswa:', error);
      throw new Error('Gagal mendapatkan daftar lamaran');
    }
  }

  async getAllLamaran(userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa melihat semua lamaran
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat melihat semua lamaran');
      }

      const lamaranList = await this.lamaranRepository.findAll();
      
      return {
        success: true,
        data: lamaranList,
        total: lamaranList.length
      };
    } catch (error) {
      console.error('Error in LamaranService.getAllLamaran:', error);
      throw new Error('Gagal mendapatkan semua lamaran');
    }
  }

  async getLamaranById(id_pendaftaran, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      const lamaran = await this.lamaranRepository.findById(parseInt(id_pendaftaran));
      
      if (!lamaran) {
        throw new Error('Lamaran tidak ditemukan');
      }

      // Mahasiswa hanya bisa melihat lamarannya sendiri
      if (user.role === 'mahasiswa' && lamaran.id_mahasiswa !== userId) {
        throw new Error('Unauthorized: Anda tidak memiliki akses ke lamaran ini');
      }

      return {
        success: true,
        data: lamaran
      };
    } catch (error) {
      console.error('Error in LamaranService.getLamaranById:', error);
      
      if (error.message.includes('tidak ditemukan') || error.message.includes('tidak memiliki akses')) {
        throw error;
      }
      
      throw new Error('Gagal mendapatkan detail lamaran');
    }
  }

  async updateStatus(id_pendaftaran, status_pendaftaran, userId) {
    try {
      // Validasi user
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa update status
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat mengubah status lamaran');
      }

      // Cek lamaran exist
      const lamaran = await this.lamaranRepository.findById(parseInt(id_pendaftaran));
      if (!lamaran) {
        throw new Error('Lamaran tidak ditemukan');
      }

      const updatedLamaran = await this.lamaranRepository.updateStatus(
        parseInt(id_pendaftaran), 
        status_pendaftaran
      );

      return {
        success: true,
        data: updatedLamaran,
        message: `Status lamaran berhasil diubah menjadi ${status_pendaftaran}`
      };
    } catch (error) {
      console.error('Error in LamaranService.updateStatus:', error);
      
      if (error.message.includes('Status tidak valid')) {
        throw new Error('Status tidak valid. Status harus: pending, accepted, atau rejected');
      }
      if (error.message.includes('tidak ditemukan') || error.message.includes('Unauthorized')) {
        throw error;
      }
      
      throw new Error('Gagal mengubah status lamaran');
    }
  }

  async getLamaranByStatus(status_pendaftaran, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa melihat lamaran berdasarkan status
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat melihat lamaran berdasarkan status');
      }

      const lamaranList = await this.lamaranRepository.findByStatus(status_pendaftaran);
      
      return {
        success: true,
        data: lamaranList,
        total: lamaranList.length,
        status: status_pendaftaran
      };
    } catch (error) {
      console.error('Error in LamaranService.getLamaranByStatus:', error);
      
      if (error.message.includes('Status tidak valid')) {
        throw new Error('Status tidak valid. Status harus: pending, accepted, atau rejected');
      }
      if (error.message.includes('Unauthorized')) {
        throw error;
      }
      
      throw new Error('Gagal mendapatkan lamaran berdasarkan status');
    }
  }

  async getLamaranByLowongan(id_lowongan, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa melihat lamaran per lowongan
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat melihat lamaran per lowongan');
      }

      const lamaranList = await this.lamaranRepository.findByLowonganId(parseInt(id_lowongan));
      
      return {
        success: true,
        data: lamaranList,
        total: lamaranList.length,
        id_lowongan: parseInt(id_lowongan)
      };
    } catch (error) {
      console.error('Error in LamaranService.getLamaranByLowongan:', error);
      
      if (error.message.includes('Unauthorized')) {
        throw error;
      }
      
      throw new Error('Gagal mendapatkan lamaran berdasarkan lowongan');
    }
  }

  async deleteLamaran(id_pendaftaran, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      const lamaran = await this.lamaranRepository.findById(parseInt(id_pendaftaran));
      if (!lamaran) {
        throw new Error('Lamaran tidak ditemukan');
      }

      // Mahasiswa hanya bisa menghapus lamarannya sendiri
      // Dosen bisa menghapus lamaran apapun
      if (user.role === 'mahasiswa' && lamaran.id_mahasiswa !== userId) {
        throw new Error('Unauthorized: Anda tidak memiliki akses untuk menghapus lamaran ini');
      }

      await this.lamaranRepository.delete(parseInt(id_pendaftaran));

      return {
        success: true,
        message: 'Lamaran berhasil dihapus'
      };
    } catch (error) {
      console.error('Error in LamaranService.deleteLamaran:', error);
      
      if (error.message.includes('tidak ditemukan') || error.message.includes('Unauthorized')) {
        throw error;
      }
      
      throw new Error('Gagal menghapus lamaran');
    }
  }

  async updateLamaran(id_pendaftaran, updateData, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      const lamaran = await this.lamaranRepository.findById(parseInt(id_pendaftaran));
      if (!lamaran) {
        throw new Error('Lamaran tidak ditemukan');
      }

      // Hanya mahasiswa yang membuat lamaran yang bisa mengupdate
      if (lamaran.id_mahasiswa !== userId) {
        throw new Error('Unauthorized: Anda tidak memiliki akses untuk mengubah lamaran ini');
      }

      // Tidak bisa update jika sudah diterima/ditolak
      if (lamaran.status_pendaftaran !== 'pending') {
        throw new Error('Tidak dapat mengubah lamaran yang sudah diproses');
      }

      // Validasi data yang diupdate
      const { motivasi, file_berkas } = updateData;
      const updatePayload = {};

      if (motivasi !== undefined) {
        if (!motivasi || motivasi.trim() === '') {
          throw new Error('Motivasi tidak boleh kosong');
        }
        if (motivasi.length > 1000) {
          throw new Error('Motivasi maksimal 1000 karakter');
        }
        updatePayload.motivasi = motivasi.trim();
      }

      if (file_berkas !== undefined) {
        if (file_berkas) {
          const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
          const fileExtension = file_berkas.substring(file_berkas.lastIndexOf('.')).toLowerCase();
          
          if (!allowedExtensions.includes(fileExtension)) {
            throw new Error('Format file tidak didukung');
          }
        }
        updatePayload.file_berkas = file_berkas;
      }

      // Jika tidak ada yang diupdate
      if (Object.keys(updatePayload).length === 0) {
        throw new Error('Tidak ada data yang diupdate');
      }

      const updatedLamaran = await this.lamaranRepository.updatePendaftaran(
        parseInt(id_pendaftaran), 
        updatePayload
      );

      return {
        success: true,
        data: updatedLamaran,
        message: 'Lamaran berhasil diperbarui'
      };
    } catch (error) {
      console.error('Error in LamaranService.updateLamaran:', error);
      
      if (error.message.includes('tidak ditemukan') || 
          error.message.includes('Unauthorized') ||
          error.message.includes('tidak dapat mengubah') ||
          error.message.includes('Motivasi') ||
          error.message.includes('Format file') ||
          error.message.includes('Tidak ada data')) {
        throw error;
      }
      
      throw new Error('Gagal mengupdate lamaran');
    }
  }

  async getStatistikByMahasiswa(userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya mahasiswa yang bisa melihat statistiknya sendiri
      if (user.role !== 'mahasiswa') {
        throw new Error('Hanya mahasiswa yang dapat melihat statistik lamaran');
      }

      const statistik = await this.lamaranRepository.getStatistikByMahasiswa(userId);
      
      return {
        success: true,
        data: statistik,
        message: 'Statistik lamaran berhasil diambil'
      };
    } catch (error) {
      console.error('Error in LamaranService.getStatistikByMahasiswa:', error);
      
      if (error.message.includes('Hanya mahasiswa')) {
        throw error;
      }
      
      throw new Error('Gagal mendapatkan statistik lamaran');
    }
  }

  async getStatistikByLowongan(id_lowongan, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa melihat statistik lowongan
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat melihat statistik lowongan');
      }

      const statistik = await this.lamaranRepository.getStatistikByLowongan(parseInt(id_lowongan));
      
      return {
        success: true,
        data: statistik,
        id_lowongan: parseInt(id_lowongan),
        message: 'Statistik lowongan berhasil diambil'
      };
    } catch (error) {
      console.error('Error in LamaranService.getStatistikByLowongan:', error);
      
      if (error.message.includes('Unauthorized')) {
        throw error;
      }
      
      throw new Error('Gagal mendapatkan statistik lowongan');
    }
  }

  async searchLamaran(searchQuery, userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa search
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat melakukan pencarian');
      }

      if (!searchQuery || searchQuery.trim() === '') {
        throw new Error('Query pencarian tidak boleh kosong');
      }

      const results = await this.lamaranRepository.searchByMahasiswaNama(searchQuery.trim());
      
      return {
        success: true,
        data: results,
        total: results.length,
        query: searchQuery.trim()
      };
    } catch (error) {
      console.error('Error in LamaranService.searchLamaran:', error);
      
      if (error.message.includes('Unauthorized') || error.message.includes('Query pencarian')) {
        throw error;
      }
      
      throw new Error('Gagal melakukan pencarian');
    }
  }

  async getLamaranWithPagination(userId, skip = 0, take = 10, filters = {}) {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      // Hanya dosen yang bisa menggunakan pagination
      if (user.role !== 'dosen') {
        throw new Error('Unauthorized: Hanya dosen yang dapat menggunakan fitur pagination');
      }

      const results = await this.lamaranRepository.findWithPagination(skip, take, filters);
      
      return {
        success: true,
        data: results,
        pagination: {
          skip,
          take,
          hasMore: results.length === take
        }
      };
    } catch (error) {
      console.error('Error in LamaranService.getLamaranWithPagination:', error);
      
      if (error.message.includes('Unauthorized') || error.message.includes('Status tidak valid')) {
        throw error;
      }
      
      throw new Error('Gagal mendapatkan data lamaran');
    }
  }
}

export default new LamaranService();