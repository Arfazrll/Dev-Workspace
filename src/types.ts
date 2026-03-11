// Portfolio Data Types
// Used by portfolio.ts to type-check the comprehensive portfolio data

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
    username: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface Personal {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
    phone: string;
    resumeUrl: string;
    website: string;
    languages: Language[];
    socialLinks: SocialLink[];
}

export interface ProjectFeature {
    title: string;
    items: string[];
}

export interface ProjectInstallation {
    title: string;
    code: string;
    type: string;
}

export interface ProjectChallenge {
    problem: string;
    solution: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    tools: string[];
    status: string;
    demoUrl?: string;
    repoUrl: string;
    startDate: string;
    customTimeline?: string;
    team?: string;
    role?: string;
    highlights: string[];
    category: string;
    features: ProjectFeature[];
    installation: ProjectInstallation[];
    challengesAndSolutions: ProjectChallenge[];
    images?: string[];
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    startDate: string;
    endDate?: string;
    isOngoing: boolean;
    location: string;
    type: string;
    logo: string;
    externalLink?: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    major: string;
    startDate: string;
    endDate?: string;
    isOngoing: boolean;
    gpa?: string;
    activities: string[];
    achievements: string[];
    logo: string;
}

export interface Achievement {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description?: string;
    credentialId?: string;
    credentialUrl?: string;
    type?: string;
    tags?: string[];
    category: string;
    image?: string;
}

export interface TechStackItem {
    name: string;
    icon: string;
    category: string;
}

export interface HardSkill {
    name: string;
    level: string;
    category: string;
    description: string;
}

export interface SoftSkill {
    name: string;
    description: string;
}

export interface Tool {
    name: string;
    icon: string;
    category: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string;
    tags: string[];
    author: { name: string; avatar: string };
    readTime: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    date: string;
    type: string;
    url: string;
    thumbnail?: string;
    category: string;
}

export interface PortfolioData {
    personal: Personal;
    projects: Project[];
    experiences: Experience[];
    education: Education[];
    achievements: Achievement[];
    techStack: TechStackItem[];
    hardSkills: HardSkill[];
    softSkills: SoftSkill[];
    tools: Tool[];
    faqs: FAQ[];
    blogs: BlogPost[];
    gallery: GalleryItem[];
}
