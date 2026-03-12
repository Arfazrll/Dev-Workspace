import type { TranslationKeys } from "./en";

export const id: TranslationKeys = {
    // Navigation
    home: "Beranda",
    resume: "Resume",
    theme: "Tema",
    language: "Bahasa",

    // Hero

    // Sections
    about: "Tentang",
    workExperience: "Pengalaman Kerja",
    education: "Pendidikan",
    skills: "Keahlian",
    projects: "Proyek",
    achievements: "Pencapaian",
    gallery: "Galeri",
    contact: "Kontak",
    blog: "Blog",

    // Skills categories
    techStack: "Tech Stack",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    tools: "Alat",
    aiMachineLearning: "AI & Machine Learning",
    softwareEngineering: "Software Engineering",
    dataAnalytics: "Sains Data & Analitik",
    devopsInfrastructure: "DevOps & Infrastruktur",
    otherTechnicalSkills: "Keahlian Teknis Lainnya",

    // View more links
    viewAllSkills: "Lihat Semua Keahlian",
    viewAllExperience: "Lihat Semua Pengalaman",
    viewAllProjects: "Lihat Semua Proyek",
    viewAllAchievements: "Lihat Semua Pencapaian",
    viewAllBlogs: "Lihat Semua Blog",
    viewAllGallery: "Lihat Semua Galeri",

    // Projects section
    myProjects: "Proyek Saya",
    checkOutLatestWork: "Lihat karya terbaru saya",
    projectsDescription: "Saya telah mengerjakan berbagai proyek, mulai dari sistem AI/ML hingga aplikasi web full-stack. Berikut beberapa favorit saya.",

    // Achievements section
    achievementsLabel: "Pencapaian",
    awardsCertifications: "Penghargaan & Sertifikasi",
    achievementsDescription: (count: number) =>
        `Sepanjang perjalanan akademis dan profesional saya, saya telah meraih ${count}+ penghargaan dan sertifikasi di bidang AI, Machine Learning, Cloud Computing, dan Full Stack Development.`,

    // Contact section
    getInTouch: "Hubungi Saya",
    contactDescription: "Ingin berkolaborasi atau punya pertanyaan? Hubungi saya di",
    contactOr: "atau kirim",
    contactEmail: "email",
    contactEnding: "Saya selalu terbuka untuk peluang dan diskusi baru.",

    // Experience page
    allExperience: "Semua Pengalaman",
    experienceDescription: (count: number) =>
        `Gambaran lengkap perjalanan profesional saya — ${count} posisi di bidang riset, engineering, dan pengembangan.`,

    // Skills page
    skillsExpertise: "Keahlian & Kompetensi",
    skillsDescription: "Gambaran lengkap tentang tech stack, area keahlian, dan alat yang saya gunakan.",

    // Achievements page
    allAchievementsTitle: "Penghargaan & Sertifikasi",
    allAchievementsDescription: (count: number) =>
        `Daftar lengkap ${count} penghargaan dan sertifikasi yang diperoleh sepanjang perjalanan saya.`,
    awards: "Penghargaan",
    certifications: "Sertifikasi",

    // Projects page
    allProjects: "Semua Proyek",
    allProjectsDescription: (count: number) =>
        `Koleksi lengkap ${count} proyek yang mencakup AI/ML, Full Stack Development, Blockchain, dan lainnya.`,

    // Project detail
    aboutThisProject: "Tentang Proyek Ini",
    keyFeatures: "Fitur Utama",
    highlights: "Sorotan",
    installation: "Instalasi",
    challengesSolutions: "Tantangan & Solusi",
    challenge: "Tantangan",
    solution: "Solusi",
    toolsUsed: "Alat yang Digunakan",
    liveDemo: "Demo Langsung",
    sourceCode: "Kode Sumber",
    completed: "Selesai",
    inProgress: "Sedang Berjalan",
    backToProjects: "Kembali ke Proyek",
    backToHome: "Kembali ke Beranda",
    backToBlog: "Kembali ke Blog",
    previous: "Sebelumnya",
    next: "Selanjutnya",
    searchPosts: "Cari postingan...",
    sortBy: "Urutkan berdasarkan",
    allTopics: "Semua Topik",
    newestFirst: "Terbaru",
    oldestFirst: "Terlama",

    // 404
    pageNotFound: "Halaman Tidak Ditemukan",
    pageNotFoundDescription: "Halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.",
    goToHome: "Ke Beranda",
    pdfPreview: "PRATINJAU PDF",
    noPreviewAvailable: "Pratinjau Tidak Tersedia",
    readFullPdf: "Baca PDF Lengkap",
    viewFullImage: "Lihat Gambar Lengkap",
    searchByName: "Cari berdasarkan nama",
    searchProjects: "Cari proyek atau teknologi",
    noResultsFound: "Tidak ada hasil ditemukan",
    noAchievementsFound: "Kami tidak dapat menemukan pencapaian yang sesuai dengan pencarian Anda.",
    noProjectsFound: "Tidak ada proyek ditemukan",
    noProjectsMatching: "Kami tidak dapat menemukan proyek yang sesuai dengan pencarian Anda.",
    clearSearch: "Hapus pencarian",
    closeModal: "Tutup modal",
    previewNotAvailable: "Pratinjau tidak tersedia",
    letsConnect: "Mari Terhubung",
    contactPlatformDescription: "Temukan saya di platform ini atau kirim email langsung kepada saya.",
    allGallery: "Semua Galeri",
    sortNewest: "Terbaru",
    sortOldest: "Terlama",
    photos: "Foto",
    videos: "Video",
    allMedia: "Semua Media",
    viewContactInfo: "Lihat Informasi Kontak",
    contactProfiles: "Kontak / Profil",
    availableForOpportunity: "Tersedia untuk peluang",
    gpa: "IPK",
    present: "Sekarang",
    now: "Sekarang",
    blogDescription: "Pemikiran saya seputar pengembangan perangkat lunak, kehidupan, dan lainnya.",
    postsCount: (count: number) => `${count} postingan`,
    noPostsMatch: "Tidak ada postingan yang sesuai dengan pencarian Anda.",
    noPostsYet: "Belum ada postingan blog. Cek lagi nanti!",
    pageOf: (page: number, total: number) => `Halaman ${page} dari ${total}`,
    team: "Tim",
    role: "Peran",
    posts: "POSTINGAN",
    galleryDescription: "Perjalanan visual melalui riset, tonggak pencapaian teknis, dan pengalaman profesional.",
    dataScience: "Sains Data",
    machineLearning: "Machine Learning",
    deepLearning: "Deep Learning",
    nlp: "NLP",
    fullStackDeveloper: "Pengembangan Full Stack",
    systemArchitecture: "Arsitektur Sistem",
    contactSubject: "Pertanyaan mengenai Portofolio / Peluang Kolaborasi Anda",
    contactBody: "Halo Syahril Arfian Almazril,\n\nSaya baru saja melihat portofolio Anda dan saya sangat terkesan dengan latar belakang Anda di bidang AI dan Software Engineering.\n\nSaya ingin berdiskusi mengenai potensi peluang atau kolaborasi dengan Anda terkait [masukkan topik di sini].\n\nMenantikan kabar dari Anda.\n\nHormat saya,\n[Nama Anda]\n[Perusahaan/Organisasi Anda]",
};
