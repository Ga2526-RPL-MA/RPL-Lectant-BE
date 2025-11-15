as a system arcytect terbaik review sqlku apakah sesuai dengan user story dan best practice : -- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.berkas (
  id_berkas integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_pendaftaran integer NOT NULL,
  nama_file character varying,
  path_file character varying,
  tipe_berkas USER-DEFINED,
  tanggal_upload timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT berkas_pkey PRIMARY KEY (id_berkas),
  CONSTRAINT berkas_id_pendaftaran_fkey FOREIGN KEY (id_pendaftaran) REFERENCES public.pendaftaran(id_pendaftaran)
);
CREATE TABLE public.dosen (
  id_user bigint NOT NULL,
  nip character varying,
  nama character varying,
  email character varying,
  no_telepon character varying,
  jurusan character varying,
  CONSTRAINT dosen_pkey PRIMARY KEY (id_user),
  CONSTRAINT dosen_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id_user)
);
CREATE TABLE public.kelas (
  id_kelas integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_mk integer NOT NULL,
  nama_kelas character varying,
  hari character varying,
  jam_mulai time without time zone,
  jam_selesai time without time zone,
  CONSTRAINT kelas_pkey PRIMARY KEY (id_kelas),
  CONSTRAINT kelas_id_mk_fkey FOREIGN KEY (id_mk) REFERENCES public.mata_kuliah(id_mk)
);
CREATE TABLE public.lowongan (
  id_lowongan integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_kelas integer NOT NULL,
  id_dosen bigint NOT NULL,
  tahun_ajaran character varying,
  jumlah_asisten integer,
  persyaratan text,
  honor numeric,
  tanggal_mulai_pendaftaran timestamp without time zone,
  tanggal_akhir_pendaftaran timestamp without time zone,
  tanggal_mulai_kontrak timestamp without time zone,
  tanggal_akhir_kontrak timestamp without time zone,
  CONSTRAINT lowongan_pkey PRIMARY KEY (id_lowongan),
  CONSTRAINT lowongan_id_kelas_fkey FOREIGN KEY (id_kelas) REFERENCES public.kelas(id_kelas),
  CONSTRAINT lowongan_id_dosen_fkey FOREIGN KEY (id_dosen) REFERENCES public.dosen(id_user)
);
CREATE TABLE public.mahasiswa (
  id_user bigint NOT NULL,
  nrp character varying,
  nama character varying,
  email character varying,
  no_telepon character varying,
  jurusan character varying,
  angkatan character varying,
  semester integer,
  CONSTRAINT mahasiswa_pkey PRIMARY KEY (id_user),
  CONSTRAINT mahasiswa_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id_user)
);
CREATE TABLE public.mata_kuliah (
  id_mk integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  kode_mk character varying,
  nama_mk character varying,
  jumlah_sks integer,
  CONSTRAINT mata_kuliah_pkey PRIMARY KEY (id_mk)
);
CREATE TABLE public.notifikasi (
  id_notifikasi integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_lowongan integer,
  id_mahasiswa bigint,
  channel USER-DEFINED NOT NULL DEFAULT 'website'::notifikasi_channel_enum,
  isi_pesan text,
  tanggal_kirim timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT notifikasi_pkey PRIMARY KEY (id_notifikasi),
  CONSTRAINT notifikasi_id_lowongan_fkey FOREIGN KEY (id_lowongan) REFERENCES public.lowongan(id_lowongan),
  CONSTRAINT notifikasi_id_mahasiswa_fkey FOREIGN KEY (id_mahasiswa) REFERENCES public.mahasiswa(id_user)
);
CREATE TABLE public.pendaftaran (
  id_pendaftaran integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_lowongan integer NOT NULL,
  id_mahasiswa bigint NOT NULL,
  status_pendaftaran USER-DEFINED DEFAULT 'pending'::status_pendaftaran_enum,
  tanggal_daftar timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT pendaftaran_pkey PRIMARY KEY (id_pendaftaran),
  CONSTRAINT pendaftaran_id_lowongan_fkey FOREIGN KEY (id_lowongan) REFERENCES public.lowongan(id_lowongan),
  CONSTRAINT pendaftaran_id_mahasiswa_fkey FOREIGN KEY (id_mahasiswa) REFERENCES public.mahasiswa(id_user)
);
CREATE TABLE public.users (
  id_user bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  email character varying NOT NULL UNIQUE,
  password_hash text NOT NULL,
  role USER-DEFINED NOT NULL DEFAULT 'mahasiswa'::user_role_enum,
  created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT users_pkey PRIMARY KEY (id_user)
); User Stories : 
Pak Bulan adalah seorang dosen di Teknik Informatika ITS. Pak Bulan ingin mencari asisten untuk mata kuliah Dasar Pemrograman kelas M. Pak Bintang login ke RPL-Lectant dan masuk ke halaman utama. Pak Bulan dapat melihat daftar kelas yang sedang membuka perekrutan asisten di halaman utama. Pak Bulan juga dapat melihat data asisten dosen dari seluruh kelas di Informatika. Pak Bulan lalu menambahkan lowongan pendaftaran asisten dan mengisi detail berisi nama mata kuliah, nama kelas, tahun ajaran, jumlah SKS, jadwal kelas, rentang tanggal kontrak, jumlah asisten, persyaratan, honor, dan rentang tanggal pendaftaran. Setelah ditambahkan, Pak Bulan lalu melihat berkas pendaftar pada lowongan tersebut. Pak Bulan dapat melihat detail data dari pendaftar mulai dari nama, NRP, angkatan, semester, dan daftar kelas yang diasisteni oleh mahasiswa tersebut. Pak Bulan lalu memilih mahasiswa yang akan lolos sebagai asisten dan mengubah status mahasiswa tersebut menjadi diterima. Pak Bulan lalu menunggu pesan konfirmasi dari mahasiswa yang diterima melalui Whatsapp.

Adel adalah seorang mahasiswa Teknik Informatika ITS semester 3. Adel ingin mengisi waktu kuliahnya dengan kegiatan-kegiatan di kampus. Adel ingin menjadi asisten dosen. Adel masuk ke website RPL-Lectant untuk melihat informasi asisten dosen. Adel mampu melihat informasi kelas apa saja yang membuka pendaftaran di halaman awal. Adel lalu mendaftar ke kelas Dasar Pemrograman kelas M. Adel mengisi form pendaftaran dan mengupload berkas pendukung. Setelah mengirim form pendaftaran, Adel menunggu proses verifikasi dari dosen. Selama menunggu proses verifikasi, Adel dapat memantau status pendaftarannya. Adel mampu mendaftar ke banyak lowongan asisten tetapi hanya mampu menjadi asisten dosen maksimal di 3 kelas sekaligus. Setelah di acc oleh dosen, Adel menerima email berisi ucapan selamat dan arahan untuk menghubungi no dosen beserta no telponnya. Adel menerima floater mengarah email. Adel melihat status verifikasi pendaftaran pada website RPL-Lectant menjadi accepted dan mendapat arahan untuk mengecek email. Adel lalu menghubungi dosen melalui no telpon yang tertera pada email.

