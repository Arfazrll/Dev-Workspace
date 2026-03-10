import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { portfolioData } from "@/data/portfolio";
import type { TechStackItem, Experience, Education, Project, Achievement, SocialLink } from "@/types";

// Helper: format date string to readable month/year
function formatDateRange(startDate: string, endDate?: string, isOngoing?: boolean): { start: string; end?: string } {
  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };
  return {
    start: formatDate(startDate),
    end: isOngoing ? undefined : endDate ? formatDate(endDate) : undefined,
  };
}

// Map tech stack names to available SVG icon components
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "React": ReactLight,
  "Next.js": NextjsIconDark,
  "TypeScript": Typescript,
  "Node.js": Nodejs,
  "Python": Python,
  "Go": Golang,
  "PostgreSQL": Postgresql,
  "Docker": Docker,
  "Kubernetes": Kubernetes,
  "Java": Java,
  "C++": Csharp,
};

const p = portfolioData;

// Build skills from techStack — pick items that have SVG icons, then fill with remaining
const skillsWithIcons = p.techStack
  .filter((t: TechStackItem) => skillIconMap[t.name])
  .map((t: TechStackItem) => ({ name: t.name, icon: skillIconMap[t.name] }));

const skillsWithoutIcons = p.techStack
  .filter((t: TechStackItem) => !skillIconMap[t.name])
  .slice(0, Math.max(0, 11 - skillsWithIcons.length))
  .map((t: TechStackItem) => ({ name: t.name, icon: undefined as unknown as React.ComponentType<{ className?: string }> }));

const allSkills = [...skillsWithIcons, ...skillsWithoutIcons].slice(0, 14);

// Build work from experiences (professional + internship + contract types)
const workExperiences = p.experiences
  .filter((e: Experience) => ["internship", "freelance", "contract"].includes(e.type))
  .sort((a: Experience, b: Experience) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
  .map((e: Experience) => {
    const dates = formatDateRange(e.startDate, e.endDate, e.isOngoing);
    return {
      company: e.company,
      href: e.externalLink || "#",
      badges: [] as string[],
      location: e.location,
      title: e.position,
      logoUrl: e.logo,
      start: dates.start,
      end: dates.end,
      description: e.description + " " + e.responsibilities.join(". ") + ".",
    };
  });

// Build education
const educationItems = p.education.map((e: Education) => {
  const startYear = new Date(e.startDate).getFullYear().toString();
  const endYear = e.isOngoing ? "Present" : e.endDate ? new Date(e.endDate).getFullYear().toString() : "Present";
  return {
    school: e.institution,
    href: "#",
    degree: `${e.degree} — ${e.major}${e.gpa ? ` (GPA: ${e.gpa})` : ""}`,
    logoUrl: "",
    start: startYear,
    end: endYear,
  };
});

// Build projects from portfolio projects
const projectItems = p.projects.map((proj: Project) => {
  const startDate = new Date(proj.startDate);
  const dateStr = proj.customTimeline || startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return {
    title: proj.title,
    href: proj.demoUrl && proj.demoUrl !== "#" ? proj.demoUrl : proj.repoUrl,
    dates: dateStr,
    active: proj.status === "completed",
    description: proj.description,
    technologies: proj.techStack,
    links: [
      ...(proj.demoUrl && proj.demoUrl !== "#"
        ? [{ type: "Website", href: proj.demoUrl, icon: <Icons.globe className="size-3" /> }]
        : []),
      ...(proj.repoUrl
        ? [{ type: "Source", href: proj.repoUrl, icon: <Icons.github className="size-3" /> }]
        : []),
    ],
    image: "",
    video: "",
  };
});

// Build hackathons/achievements from achievements (awards + some certifications)
const hackathonItems = p.achievements
  .filter((a: Achievement) => a.category === "award")
  .map((a: Achievement) => ({
    title: a.title,
    dates: new Date(a.date).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    location: a.issuer,
    description: a.description || "",
    image: a.image || "",
    links: a.credentialUrl
      ? [{ title: "Credential", icon: <Icons.globe className="h-4 w-4" />, href: a.credentialUrl }]
      : [],
  }));

// Add all certifications to achievements timeline
const certItems = p.achievements
  .filter((a: Achievement) => a.category === "certification")
  .map((a: Achievement) => ({
    title: a.title,
    dates: new Date(a.date).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    location: a.issuer,
    description: `Certification from ${a.issuer}`,
    image: "",
    links: a.credentialUrl
      ? [{ title: "Verify", icon: <Icons.globe className="h-4 w-4" />, href: a.credentialUrl }]
      : [],
  }));

const allHackathons = [...hackathonItems, ...certItems];

// Find social links by platform
const findSocial = (platform: string) => p.personal.socialLinks.find(
  (s: SocialLink) => s.platform.toLowerCase() === platform.toLowerCase()
);

const github = findSocial("GitHub");
const linkedin = findSocial("LinkedIn");
const twitter = findSocial("Twitter");
const instagram = findSocial("Instagram");

export const DATA = {
  name: p.personal.name,
  initials: p.personal.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase(),
  url: p.personal.website,
  location: p.personal.location,
  locationLink: `https://www.google.com/maps/place/${encodeURIComponent(p.personal.location)}`,
  description: p.personal.subtitle,
  summary: p.personal.bio,
  avatarUrl: p.personal.avatar,
  skills: allSkills,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: p.personal.resumeUrl || "/resume", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: p.personal.email,
    tel: p.personal.phone,
    social: {
      GitHub: {
        name: "GitHub",
        url: github?.url || "https://github.com/Arfazrll",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: linkedin?.url || "https://linkedin.com/in/syahril-arfian-almazril",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: twitter?.url || "https://twitter.com/arfazrll",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: instagram?.url || "https://instagram.com/arfazrll",
        icon: Icons.github, // Reuse available icon — no dedicated Instagram icon in Icons
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: `mailto:${p.personal.email}`,
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: workExperiences,
  education: educationItems,
  projects: projectItems,
  hackathons: allHackathons,
} as const;
