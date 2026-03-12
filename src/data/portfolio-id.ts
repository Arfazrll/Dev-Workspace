import { PortfolioData } from '../types';
import { portfolioData } from './portfolio';

export const portfolioDataId: PortfolioData = {
    ...portfolioData,
    personal: {
        ...portfolioData.personal,
        subtitle: 'AI Engineer & Software Engineer | Menjembatani Inovasi Teknis dengan Eksekusi Strategis',
        bio: 'Seorang mahasiswa Teknologi Informasi di Universitas Telkom dengan profil unik yang menggabungkan keahlian teknis mendalam di bidang Kecerdasan Buatan dengan kepemimpinan strategis yang terbukti. Melalui pengalaman praktis sebagai Peneliti AI di Laboratorium Cyber Physical System, saya mengembangkan solusi teknis kompleks mulai dari merancang sistem IoT dan cetak biru perangkat lunak hingga merekayasa model Machine Learning tingkat lanjut. Saat ini sedang mengeksplorasi AI Agents dan teknologi Blockchain/Web3. Didorong untuk memanfaatkan keahlian terintegrasi ini untuk membangun inisiatif yang menjembatani inovasi teknis dengan eksekusi yang efektif.',
        languages: [
            { name: 'Indonesia', level: 'Native' },
            { name: 'Inggris', level: 'Limited Working' },
            { name: 'Prancis', level: 'Dasar' },
        ],
    },
    projects: portfolioData.projects.map(p => {
        if (p.slug === 'creative-portfolio-website') {
            return {
                ...p,
                title: 'Website Portofolio Kreatif',
                description: 'Portofolio modern dan beranimasi dengan elemen 3D dan transisi halus.',
                longDescription: 'Portofolio kreatif tingkat produksi yang dirancang untuk mendemonstrasikan kemahiran tingkat tinggi dalam Kecerdasan Buatan, Blockchain, dan Arsitektur Web Modern. Platform ini melampaui situs web statis tradisional dengan menawarkan pengalaman interaktif berkinerja tinggi yang didukung oleh shader WebGL canggih, simulasi berbasis fisika, dan integrasi data waktu nyata. Ini berfungsi sebagai laboratorium hidup untuk bereksperimen dengan teknologi frontend mutakhir sambil tetap mempertahankan standar aksesibilitas dan SEO yang ketat.',
                highlights: ['Animasi 3D', 'Efek Scroll', 'Bilingual EN/ID'],
                features: [
                    {
                        title: 'Pengalaman 3D Imersif',
                        items: [
                            '**Lanyard 3D Interaktif**: ID Card 3D dengan simulasi fisika di bagian hero yang bereaksi terhadap pergerakan mouse.',
                            '**Latar Belakang Hyperspeed**: Efek warp berbasis shader khusus untuk estetika Web3 futuristik.',
                            '**Sistem Partikel**: Partikel latar belakang dinamis yang meningkatkan kedalaman dan interaktivitas.'
                        ]
                    },
                    {
                        title: 'Wawasan Profesional',
                        items: [
                            '**Statistik Coding Real-time**: Kartu WakaTime terintegrasi yang menunjukkan bahasa pemrograman utama dan aktivitas coding Anda.',
                            '**Metrik GitHub Dinamis**: Kartu live yang menampilkan statistik repositori dan kontribusi.',
                            '**Lini Masa Interaktif**: Perjalanan visual karir Anda di CPS Lab, HUMIC, dan lainnya.'
                        ]
                    },
                    {
                        title: 'Performa & UX',
                        items: [
                            '**Bilingual (EN/ID)**: Dukungan penuh internasionalisasi.',
                            '**Smooth Scroll**: Scroll halus berbasis Lenis untuk nuansa premium.',
                            '**Engine Tema**: Mode gelap/terang sesuai preferensi sistem dengan efek "Click Spark" khusus.',
                            '**Arsitektur Responsif**: Tata letak yang sempurna untuk ponsel, tablet, dan desktop.'
                        ]
                    }
                ],
                challengesAndSolutions: [
                    {
                        problem: "Hambatan Performa dengan Aset 3D Berat",
                        solution: "Merancang pipeline rendering khusus menggunakan Instanced Meshes dan kompresi Draco yang agresif, mengurangi waktu pemuatan awal sebesar 60% sambil mempertahankan 60 FPS yang konsisten di perangkat seluler melalui penskalaan kualitas dinamis."
                    },
                    {
                        problem: "Sinkronisasi State yang Mulus",
                        solution: "Mengimplementasikan sistem manajemen state global yang kuat menggunakan Zustand untuk mengoordinasikan interaksi kompleks antara lapisan React UI dan 3D Canvas, memastikan animasi yang tersinkronisasi sempurna tanpa beban prop-drilling."
                    }
                ]
            };
        }
        if (p.slug === 'snbtin-platform') {
            return {
                ...p,
                title: 'SNBTIn - Platform Persiapan SNBT 2025',
                description: 'Platform e-learning #1 di Indonesia untuk persiapan SNBT bagi siswa SMA.',
                longDescription: 'SNBTIn adalah platform persiapan SNBT (Seleksi Nasional Berbasis Tes) terpercaya yang dirancang khusus untuk siswa SMA di Indonesia. Menyediakan ekosistem pembelajaran komprehensif dengan materi berkualitas, latihan soal, forum diskusi, dan fitur-fitur interaktif yang membantu siswa mempersiapkan diri secara optimal. Dengan lebih dari 10.000 siswa aktif dan tingkat kelulusan 85%, platform ini menjadi solusi utama untuk menembus PTN impian.',
                highlights: ['10.000+ Siswa Aktif', '85% Tingkat Kelulusan', '98% Kemiripan Soal'],
                features: [
                    {
                        title: '📚 Ekosistem Pembelajaran Komprehensif',
                        items: [
                            '**Materi Lengkap**: Cakupan kurikulum penuh untuk semua mata pelajaran SNBT dengan video, PDF, dan dokumen interaktif.',
                            '**Video Interaktif**: Penjelasan video berkualitas tinggi dari instruktur ahli.',
                            '**Latihan Soal**: Lebih dari 10.000 latihan soal dengan solusi detail dan analisis kesalahan.'
                        ]
                    },
                    {
                        title: '🎯 Penguasaan Ujian & Analitik',
                        items: [
                            '**Tryout Berkala**: Simulasi ujian rutin dengan pola soal terbaru.',
                            '**Analisis Kemampuan**: Dashboard performa detail untuk melacak progres dan titik lemah.',
                            '**98% Kemiripan**: Soal dirancang untuk sangat menyerupai ujian SNBT sesungguhnya.'
                        ]
                    }
                ]
            };
        }
        if (p.slug === 'terraflow-platform') {
            return {
                ...p,
                title: 'Terraflow Platform',
                description: 'Solusi IoT tingkat korporat untuk pertanian presisi.',
                longDescription: 'TerraFlow Platform adalah solusi IoT cerdas yang dirancang untuk pertanian presisi dan pemantauan lingkungan. Platform ini menggunakan arsitektur Direct-to-Cloud di mana node sensor ESP32 berkomunikasi langsung dengan Firebase Realtime Database, memastikan sinkronisasi data instan. Sistem ini menggabungkan backend Go (Gin) berperforma tinggi untuk manajemen konfigurasi dengan frontend Next.js 14 modern untuk visualisasi real-time dan kontrol jarak jauh aktuator seperti pompa dan servo.',
                highlights: ['Arsitektur Direct-to-Cloud', 'Pemantauan Real-time', 'API Go Performa Tinggi'],
                role: 'Rekayasa Perangkat Lunak'
            };
        }
        if (p.slug === 'docsinsight-engine') {
            return {
                ...p,
                title: 'DocsInsight Engine',
                description: 'Sistem RAG Perusahaan untuk analisis dokumen cerdas.',
                longDescription: 'DocsInsight Engine adalah platform Retrieval-Augmented Generation (RAG) privat berperforma tinggi. Memungkinkan pengguna mengunggah dokumen kompleks dan berinteraksi melalui antarmuka pencarian neural yang didukung oleh Large Language Models (LLM) lokal. Dibangun dengan backend Python/Flask yang kuat dan diorkestrasi oleh LangChain, memastikan data sensitif tidak pernah keluar dari infrastruktur Anda sambil memberikan kemampuan pencarian tingkat perusahaan.',
                role: 'AI Engineer',
                highlights: ['Eksekusi LLM Lokal', 'Dukungan Multi-Format', 'Pencarian Neural']
            };
        }
        if (p.slug === 'donasiaku') {
            return {
                ...p,
                title: 'Donasiaku',
                description: 'Platform Penyaluran Donasi Barang Layak Pakai.',
                longDescription: 'Donasiku adalah platform modern yang dirancang untuk memfasilitasi penyaluran donasi barang fisik layak pakai secara efisien dan transparan. Menghubungkan Donatur dengan Penerima melalui ekosistem digital yang dilengkapi fitur pelacakan status, chat real-time, dan verifikasi akun untuk memastikan bantuan sampai ke tangan yang tepat.',
                role: 'Full Stack Developer',
                highlights: ['Arsitektur Monorepo', 'Chat Real-time', 'Autentikasi Sanctum']
            };
        }
        if (p.slug === 'security-automation-genai') {
            return {
                ...p,
                title: 'Otomasi Keamanan dengan GenAI',
                description: 'Sistem deteksi ancaman keamanan siber berbasis AI menggunakan Transformers.',
                longDescription: 'Otomasi Keamanan dengan GenAI adalah proyek berbasis riset yang mengeksplorasi persimpangan antara deep learning dan keamanan siber. Menggunakan arsitektur Transformer mutakhir dan mekanisme Adaptive Attention untuk mendeteksi ancaman kompleks secara otomatis seperti SQL Injection, DDoS, dan intrusi jaringan, memberikan kerangka pertahanan yang kuat bagi infrastruktur digital modern.',
                role: 'AI Developer',
                highlights: ['Deteksi SQLi berbasis Transformer', 'Adaptive Attention untuk DDoS', 'Fusi Data Multi-Modal']
            };
        }
        if (p.slug === 'web3-guestbook-dapp') {
            return {
                ...p,
                title: 'Web3 Guestbook DApp',
                description: 'Buku tamu terdesentralisasi di Ethereum untuk pesan yang tidak dapat diubah.',
                longDescription: 'Web3GuestbookDapp adalah aplikasi terdesentralisasi yang menjembatani antarmuka Web2 modern dengan blockchain Ethereum. Memungkinkan pengguna menghubungkan dompet MetaMask mereka dan menandatangani buku tamu yang persisten, menciptakan catatan kunjungan yang tidak dapat diubah. Proyek ini mendemonstrasikan siklus hidup penuh DApp, dari pengembangan smart contract dengan Solidity hingga frontend responsif dengan Next.js.',
                role: 'Pengembang Blockchain',
                highlights: ['Catatan Blockchain Immutable', 'Integrasi MetaMask', 'Otomasi Smart Contract']
            };
        }
        if (p.slug === 'digilibzx') {
            return {
                ...p,
                title: 'Digilibzx',
                description: 'Sistem manajemen perpustakaan digital full-stack modern dengan fitur bertenaga AI.',
                longDescription: 'Digilibzx adalah solusi manajemen perpustakaan digital komprehensif yang dirancang untuk menyederhanakan operasional perpustakaan. Dibangun dengan backend Java Spring Boot yang kuat dan frontend Next.js berperforma tinggi, sistem ini mengintegrasikan Google Gemini dan OpenAI untuk menyediakan ringkasan buku otomatis. Fitur utama mencakup kerangka keamanan berlapis, analitik aktivitas real-time, dan sistem peminjaman yang mulus.',
                role: 'Lead & Full Stack Dev',
                highlights: ['Ringkasan Buku bertenaga AI', 'Dashboard Analitik Real-time', 'Siap Kontainerisasi Docker']
            };
        }
        if (p.slug === 'polabdc-dental-management') {
            return {
                ...p,
                title: 'POLABDC Dental Management',
                description: 'SaaS Manajemen Klinik Gigi bertenaga AI untuk operasional terdigitalisasi.',
                longDescription: 'RoxyDental (POLABDC) adalah solusi SaaS berperforma tinggi yang dirancang untuk mendigitalisasi operasional klinik gigi. Mengintegrasikan Kecerdasan Buatan untuk membantu dokter gigi dalam prediksi penyakit dan analisis data sekaligus memberikan pengalaman yang mulus bagi pasien, perawat, dan administrator. Dibangun sebagai Monorepo, sistem ini memastikan skalabilitas dengan memisahkan klien Next.js, server Express.js, dan unit pemrosesan AI Python yang dinamis.',
                role: 'Backend Developer',
                highlights: ['Sistem EMR bertenaga AI', 'Arsitektur Monorepo', 'Manajemen Antrean Real-time']
            };
        }
        if (p.slug === 'data-analyst-dashboard') {
            return {
                ...p,
                title: 'Data Analyst Dashboard',
                description: 'Alat analitik interaktif untuk eksplorasi data e-commerce menggunakan Dash dan Plotly.',
                longDescription: 'Data Analyst Dashboard adalah platform analitik interaktif komprehensif yang dirancang untuk menyederhanakan eksplorasi data e-commerce. Dibangun dengan Python dan Streamlit, memungkinkan analis untuk melampaui laporan statis dengan menyediakan pemfilteran data real-time, pembuatan bagan dinamis, dan statistik ringkasan otomatis.',
                highlights: ['Visual Real-time Interaktif', 'Pre-processing Data Otomatis', 'Analisis Tren E-commerce'],
                role: 'Data Analyst'
            };
        }
        return p;
    }),
    experiences: portfolioData.experiences.map(e => {
        if (e.id === 'prof-1') {
            return {
                ...e,
                position: 'Machine Learning Code Reviewer',
                description: 'Evaluasi teknis dan penjaminan kualitas untuk proyek submissions Machine Learning.',
                responsibilities: [
                    'Melakukan analisis kode mendalam untuk proyek ML',
                    'Memvalidasi kebenaran logika dan efisiensi',
                    'Menegakkan praktik terbaik industri',
                    'Memberikan umpan balik ahli yang dapat ditindaklanjuti kepada pelajar',
                ]
            };
        }
        if (e.id === 'prof-2') {
            return {
                ...e,
                position: 'Digital Learning Experience Auditor',
                description: 'Pengembangan konten edukasi dan penjaminan kualitas.',
                responsibilities: [
                    'Meninjau dan mengevaluasi jalur pembelajaran AI Engineer',
                    'Memberikan umpan balik untuk peningkatan desain instruksional',
                    'Berkontribusi dalam pengembangan kurikulum dan silabus',
                    'Menilai umpan balik pelajar dan kegunaan kursus',
                ]
            };
        }
        if (e.id === 'prof-3') {
            return {
                ...e,
                position: 'AI Developer Intern',
                description: 'Lingkungan berbasis riset yang berfokus pada kecerdasan buatan dan analitik data.',
                responsibilities: [
                    'Mengelola dan memproses dataset skala besar melalui seluruh pipeline ML',
                    'Membangun model deteksi serangan berbasis Deep Learning dan Transformer',
                    'Melakukan fine-tuning hyperparameter model untuk presisi tinggi',
                    'Berkolaborasi dalam riset deteksi ancaman bertenaga AI',
                ]
            };
        }
        if (e.id === 'prof-4') {
            return {
                ...e,
                position: 'Peneliti Computer Vision Intern',
                description: 'Riset AI yang berfokus pada persimpangan antara kecerdasan buatan dan sistem fisik.',
                responsibilities: [
                    'Pengembangan model cerdas end-to-end',
                    'Menyelidiki arsitektur Deep Learning mutakhir',
                    'Mengimplementasikan algoritma Machine Learning untuk aplikasi dunia nyata',
                    'Berkontribusi pada solusi otonom dan cerdas yang inovatif',
                ]
            };
        }
        if (e.id === 'prof-5') {
            return {
                ...e,
                position: 'System Analyst Intern',
                description: 'Lingkungan rekayasa perangkat lunak yang berfokus pada riset.',
                responsibilities: [
                    'Analisis komprehensif kebutuhan sistem',
                    'Menerjemahkan kebutuhan ke dalam dokumentasi SRS',
                    'Merancang arsitektur sistem dengan diagram UML',
                    'Berkolaborasi dengan tim Development, UI/UX, dan QA',
                ]
            };
        }
        if (e.id === 'prof-6') {
            return {
                ...e,
                position: 'Asisten Praktikum Jaringan Komputer',
                description: 'Membimbing mahasiswa dalam sesi praktikum jaringan.',
                responsibilities: [
                    'Mentoring sesi lab hingga 30 mahasiswa',
                    'Memimpin proyek Socket Programming sebagai PIC',
                    'Merancang kriteria evaluasi dan penilaian',
                    'Menjadi pengawas ujian',
                ]
            };
        }
        if (e.id === 'prof-7') {
            return {
                ...e,
                position: 'Asisten Peneliti',
                description: 'Asisten Peneliti di laboratorium riset dan inovasi yang berfokus pada eksplorasi dan pengembangan teknologi terapan.',
                responsibilities: [
                    'Berkontribusi pada produk berbasis riset dan proyek AI kolaboratif',
                    'Merancang materi pembelajaran komprehensif untuk Deep Learning dan Computer Vision',
                    'Menjadi mentor dan instruktur dalam workshop',
                    'Meninjau dan menganalisis karya ilmiah dan topik riset',
                ]
            };
        }
        if (e.id === 'prof-8') {
            return {
                ...e,
                position: 'Asisten Entri Data',
                description: 'Siklus hidup data dan pelaporan untuk kantor pemerintahan.',
                responsibilities: [
                    'Input dan validasi data harian',
                    'Mengembangkan laporan analitis untuk pemangku kepentingan',
                    'Memastikan akurasi dan konsistensi data',
                    'Dokumentasi tugas yang terstruktur',
                ]
            };
        }
        if (e.id === 'lead-1') {
            return {
                ...e,
                position: 'Staf Sumber Daya Manusia',
                description: 'Mendorong pertumbuhan dan pengembangan di antara asisten laboratorium dengan mengimplementasikan inisiatif SDM strategis.',
                responsibilities: [
                    'Mengimplementasikan inisiatif SDM strategis',
                    'Memfasilitasi program pelatihan',
                    'Mempromosikan budaya kerja yang mendukung dan kolaboratif',
                    'Memperkuat performa tim',
                ]
            };
        }
        if (e.id === 'lead-2') {
            return {
                ...e,
                position: 'Ketua Panitia',
                description: 'Mengelola dan mengeksekusi portofolio program pengembangan bakat digital.',
                responsibilities: [
                    'Memimpin perencanaan end-to-end untuk DigiTalks dan DigiCourse',
                    'Mengawasi eksekusi dan koordinasi program',
                    'Manajemen pemangku kepentingan dan komunikasi',
                    'Menyusun laporan dan analisis pasca-acara',
                ]
            };
        }
        if (e.id === 'lead-3') {
            return {
                ...e,
                position: 'Ranger – Digital Application Club',
                description: 'Anggota komite inti untuk DigiCourse dan Digicamp, inisiatif bakat digital unggulan Telkom Indonesia.',
                responsibilities: [
                    'Mengarahkan program bakat digital unggulan',
                    'Mengembangkan strategi komunikasi multi-saluran',
                    'Mengelola perencanaan logistik untuk 200+ peserta',
                    'Penghubung dan promosi pemangku kepentingan yang kuat',
                ]
            };
        }
        if (e.id === 'lead-4') {
            return {
                ...e,
                position: 'Divisi Urusan Akademik',
                description: 'Perencanaan dan eksekusi program akademik serta inisiatif dukungan mahasiswa.',
                responsibilities: [
                    'Mengelola siklus hidup program akademik',
                    'Operasi acara dan dukungan logistik',
                    'Keterlibatan audiens dan promosi',
                    'Persiapan dokumen dan koordinator',
                ]
            };
        }
        if (e.id === 'lead-5') {
            return {
                ...e,
                position: 'Komunikasi Hubungan Masyarakat',
                description: 'Peran strategis dalam narasi publik dan keterlibatan komunitas.',
                responsibilities: [
                    'Merancang strategi PR terintegrasi',
                    'Meningkatkan visibilitas merek dan afinitas komunitas',
                    'Membina hubungan dengan pemangku kepentingan dan media',
                    'Mengorkestrasi saluran komunikasi strategis',
                ]
            };
        }
        if (e.id === 'vol-1') {
            return {
                ...e,
                position: 'Asisten Fundraising',
                description: 'Berperan penting dalam mengeksekusi penggalangan dana untuk acara pemberdayaan ekonomi.',
                responsibilities: [
                    'Eksekusi kampanye penggalangan dana',
                    'Prospek donor strategis',
                    'Pengembangan proposal sponsor berdampak tinggi',
                    'Manajemen saluran penjangkauan yang ditargetkan',
                ]
            };
        }
        if (e.id === 'vol-2') {
            return {
                ...e,
                position: 'Perencana & Penyelenggara Acara',
                description: 'Anggota kunci komite penyelenggara MAKRAB 2024.',
                responsibilities: [
                    'Desain dan eksekusi program strategis',
                    'Pengembangan agenda utama acara',
                    'Memimpin segmen berbagi pengetahuan inti',
                    'Berkolaborasi untuk penyampaian acara yang berdampak',
                ]
            };
        }
        if (e.id === 'vol-3') {
            return {
                ...e,
                position: 'Tim Kebersihan Lingkungan',
                description: 'Relawan untuk inisiatif perbaikan lingkungan.',
                responsibilities: [
                    'Drive pembersihan langsung',
                    'Mengimplementasikan sistem pemilahan sampah',
                    'Penjangkauan dan edukasi komunitas strategis',
                    'Koordinasi dengan mitra eksternal',
                ]
            };
        }
        if (e.id === 'vol-4') {
            return {
                ...e,
                position: 'Operator Logistik – Campus Expo 2024',
                description: 'Koordinator Logistik yang mengelola tulang punggung operasional acara.',
                responsibilities: [
                    'Mengarahkan semua pilar logistik (tempat, peralatan, transportasi)',
                    'Mengorkestrasi koordinasi tim',
                    'Eksekusi lapangan yang efisien',
                    'Evaluasi performa dan pelaporan',
                ]
            };
        }
        if (e.id === 'cert-1') {
            return {
                ...e,
                position: 'Penerima Beasiswa – Progressive Learning Program',
                description: 'Program pelatihan AI Engineer yang intensif.',
                responsibilities: [
                    'Kurikulum Machine Learning yang komprehensif',
                    'Deep Learning untuk Computer Vision/NLP',
                    'Praktik terbaik MLOps untuk model produksi',
                    'Pengembangan keterampilan AI Engineer end-to-end',
                ]
            };
        }
        if (e.id === 'cert-2') {
            return {
                ...e,
                position: 'Program Machine Learning Engineer',
                description: 'Kurikulum ML intensif yang selaras dengan standar industri.',
                responsibilities: [
                    'Kompetensi siklus hidup ML tingkat lanjut',
                    'Pra-pemrosesan data dan pengembangan model',
                    'Pembuatan portofolio proyek siap produksi',
                    'Pengembangan keterampilan yang relevan dengan industri',
                ]
            };
        }
        if (e.id === 'cert-3') {
            return {
                ...e,
                position: 'Delegasi – AIESEC Future Leaders 2024',
                description: 'Program pengembangan kepemimpinan yang berdampak dan sadar sosial.',
                responsibilities: [
                    'Kurikulum pengembangan pribadi dan profesional',
                    'Mengimplementasikan proyek inovatif yang menargetkan isu global',
                    'Menguasai kompetensi kepemimpinan kritis',
                    'Membangun solusi berkelanjutan dan jaringan global',
                ]
            };
        }
        return e;
    }),
    education: portfolioData.education.map(edu => {
        if (edu.id === 'edu-1') {
            return {
                ...edu,
                degree: 'Sarjana Teknologi Informasi',
                activities: ['Jalur ML GDSC', 'Peneliti Lab CPS', 'Akademik HMIT', 'Kompetisi Data Science'],
                achievements: [
                    'Skor Akhir Proyek ML: 92/100',
                    'Aktif dalam kompetisi data science nasional',
                    'Asisten Peneliti di berbagai laboratorium',
                ]
            };
        }
        if (edu.id === 'edu-2') {
            return {
                ...edu,
                degree: 'Sekolah Menengah Atas',
                major: 'IPA Matematika (89/100)',
                activities: ['Studi Sains'],
                achievements: [
                    'Landasan kuat dalam matematika dan fisika',
                    'Pengembangan berpikir analitis',
                ]
            };
        }
        return edu;
    }),
    achievements: portfolioData.achievements.map(ach => {
        if (ach.id === 'ach-1') {
            return {
                ...ach,
                description: 'Meraih peringkat 15 besar dalam kompetisi data mining, menerapkan model ML canggih pada dataset kompleks.',
            };
        }
        if (ach.id === 'ach-2') {
            return {
                ...ach,
                description: 'Mengembangkan solusi inovatif untuk masalah bisnis dunia nyata.',
            };
        }
        return ach;
    }),
    hardSkills: portfolioData.hardSkills.map(s => {
        const translations: Record<string, { name: string, description: string }> = {
            'System Architecture': { name: 'Arsitektur Sistem', description: 'Merancang arsitektur sistem yang kuat, skalabel, dan berkinerja tinggi untuk aplikasi kompleks.' },
            'AI Agents & Autonomy': { name: 'AI Agents & Otonomi', description: 'Merancang sistem otonom dengan kemampuan penalaran rekursif dan pengambilan keputusan.' },
            'Large Language Models (LLM)': { name: 'Large Language Models (LLM)', description: 'Keahlian dalam fine-tuning model open-source, arsitektur RAG, dan prompt engineering yang kompleks.' },
            'Data Science': { name: 'Sains Data', description: 'Analisis statistik tingkat lanjut dan pemodelan prediktif untuk mengekstrak wawasan dari big data.' },
            'Deep Learning (CV/NLP)': { name: 'Deep Learning (CV/NLP)', description: 'Membangun jaringan saraf tiruan yang dalam untuk tugas visi komputer dan bahasa alami yang kompleks.' },
            'Computer Vision': { name: 'Visi Komputer', description: 'Mengembangkan sistem deteksi objek real-time, pengenalan pola, dan sistem analisis spasial.' },
            'Machine Learning Ops': { name: 'Machine Learning Ops', description: 'Mengimplementasikan pipeline yang kuat untuk pelatihan, deployment, dan pemantauan performa model.' },
            'DevOps': { name: 'DevOps', description: 'Menyederhanakan alur kerja pengembangan dan manajemen infrastruktur melalui otomasi.' },
            'Full Stack Development': { name: 'Pengembangan Full Stack', description: 'Membangun arsitektur web yang skalabel dari frontend pixel-perfect hingga database yang kuat.' },
            'System Analysis': { name: 'Analisis Sistem', description: 'Menerjemahkan kebutuhan pemangku kepentingan yang kompleks menjadi cetak biru teknis yang efisien.' },
            'SDLC': { name: 'SDLC', description: 'Mengelola seluruh siklus hidup pengembangan perangkat lunak dengan fokus pada kualitas dan ketangkasan.' },
            'Software Design': { name: 'Desain Perangkat Lunak', description: 'Menerapkan pola dan prinsip arsitektur untuk membangun sistem yang mudah dipelihara dan modular.' },
            'Requirement Specifications': { name: 'Spesifikasi Kebutuhan', description: 'Mendefinisikan dokumentasi teknis yang jelas, presisi, dan dapat ditindaklanjuti untuk tim engineering.' },
            'Data Analytics': { name: 'Analitik Data', description: 'Mengubah data mentah menjadi visualisasi yang bermakna dan intelijen strategis.' },
            'Data Visualization': { name: 'Visualisasi Data', description: 'Membuat dashboard intuitif dan interaktif untuk mengomunikasikan temuan data yang kompleks.' },
            'SQL & DBMS': { name: 'SQL & DBMS', description: 'Merancang dan mengoptimalkan skema database relasional untuk aplikasi berkinerja tinggi.' },
            'Docker & Kubernetes': { name: 'Docker & Kubernetes', description: 'Kontainerisasi aplikasi untuk deployment yang konsisten dan orkestrasi sumber daya cloud.' },
            'Wazuh': { name: 'Wazuh', description: 'Mengeksplorasi pemantauan keamanan open-source untuk deteksi ancaman dan kepatuhan.' },
            'Network Traffic Analysis': { name: 'Analisis Lalu Lintas Jaringan', description: 'Menganalisis paket data untuk mengidentifikasi anomali dan mengoptimalkan performa jaringan.' },
            'Socket Programming': { name: 'Pemrograman Socket', description: 'Mengimplementasikan protokol komunikasi jaringan tingkat rendah untuk transfer data real-time.' },
            'Google Cloud Platform': { name: 'Google Cloud Platform', description: 'Memanfaatkan infrastruktur dan layanan cloud untuk hosting aplikasi yang skalabel.' },
            'Solidity': { name: 'Solidity', description: 'Menulis smart contract yang aman untuk aplikasi terdesentralisasi di Ethereum.' },
            'Decentralized Applications (DApps)': { name: 'Aplikasi Terdesentralisasi (DApps)', description: 'Mengembangkan aplikasi web yang berinteraksi dengan smart contract blockchain.' },
            'Blockchain Architecture': { name: 'Arsitektur Blockchain', description: 'Memahami prinsip mendasar teknologi ledger terdistribusi.' },
        };
        return translations[s.name] ? { ...s, ...translations[s.name] } : s;
    }),
    softSkills: portfolioData.softSkills.map(s => {
        const translations: Record<string, { name: string, description: string }> = {
            'Leadership': { name: 'Kepemimpinan', description: 'Memimpin tim dan mengelola proyek yang kompleks' },
            'Critical Thinking': { name: 'Berpikir Kritis', description: 'Pendekatan analitis terhadap masalah yang kompleks' },
            'Public Speaking': { name: 'Public Speaking', description: 'Fasilitasi workshop dan presentasi' },
            'Teamwork': { name: 'Kerjasama Tim', description: 'Kerja kolaboratif dalam tim yang beragam' },
            'Communication': { name: 'Komunikasi', description: 'Komunikasi teknis dan pemangku kepentingan yang jelas' },
            'Problem Solving': { name: 'Pemecahan Masalah', description: 'Solusi inovatif untuk masalah dunia nyata' },
            'Adaptability': { name: 'Adaptabilitas', description: 'Berkembang dalam lingkungan yang berubah dan belajar dengan cepat' },
            'Public Relations': { name: 'Hubungan Masyarakat', description: 'Visibilitas merek dan keterlibatan komunitas' },
            'Entrepreneurship': { name: 'Kewirausahaan', description: 'Pendekatan visioner terhadap penciptaan nilai' },
            'Event Management': { name: 'Manajemen Acara', description: 'Perencanaan dan pelaksanaan acara yang sukses' },
            'Research Skills': { name: 'Keterampilan Riset', description: 'Analisis mendalam dan kontribusi akademik' },
            'Mentorship': { name: 'Mentoring', description: 'Membimbing dan mengembangkan bakat' },
        };
        return translations[s.name] ? { ...s, ...translations[s.name] } : s;
    }),
    faqs: [
        {
            question: 'Layanan apa yang Anda tawarkan?',
            answer: 'Saya berspesialisasi dalam Pengembangan Full Stack (React, Next.js, Node.js), Pengembangan AI/ML (TensorFlow, Computer Vision, NLP), Sains Data, dan pengembangan Blockchain/Web3 (Solidity, Smart Contracts, DApps).',
        },
        {
            question: 'Teknologi apa yang sedang Anda pelajari?',
            answer: 'Saat ini sedang mendalami AI Agents, teknologi Blockchain (Solidity, Smart Contracts), dan MLOps untuk sistem AI siap produksi.',
        },
        {
            question: 'Apakah Anda tersedia untuk peluang kerja?',
            answer: 'Ya! Saya terbuka untuk magang, kolaborasi, dan proyek menarik di bidang AI, Sains Data, Pengembangan Full Stack, dan Blockchain. Silakan hubungi saya!',
        },
    ],
    blogs: portfolioData.blogs.map(b => {
        const translations: Record<string, { title: string, excerpt: string }> = {
            'future-of-ai-agents': { title: 'Masa Depan AI Agents di Perusahaan', excerpt: 'Bagaimana agen otonom mendefinisikan ulang arsitektur perangkat lunak dan proses pengambilan keputusan.' },
            'web3-ux-challenges': { title: 'Mengatasi Tantangan UX di Web3', excerpt: 'Strategi untuk membangun aplikasi terdesentralisasi yang terasa semulus Web2.' },
            'mastering-nextjs-performance': { title: 'Menguasai Performa Next.js', excerpt: 'Teknik tingkat lanjut untuk mengoptimalkan Core Web Vitals pada aplikasi React modern.' },
            'ai-driven-security': { title: 'Keamanan Siber Berbasis AI', excerpt: 'Menggunakan deep learning untuk mendeteksi dan mencegah intrusi jaringan modern.' },
            'llm-fine-tuning': { title: 'Fine-Tuning LLM secara Lokal', excerpt: 'Panduan untuk mengoptimalkan model open-source menggunakan teknik Ollama dan LoRA.' },
            'smart-contract-security': { title: 'Pola Audit Smart Contract', excerpt: 'Kerentanan umum dan cara mencegahnya dalam Solidity.' },
            'modern-state-management': { title: 'Manajemen State Modern di React', excerpt: 'Membandingkan Zustand, Redux Toolkit, dan React Context untuk aplikasi skala besar.' },
            'iot-edge-computing': { title: 'Edge Computing dengan ESP32', excerpt: 'Mengimplementasikan pemrosesan data real-time di edge untuk IoT industri.' },
            'ai-in-healthcare': { title: 'Transformasi AI dalam Layanan Kesehatan', excerpt: 'Bagaimana visi komputer membantu diagnosa medis dan analisis data.' },
        };
        return translations[b.slug] ? { ...b, ...translations[b.slug] } : b;
    }),
    gallery: portfolioData.gallery.map(g => {
        const translations: Record<string, { title: string, description: string }> = {
            'Professional Portrait': { title: 'Potret Profesional', description: 'Sesi potret profesional.' },
            'Research Activity': { title: 'Aktivitas Riset', description: 'Cuplikan dari berbagai aktivitas riset.' },
            'Lab Work Session': { title: 'Sesi Kerja Lab', description: 'Jam produktif di Laboratorium CPS.' },
            'Networking Practicum': { title: 'Praktikum Jaringan', description: 'Membantu mahasiswa dengan lab jaringan komputer.' },
            'Research Collaboration': { title: 'Kolaborasi Riset', description: 'Bekerja sama dalam riset AI yang inovatif.' },
            'Campus Expo Logistics': { title: 'Logistik Campus Expo', description: 'Mengelola logistik untuk acara tingkat universitas.' },
            'Academic Division Tasks': { title: 'Tugas Divisi Akademik', description: 'Berkoordinasi dengan tim Urusan Akademik.' },
            'Strategic Coordination': { title: 'Koordinasi Strategis', description: 'Perencanaan tingkat tinggi dan sinkronisasi tim.' },
            'Development Focus': { title: 'Fokus Pengembangan', description: 'Pengembangan perangkat lunak dan debugging yang intens.' },
            'Innovation Lab': { title: 'Lab Inovasi', description: 'Mengeksplorasi teknologi baru di laboratorium.' },
            'Data Entry Operations': { title: 'Operasi Entri Data', description: 'Mengelola data sistem dan entri presisi.' },
            'Leadership Development': { title: 'Pengembangan Kepemimpinan', description: 'Sesi program AIESEC Future Leaders.' },
            'Environmental Hygiene Team': { title: 'Tim Kebersihan Lingkungan', description: 'Relawan untuk inisiatif pembersihan lingkungan.' },
            'Community Hygiene Effort': { title: 'Upaya Kebersihan Komunitas', description: 'Bekerja sama untuk kampus yang lebih bersih.' },
            'Advanced AI Research': { title: 'Riset AI Lanjutan', description: 'Menganalisis pola data yang kompleks di laboratorium.' },
        };
        return translations[g.title] ? { ...g, ...translations[g.title] } : g;
    }),
};
