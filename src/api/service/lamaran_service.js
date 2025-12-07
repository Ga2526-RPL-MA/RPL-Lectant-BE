import LamaranRepository from '../repository/lamaran_repository.js';
import userRepository from '../repository/user_repository.js';

class LamaranService {
  constructor() {
    this.lamaranRepository = LamaranRepository;
    this.userRepository = userRepository;
  }

    formatTanggal(tanggal) {
    const date = new Date(tanggal);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

    async getLamaranSayaWithDetails(userId) {
    try {
        const user = await this.userRepository.findUserById(userId);
        if (!user) {
        throw new Error('User tidak ditemukan');
        }

        const lamaranList = await this.lamaranRepository.findByMahasiswaIdWithDetails(userId);
      
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
}

export default new LamaranService();