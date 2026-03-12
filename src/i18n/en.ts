export const en = {
    // Navigation
    home: "Home",
    resume: "Resume",
    theme: "Theme",
    language: "Language",

    // Hero


    // Sections
    about: "About",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    achievements: "Achievements",
    gallery: "Gallery",
    contact: "Contact",
    blog: "Blog",

    // Skills categories
    techStack: "Tech Stack",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    tools: "Tools",
    aiMachineLearning: "AI & Machine Learning",
    softwareEngineering: "Software Engineering",
    dataAnalytics: "Data & Analytics",
    devopsInfrastructure: "DevOps & Infrastructure",
    otherTechnicalSkills: "Other Technical Skills",

    // View more links
    viewAllSkills: "View All Skills",
    viewAllExperience: "View All Experience",
    viewAllProjects: "View All Projects",
    viewAllAchievements: "View All Achievements",
    viewAllBlogs: "View All Blogs",
    viewAllGallery: "View All Gallery",

    // Projects section
    myProjects: "My Projects",
    checkOutLatestWork: "Check out my latest work",
    projectsDescription: "I've worked on a variety of projects, from AI/ML systems to full-stack web applications. Here are a few of my favorites.",

    // Achievements section
    achievementsLabel: "Achievements",
    awardsCertifications: "Awards & Certifications",
    achievementsDescription: (count: number) =>
        `Throughout my academic and professional journey, I've earned ${count}+ awards and certifications across AI, Machine Learning, Cloud Computing, and Full Stack Development.`,

    // Contact section
    getInTouch: "Get in Touch",
    contactDescription: "Want to collaborate or have a question? Reach out to me on",
    contactOr: "or send me an",
    contactEmail: "email",
    contactEnding: "I'm always open to new opportunities and discussions.",

    // Experience page
    allExperience: "All Experience",
    experienceDescription: (count: number) =>
        `A comprehensive overview of my professional journey — ${count} roles across research, engineering, and development.`,

    // Skills page
    skillsExpertise: "Skills & Expertise",
    skillsDescription: "A complete overview of my technical stack, expertise areas, and tools.",

    // Achievements page
    allAchievementsTitle: "Awards & Certifications",
    allAchievementsDescription: (count: number) =>
        `A complete list of ${count} awards and certifications earned throughout my journey.`,
    awards: "Awards",
    certifications: "Certifications",

    // Projects page
    allProjects: "All Projects",
    allProjectsDescription: (count: number) =>
        `A comprehensive collection of ${count} projects spanning AI/ML, Full Stack Development, Blockchain, and more.`,

    // Project detail
    aboutThisProject: "About this Project",
    keyFeatures: "Key Features",
    highlights: "Highlights",
    installation: "Installation",
    challengesSolutions: "Challenges & Solutions",
    challenge: "Challenge",
    solution: "Solution",
    toolsUsed: "Tools Used",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    completed: "Completed",
    inProgress: "In Progress",
    backToProjects: "Back to Projects",
    backToHome: "Back to Home",
    backToBlog: "Back to Blog",
    previous: "Previous",
    next: "Next",
    searchPosts: "Search posts...",
    sortBy: "Sort by",
    allTopics: "All Topics",
    newestFirst: "Newest First",
    oldestFirst: "Oldest First",

    // 404
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist or may have been moved.",
    goToHome: "Go to Home",
    pdfPreview: "PDF PREVIEW",
    noPreviewAvailable: "No Preview Available",
    readFullPdf: "Read Full PDF",
    viewFullImage: "View Full Image",
    searchByName: "Search by name",
    searchProjects: "Search projects or tech",
    noResultsFound: "No results found",
    noAchievementsFound: "We couldn't find any achievements matching your search.",
    noProjectsFound: "No projects found",
    noProjectsMatching: "We couldn't find any projects matching your search.",
    clearSearch: "Clear search",
    closeModal: "Close modal",
    previewNotAvailable: "Preview not available",
    letsConnect: "Let's Connect",
    contactPlatformDescription: "Find me on these platforms or send me a direct email.",
    allGallery: "All Gallery",
    sortNewest: "Newest First",
    sortOldest: "Oldest First",
    photos: "Photos",
    videos: "Videos",
    allMedia: "All Media",
    viewContactInfo: "View Contact Information",
    contactProfiles: "Contact / Profiles",
    availableForOpportunity: "Available for opportunity",
    gpa: "GPA",
    present: "Present",
    now: "Now",
    blogDescription: "My thoughts on software development, life, and more.",
    postsCount: (count: number) => `${count} ${count === 1 ? 'post' : 'posts'}`,
    noPostsMatch: "No posts match your search.",
    noPostsYet: "No blog posts yet. Check back soon!",
    pageOf: (page: number, total: number) => `Page ${page} of ${total}`,
    team: "Team",
    role: "Role",
    posts: "POSTS",
    galleryDescription: "A curated visual journey through research, technical milestones, and professional experiences.",
    dataScience: "Data Science",
    machineLearning: "Machine Learning",
    deepLearning: "Deep Learning",
    nlp: "NLP",
    fullStackDeveloper: "Full Stack Developer",
    systemArchitecture: "System Architecture",
    contactSubject: "Inquiry regarding your Portfolio / Collaboration Opportunity",
    contactBody: "Dear Syahril Arfian Almazril,\n\nI recently viewed your portfolio and I am very impressed with your background in AI and Software Engineering.\n\nI would love to discuss a potential opportunity or collaboration with you regarding [insert topic here].\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your Name]\n[Your Company/Organization]",
};

export type TranslationKeys = typeof en;
