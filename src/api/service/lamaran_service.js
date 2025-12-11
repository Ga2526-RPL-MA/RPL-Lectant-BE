
import LamaranRepository from '../repository/lamaran_repository.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LamaranService {
  constructor() {
    this.lamaranRepository = LamaranRepository;
  }

  async createLamaran(userId, lamaranData) {
    const { id_lowongan, motivasi } = lamaranData;

    
    const mahasiswaProfile = await this.validateMahasiswaProfile(userId);

    
    if (!id_lowongan) {
      throw new Error('ID lowongan wajib diisi');
    }

    if (!motivasi || motivasi.trim() === '') {
      throw new Error('Motivasi wajib diisi');
    }

    
    if (motivasi.length > 1000) {
      throw new Error('Motivasi maksimal 1000 karakter');
    }

    try {
      
      const file_berkas = mahasiswaProfile.dokumen_url;

      
      const lamaran = await this.lamaranRepository.create({
        id_lowongan: parseInt(id_lowongan),
        id_mahasiswa: BigInt(userId),
        motivasi: motivasi.trim(),
        file_berkas: file_berkas
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
      if (error.message.includes('Pendaftaran belum dibuka')) {
        throw new Error('Pendaftaran belum dibuka');
      }
      if (error.message.includes('Anda sudah mendaftar')) {
        throw new Error('Anda sudah mendaftar di lowongan ini');
      }
      
      throw new Error('Gagal membuat lamaran');
    }
  }

  async validateMahasiswaProfile(userId) {
    try {
      
      const mahasiswa = await prisma.mahasiswa.findUnique({
        where: { id_user: BigInt(userId) },
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

      if (!mahasiswa) {
        throw new Error('Data mahasiswa tidak ditemukan');
      }

      
      const requiredFields = [
        { field: 'nama', label: 'Nama Lengkap' },
        { field: 'nrp', label: 'NRP' },
        { field: 'email', label: 'Email' },
        { field: 'no_telepon', label: 'Nomor Telepon' },
        { field: 'jurusan', label: 'Jurusan' },
        { field: 'angkatan', label: 'Angkatan' },
        { field: 'semester', label: 'Semester' },
        { field: 'dokumen_url', label: 'Dokumen (CV/Transkrip)' }
      ];

      const missingFields = [];

      requiredFields.forEach(({ field, label }) => {
        const value = mahasiswa[field];
        
        if (field === 'semester') {
          if (value === null || value === undefined || value <= 0) {
            missingFields.push(label);
          }
        } else {
          if (!value || (typeof value === 'string' && value.trim() === '')) {
            missingFields.push(label);
          }
        }
      });
      
      if (missingFields.length > 0) {
        const missingFieldsStr = missingFields.join(', ');
        throw new Error(`Profil Anda belum lengkap. Silakan lengkapi data berikut di halaman profil: ${missingFieldsStr}`);
      }
      
      if (!mahasiswa.dokumen_url || mahasiswa.dokumen_url.trim() === '') {
        throw new Error('Dokumen belum diupload. Silakan upload CV/Transkrip di halaman profil terlebih dahulu.');
      }

      return mahasiswa;
    } catch (error) {
      console.error('Error in validateMahasiswaProfile:', error);
      throw error;
    }
  }

  async getLamaranSayaWithDetails(userId) {
    try {
      
      const user = await prisma.users.findUnique({
        where: { id_user: BigInt(userId) }
      });

      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      const lamaranList = await this.lamaranRepository.findByMahasiswaIdWithDetails(BigInt(userId));
      
      const formattedData = lamaranList.map(lamaran => {
        let messageStatus = '';
        
        if (lamaran.status_pendaftaran === 'pending') {
          messageStatus = 'Lamaran Anda sedang dalam proses review. Harap tunggu konfirmasi dari dosen';
        } else if (lamaran.status_pendaftaran === 'accepted') {
          messageStatus = 'Selamat! Lamaran Anda telah diterima. Dosen akan menghubungi Anda segera.';
        } else if (lamaran.status_pendaftaran === 'rejected') {
          messageStatus = 'Maaf, lamaran Anda belum dapat kami terima saat ini. Tetap semangat mencari lowongan lain!';
        }

        const namaMataKuliah = lamaran.lowongan?.kelas?.mata_kuliah?.nama_mk || 'Tidak ada mata kuliah';
        const kodeMataKuliah = lamaran.lowongan?.kelas?.mata_kuliah?.kode_mk || '';
        const namaKelas = lamaran.lowongan?.kelas?.nama_kelas || '';
        
        let displayMatkul = namaMataKuliah;
        
        if (kodeMataKuliah && namaKelas) {
          displayMatkul = `${kodeMataKuliah} - ${namaMataKuliah} (${namaKelas})`;
        } else if (namaKelas) {
          displayMatkul = `${namaMataKuliah} (${namaKelas})`;
        } else if (kodeMataKuliah) {
          displayMatkul = `${kodeMataKuliah} - ${namaMataKuliah}`;
        }

        return {
          matkul: displayMatkul,
          dosen: lamaran.lowongan?.dosen?.nama || 'Tidak ada dosen',
          tanggal_melamar: this.formatTanggal(lamaran.tanggal_daftar),
          status: lamaran.status_pendaftaran || 'pending',
          message_status: messageStatus
        };
      });

      return formattedData;
    } catch (error) {
      console.error('Error in LamaranService.getLamaranSayaWithDetails:', error);
      throw error;
    }
  }

  async getDetailLamaran(idLamaran, userId) {
    try {
      const lamaran = await this.lamaranRepository.findByIdWithFullDetails(parseInt(idLamaran));
      
      if (!lamaran) {
        throw new Error('Lamaran tidak ditemukan');
      }

      
      const user = await prisma.users.findUnique({
        where: { id_user: BigInt(userId) }
      });

      if (!user) {
        throw new Error('User tidak ditemukan');
      }

      if (user.role === 'mahasiswa' && lamaran.id_mahasiswa !== BigInt(userId)) {
        throw new Error('Anda tidak memiliki akses ke lamaran ini');
      }

      const mataKuliah = lamaran.lowongan?.kelas?.mata_kuliah?.nama_mk || 'Tidak ada mata kuliah';
      const kodeMK = lamaran.lowongan?.kelas?.mata_kuliah?.kode_mk || '';
      
      const displayMatkul = kodeMK ? `${kodeMK} - ${mataKuliah}` : mataKuliah;

      const hari = lamaran.lowongan?.kelas?.hari || '';
      const jamMulai = lamaran.lowongan?.kelas?.jam_mulai 
        ? this.formatTime(lamaran.lowongan.kelas.jam_mulai) 
        : '';
      const jamSelesai = lamaran.lowongan?.kelas?.jam_selesai 
        ? this.formatTime(lamaran.lowongan.kelas.jam_selesai) 
        : '';
      
      const jadwal = (hari && jamMulai && jamSelesai) 
        ? `${hari}, ${jamMulai} - ${jamSelesai}` 
        : 'Jadwal belum ditentukan';

      const jumlahAsisten = lamaran.lowongan?.jumlah_asisten || 0;
      const lokasi = 'Teknik Informatika';
      const deadlinePendaftaran = lamaran.lowongan?.tanggal_akhir_pendaftaran 
        ? this.formatTanggalLengkap(lamaran.lowongan.tanggal_akhir_pendaftaran)
        : 'Tidak ditentukan';
      const persyaratan = lamaran.lowongan?.persyaratan || 'Tidak ada persyaratan khusus';
      const status = this.getStatusDisplay(lamaran.status_pendaftaran);

      return {
        matkul: displayMatkul,
        dosen: lamaran.lowongan?.dosen?.nama || 'Tidak ada dosen',
        jadwal: jadwal,
        jumlah_asisten_dibutuhkan: jumlahAsisten,
        lokasi: lokasi,
        deadline_pendaftaran: deadlinePendaftaran,
        persyaratan: persyaratan,
        status: status
      };
    } catch (error) {
      console.error('Error in LamaranService.getDetailLamaran:', error);
      throw error;
    }
  }

  formatTanggal(tanggal) {
    if (!tanggal) return null;
    const date = new Date(tanggal);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  formatTime(time) {
    if (!time) return '';
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  formatTanggalLengkap(tanggal) {
    if (!tanggal) return null;
    const date = new Date(tanggal);
    const options = { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('id-ID', options);
  }

  getStatusDisplay(status) {
    const statusMap = {
      'pending': 'Pending',
      'accepted': 'Diterima',
      'rejected': 'Ditolak'
    };
    return statusMap[status] || status;
  }
}

export default new LamaranService();