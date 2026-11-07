// ==========================================================
// DATA PELATIHAN LCC KARADENAN
// ==========================================================

const COURSES = [

    {
        id: "bahasa-jepang",

        name: "Bahasa Jepang",

        desc:
            "Mempelajari dasar bahasa Jepang untuk komunikasi sehari-hari.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        tag: "Populer",

        img:
            "lms.jpg/pl (24).jpeg"
    },


    {
        id: "digital-marketing",

        name: "Digital Marketing",

        desc:
            "Mempelajari strategi pemasaran menggunakan media dan teknologi digital.",

        price: 3000000,

        duration: "2 Bulan",

        level: "Pemula",

        tag: "Baru",

        img:
            "lms.jpg/pl (29).jpeg"
    },


    {
        id: "english-for-customer-service",

        name: "English For Customer Service",

        desc:
            "Mempelajari bahasa Inggris untuk melayani dan berkomunikasi dengan pelanggan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (30).jpeg"
    },


    {
        id: "desain-grafis",

        name: "Desain Grafis",

        desc:
            "Pelajari dasar desain grafis untuk kebutuhan digital dan promosi.",

        price: 3000000,

        duration: "2 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (27).jpeg"
    },


    {
        id: "english-for-front-office",

        name: "English For Front Office",

        desc:
            "Mempelajari bahasa Inggris untuk komunikasi di bagian front office.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (31).jpeg"
    },


    {
        id: "english-for-office-administration",

        name: "English For Office Administration",

        desc:
            "Mempelajari bahasa Inggris yang digunakan dalam pekerjaan administrasi perkantoran.",

        price: 3000000,

        duration: "2 Bulan",

        level: "Pemula",

        tag: "Baru",

        img:
            "lms.jpg/pl (32).jpeg"
    },

    {
        id: "english-for-receptionist",

        name: "English For Receptionist",

        desc:
            "Mempelajari bahasa Inggris untuk kebutuhan pekerjaan sebagai resepsionis.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (33).jpeg"
    },

    {
        id: "english-for-tourism",

        name: "English For Tourism",

        desc:
            "Mempelajari bahasa Inggris untuk kebutuhan pariwisata dan perjalanan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (34).jpeg"
    },

    {
        id: "english-hotel-staff",

        name: "English Hotel Staff",

        desc:
            "Mempelajari bahasa Inggris yang digunakan dalam pelayanan hotel.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (35).jpeg"
    },

    {
        id: "english-conversation",

        name: "English Conversation",

        desc:
            "Mempelajari bahasa Inggris untuk percakapan sehari-hari dalam berbagai situasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        tag: "popular",

        img:
            "lms.jpg/pl (36).jpeg"
    },

    {
        id: "optimalisasi-pemasaran",

        name: "Optimalisasi Pemasaran",

        desc:
            "Mempelajari strategi pemasaran produk melalui berbagai media sosial.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (41).jpeg"
    },

    {
        id: "toefl-preparation-class",

        name: "TOEFL Preparation Class",

        desc:
            "Mempersiapkan peserta menghadapi tes TOEFL melalui latihan dan pembahasan soal.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (46).jpeg"
    },

    {
        id: "toeic-preparation-Program",

        name: "TOEIC Preparation Program",

        desc:
            "Mempersiapkan peserta menghadapi tes TOEIC melalui latihan bahasa Inggris.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (47).jpeg"
    },

    {
        id: "ms-office",

        name: "Ms Office",

        desc:
            "Mempelajari penggunaan Microsoft Word, Excel, dan PowerPoint untuk kebutuhan kerja dan administrasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (38).jpeg"
    },

    {
        id: "general english",

        name: "General English",

        desc:
            "Pelatihan yang mempelajari dasar-dasar bahasa Inggris untuk meningkatkan kemampuan berbicara, mendengarkan, membaca, dan menulis dalam kehidupan sehari-hari.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        tag: "popular",

        img:
            "lms.jpg/pl (37).jpeg"
    },

    {
        id: "content creator",

        name: "Content Creator",

        desc:
            "Membekali peserta dengan keterampilan membuat konten kreatif dan menarik untuk media sosial, mulai dari mencari ide, membuat naskah, mengambil gambar, hingga mengedit dan mempublikasikan konten digital.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        tag: "popular",

        img:
            "lms.jpg/pl (25).jpeg"
    },

    {
        id: "autocad",

        name: "Autocad",

        desc:
            "Membantu peserta mempelajari teknik menggambar desain 2D dan 3D secara digital dengan presisi, mulai dari dasar hingga pembuatan gambar teknik untuk kebutuhan arsitektur, konstruksi, dan desain profesional.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (23).jpeg"
    },

    {
        id: "public speaking",

        name: "Public Speaking",

        desc:
            "Pelatihan yang membantu peserta meningkatkan kepercayaan diri, kemampuan berbicara di depan umum, menyampaikan ide dengan jelas, serta berkomunikasi secara efektif dan profesional.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (42).jpeg"
    },

    {
        id: "operator komputer muda",

        name: "Operator Komputer Muda",

        desc:
            "Pelatihan yang membekali peserta dengan keterampilan dasar pengoperasian komputer, penggunaan Microsoft Office, pengelolaan dokumen, pengolahan data, serta administrasi digital.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (40).jpeg"
    },

    {
        id: "teknisi audio video",

        name: "Teknisi Audio Video",

        desc:
            "Membantu peserta memahami pengoperasian, instalasi, perawatan, dan perbaikan peralatan audio visual, seperti kamera, mikrofon, speaker, mixer, dan proyektor untuk mendukung kebutuhan acara maupun industri kreatif.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (45).jpeg"
    },

    {
        id: "sosial media officer",

        name: "Sosial Media Officer",

        desc:
            "Mengelola akun media sosial secara profesional, mulai dari perencanaan konten, penjadwalan posting, interaksi dengan audiens, hingga analisis performa media sosial untuk meningkatkan jangkauan dan membangun citra merek.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (44).jpeg"
    },

    {
        id: "asisten teknisi service ac",

        name: "Asisten Teknisi Service AC",

        desc:
            "keterampilan dasar dalam pemasangan, perawatan, dan pemeriksaan AC, termasuk membersihkan filter, mengenali komponen, serta membantu proses perbaikan dan pengecekan gangguan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (22).jpeg"
    },

    {
        id: "desain komunikasi visual",

        name: "Desain Komunikasi Visual",

        desc:
            "Keterampilan desain grafis, pemilihan warna, tipografi, ilustrasi, dan tata letak untuk menghasilkan karya visual yang kreatif, menarik, serta efektif dalam menyampaikan pesan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (28).jpeg"
    },

    {
        id: "multimedia",

        name: "Multimedia",

        desc:
            "Keterampilan mengolah konten digital, mulai dari desain grafis, editing video dan audio, hingga pembuatan animasi serta produksi karya kreatif untuk berbagai kebutuhan media.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (39).jpeg"
    },

    {
        id: "video editor",

        name: "Video Editor",

        desc:
            "Menguasai teknik penyuntingan video, mulai dari memotong dan menggabungkan klip, menambahkan transisi, efek visual, musik, hingga koreksi warna untuk menghasilkan video yang menarik dan profesional.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (48).jpeg"
    },

    {
        id: "sosial media specialist",

        name: "Sosial Media Specialist",

        desc:
            "kemampuan menyusun strategi konten, mengelola akun media sosial, meningkatkan engagement, serta menganalisis performa konten untuk membangun citra merek dan menjangkau audiens yang lebih luas.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (43).jpeg"
    },

    {
        id: "pelatihan disiplin, etika, dan budaya kerja ASN modern",

        name: "Pelatihan Disiplin, Etika, dan Budaya Kerja ASN Modern",

        desc:
            "Pelatihan yang berfokus pada pembentukan sikap disiplin, integritas, etika profesi, dan budaya kerja yang produktif untuk mendukung kinerja ASN yang profesional.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (1).jpeg"
    },

    {
        id: "pelatihan inovasi layanan & digitalisasi administrasi",

        name: "Pelatihan Inovasi Layanan & Digitalisasi Administrasi",

        desc:
            "Pelatihan yang mendorong peserta mengembangkan inovasi pelayanan serta menerapkan sistem administrasi digital untuk menciptakan proses kerja yang lebih praktis, cepat, akurat, dan efisien.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (2).jpeg"
    },

    {
        id: "pelatihan literasi digital dan keamanan data",

        name: "Pelatihan Literasi Digital dan Keamanan Data",

        desc:
            "Pelatihan yang mendorong peserta mengembangkan inovasi pelayanan serta menerapkan sistem administrasi digital untuk menciptakan proses kerja yang lebih praktis, cepat, akurat, dan efisien.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (3).jpeg"
    },

    {
        id: "pelatihan manajemen & transformasi di era digital",

        name: "Pelatihan Manajemen & Transformasi di Era Digital",

        desc:
            "Pelatihan yang membahas strategi manajemen modern, kepemimpinan adaptif, serta pemanfaatan teknologi untuk menghadapi perubahan dan meningkatkan kinerja organisasi di era digital.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (4).jpeg"
    },

    {
        id: "pelatihan pemanfaatan teknologi informasi",

        name: "Pelatihan Pemanfaatan Teknologi Informasi",

        desc:
            "Pelatihan yang membekali peserta dengan kemampuan memanfaatkan aplikasi, perangkat digital, dan sistem informasi untuk menyederhanakan pekerjaan serta meningkatkan efektivitas pelayanan publik.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (5).jpeg"
    },

    {
        id: "pelatihan etika pelayanan dan komunikasi efektif",

        name: "Pelatihan Etika Pelayanan dan Komunikasi Efektif",

        desc:
            "Pelatihan untuk meningkatkan kemampuan berkomunikasi secara profesional, menerapkan etika pelayanan, menangani keluhan, dan membangun hubungan yang baik dengan masyarakat.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (6).jpeg"
    },

    {
        id: "pelatihan transformasi digital dalam administrasi pemerintahan",

        name: "Pelatihan Transformasi Digital dalam Administrasi Pemerintahan",

        desc:
            "Pelatihan untuk memahami penerapan teknologi digital dalam proses administrasi pemerintahan guna meningkatkan efisiensi kerja, mempercepat pelayanan, dan mendukung tata kelola pemerintahan modern.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (7).jpeg"
    },

    {
        id: "pelatihan komunikasi publik pengelolaan informasi pemerintahan",

        name: "Pelatihan Komunikasi Publik Pengelolaan Informasi Pemerintahan",

        desc:
            "Pelatihan untuk meningkatkan kemampuan ASN dalam menyampaikan informasi pemerintahan secara jelas, akurat, transparan, dan efektif kepada masyarakat melalui berbagai media komunikasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (8).jpeg"
    },

    {
        id: "pelatihan membangun citra positif pemerintah daerah",

        name: "Pelatihan Membangun Citra Positif Pemerintah Daerah",

        desc:
            "Pelatihan yang membahas strategi membangun reputasi dan kepercayaan masyarakat terhadap pemerintah daerah melalui komunikasi yang baik, publikasi positif, dan pengelolaan citra institusi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (9).jpeg"
    },

    {
        id: "pelatihan pelayanan publik prima dan berorientasi pada kepuasan masyarakat",

        name: "Pelatihan Pelayanan Publik Prima dan Berorientasi pada Kepuasan Masyarakat",

        desc:
            "Pelatihan untuk meningkatkan kualitas pelayanan publik yang ramah, cepat, tepat, transparan, dan responsif guna memenuhi kebutuhan serta meningkatkan kepuasan masyarakat.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (10).jpeg"
    },

    {
        id: "pelatihan pelayanan prima bagi ASN",

        name: "Pelatihan Pelayanan Prima Bagi ASN",

        desc:
            "Pelatihan untuk membekali ASN dengan keterampilan memberikan pelayanan profesional, sopan, responsif, dan bertanggung jawab sesuai standar pelayanan yang berlaku.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (11).jpeg"
    },

    {
        id: "pelatihan office skill for junior office operator",

        name: "Pelatihan Office Skill For Junior Office Operator",

        desc:
            "Pelatihan untuk mengembangkan keterampilan dasar perkantoran, termasuk pengolahan dokumen, spreadsheet, presentasi, pengarsipan, dan administrasi kerja secara profesional.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (12).jpeg"
    },

    {
        id: "pelatihan penguatan etos kerja budaya organisasi",

        name: "Pelatihan Penguatan Etos Kerja Budaya Organisasi",

        desc:
            "Pelatihan untuk membangun sikap disiplin, tanggung jawab, integritas, dan profesionalisme dalam menciptakan budaya kerja yang positif dan produktif.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (13).jpeg"
    },

    {
        id: "pelatihan manajemen perubahan kepemimpinan adaptif",

        name: "Pelatihan Manajemen Perubahan Kepemimpinan Adaptif",

        desc:
            "Pelatihan untuk meningkatkan kemampuan dalam mengelola perubahan, mengambil keputusan, dan menerapkan kepemimpinan yang fleksibel dalam menghadapi tantangan organisasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (14).jpeg"
    },

    {
        id: "pelatihan efektivitas komunikasi koordinasi antarbagian",

        name: "Pelatihan Efektivitas Komunikasi Koordinasi Antarbagian",

        desc:
            "Pelatihan untuk meningkatkan kemampuan komunikasi, kerja sama, dan koordinasi antarbagian agar pekerjaan berjalan lebih efektif, terarah, dan efisien.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (15).jpeg"
    },

    {
        id: "pelatihan etika pelayanan komunikasi efektif",

        name: "Pelatihan Etika Pelayanan Komunikasi Efektif",

        desc:
            "Pelatihan untuk Mengembangkan Keterampilan Berkomunikasi secara Profesional, Menerapkan Etika Pelayanan, Menangani Keluhan, dan Membangun Hubungan yang Baik dengan Masyarakat.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (16).jpeg"
    },

    {
        id: "pelatihan inovasi layanan digitalisasi administrasi",

        name: "Pelatihan Inovasi Layanan Digitalisasi Administrasi",

        desc:
            "Pelatihan untuk Mengembangkan Inovasi Pelayanan dan Memanfaatkan Teknologi Digital guna Menyederhanakan Proses Administrasi serta Meningkatkan Kualitas Layanan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (17).jpeg"
    },

    {
        id: "pelatihan bidang kepegawaian perencanaan dan pengembangan karier ASN",

        name: "Pelatihan Bidang Kepegawaian Perencanaan dan Pengembangan Karier ASN",

        desc:
            "Pelatihan ini membekali peserta dengan pengetahuan mengenai pengembangan potensi, pola karier, dan peningkatan profesionalisme ASN untuk mendukung kebutuhan organisasi pemerintahan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (19).jpeg"
    },

    {
        id: "pelatihan peningkatan kompetensi SDM dalam era digital",

        name: "Pelatihan Peningkatan Kompetensi SDM dalam Era Digital",

        desc:
            "meningkatkan kemampuan dan keterampilan sumber daya manusia dalam memanfaatkan teknologi digital untuk mendukung efektivitas dan produktivitas kerja.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (20).jpeg"
    },

    {
        id: "pelatihan operator perkantoran berbasis ai",

        name: "Pelatihan Operator Perkantoran Berbasis AI",

        desc:
            "meningkatkan keterampilan peserta dalam mengelola administrasi dan pekerjaan perkantoran dengan memanfaatkan teknologi Artificial Intelligence (AI).",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl (21).jpeg"
    },

    {
        id: "pelatihan capacity building",

        name: "Pelatihan Capacity Building",

        desc:
            "Pelatihan untuk meningkatkan kapasitas individu dan tim melalui pengembangan keterampilan, kerja sama, komunikasi, kepemimpinan, dan pemecahan masalah guna mencapai kinerja organisasi yang lebih optimal.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (1).jpeg"
    },

    {
        id: "pelatihan data management staff",

        name: "Pelatihan Data Management Staff",

        desc:
            "Pelatihan ini mencakup penggunaan aplikasi pengolah data, pengelolaan database, validasi data, serta penyusunan laporan untuk mendukung efektivitas administrasi dan pengambilan keputusan organisasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (3).jpeg"
    },

    {
        id: "pelatihan pelayanan prima bagi ASN",

        name: "Pelatihan Pelayanan Prima Bagi ASN",

        desc:
            "Pelatihan ini mencakup etika pelayanan, komunikasi efektif, penanganan keluhan masyarakat, serta peningkatan kepuasan publik guna mewujudkan pelayanan pemerintahan yang transparan dan berorientasi pada kebutuhan masyarakat.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (4).jpeg"
    },

    {
        id: "pelatihan peningkatan produktifitas keadministrasian kepegawaian berbasis AI & DM",

        name: "Pelatihan Peningkatan Produktifitas Keadministrasian Kepegawaian Berbasis AI & DM",

        desc:
            "Pelatihan ini bertujuan meningkatkan produktivitas tenaga administrasi kepegawaian melalui pemanfaatan teknologi Artificial Intelligence (AI) dan Data Management.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (5).jpeg"
    },

    {
        id: "pelatihan keadministrasian kepegawaian berbasis AI & peningkatan kompetensi office dalam keadministrasian",

        name: "Pelatihan Keadministrasian Kepegawaian Berbasis AI & Peningkatan Kompetensi Office dalam Keadministrasian",

        desc:
            "Materi mencakup pengolahan dokumen, penggunaan Microsoft Word dan Excel, penyusunan laporan, pengelolaan data pegawai, serta pemanfaatan AI untuk mempercepat pekerjaan administrasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (6).jpeg"
    },

    {
        id: "pelatihan transformasi manajemen kepegawaian di era digital berbasis AI & office skill",

        name: "Pelatihan Transformasi Manajemen Kepegawaian di Era Digital Berbasis AI & Office Skill",

        desc:
            "Materi mencakup digitalisasi administrasi pegawai, pengelolaan informasi kepegawaian, otomatisasi pekerjaan, serta peningkatan efisiensi dan profesionalisme dalam lingkungan kerja pemerintahan.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (7).jpeg"
    },

    {
        id: "pelatihan inovasi layanan & digitalisasi keadministrasian kepegawai",

        name: "Pelatihan Inovasi Layanan & Digitalisasi Keadministrasian Kepegawaian",

        desc:
            "meningkatkan kemampuan peserta dalam mengembangkan inovasi layanan administrasi kepegawaian melalui penerapan teknologi digital.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (8).jpeg"
    },

    {
        id: "pelatihan pemberdayaan aplikasi SRIKANDI dengan AI & office skill untuk meningkatkan produktifitas ASN",

        name: "Pelatihan Pemberdayaan Aplikasi SRIKANDI dengan AI & Office Skill untuk Meningkatkan Produktifitas ASN",

        desc:
            "Pelatihan untuk meningkatkan kemampuan ASN dalam menggunakan aplikasi SRIKANDI, mengelola arsip digital, serta memanfaatkan AI dan aplikasi Office guna mendukung tata kelola persuratan dan kearsipan yang lebih efektif.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (9).jpeg"
    },

    {
        id: "pelatihan peningkatan kompetensi  administrasi kepegawaian & office skil for junior office operator",

        name: "Pelatihan Peningkatan Kompetensi Administrasi Kepegawaian & Office Skill For Junior Office Operator",

        desc:
            "Pelatihan untuk membekali peserta dengan keterampilan administrasi kepegawaian dan pengoperasian aplikasi Office, termasuk pengelolaan data pegawai, dokumen, spreadsheet, dan laporan secara profesional.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (10).jpeg"
    },

    {
        id: "pelatihan leadership & poweroff public speaking",

        name: "Pelatihan Leadership & Poweroff Public Speaking",

        desc:
            "Pelatihan untuk mengembangkan kemampuan kepemimpinan, berbicara di depan umum, menyampaikan gagasan secara meyakinkan, serta membangun kepercayaan diri dalam memimpin dan berkomunikasi.",

        price: 3000000,

        duration: "3 Bulan",

        level: "Pemula",

        img:
            "lms.jpg/pl1 (11).jpeg"
    },

];