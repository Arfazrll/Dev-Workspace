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
};

export type TranslationKeys = typeof en;
