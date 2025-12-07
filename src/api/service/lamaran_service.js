
import LamaranRepository from '../repository/lamaran_repository.js';
import userRepository from '../repository/user_repository.js';

class LamaranService {
  constructor() {
    this.lamaranRepository = LamaranRepository;
    this.userRepository = userRepository;
  }
  async getDetailLamaran(idLamaran, userId) {
    try {
      const lamaran = await this.lamaranRepository.findByIdWithFullDetails(parseInt(idLamaran));
      
      if (!lamaran) {
        throw new Error('Lamaran tidak ditemukan');
      }

      const user = await this.userRepository.findUserById(userId);
      if (user.role === 'mahasiswa' && lamaran.id_mahasiswa !== BigInt(userId)) {
        throw new Error('Anda tidak memiliki akses ke lamaran ini');
      }

      const mataKuliah = lamaran.lowongan?.kelas?.mata_kuliah?.nama_mk || 'Tidak ada mata kuliah';
      const kodeMK = lamaran.lowongan?.kelas?.mata_kuliah?.kode_mk || '';
      const namaKelas = lamaran.lowongan?.kelas?.nama_kelas || '';
      
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

      const lokasi = lamaran.lowongan?.kelas?.lokasi || 'Teknik Informatika';

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