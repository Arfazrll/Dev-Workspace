import type { TranslationKeys } from "./en";

export const id: TranslationKeys = {
    // Navigation
    home: "Beranda",
    resume: "Resume",
    theme: "Tema",
    language: "Bahasa",

    // Hero
    heroPrefix: "Hai, saya",

    // Sections
    about: "Tentang",
    workExperience: "Pengalaman Kerja",
    education: "Pendidikan",
    skills: "Keahlian",
    projects: "Proyek",
    achievements: "Pencapaian",
    contact: "Kontak",

    // Skills categories
    techStack: "Tech Stack",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    tools: "Alat",

    // View more links
    viewAllSkills: "Lihat Semua Keahlian",
    viewAllExperience: "Lihat Semua Pengalaman",
    viewAllProjects: "Lihat Semua Proyek",
    viewAllAchievements: "Lihat Semua Pencapaian",

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

    // 404
    pageNotFound: "Halaman Tidak Ditemukan",
    pageNotFoundDescription: "Halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.",
    goToHome: "Ke Beranda",
} as const;
