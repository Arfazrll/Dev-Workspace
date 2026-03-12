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
import { portfolioDataEn } from "@/data/portfolio-en";
import { portfolioDataId } from "@/data/portfolio-id";
import { PortfolioData, TechStackItem, Experience, Education, Project, Achievement, SocialLink } from "@/types";

// Helper: format date string to readable month/year
function formatDateRange(startDate: string, lang: "en" | "id", endDate?: string, isOngoing?: boolean): { start: string; end?: string } {
  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString(lang === "en" ? "en-US" : "id-ID", { month: "long", year: "numeric" });
  };
  return {
    start: formatDate(startDate),
    end: isOngoing ? (lang === "en" ? "Present" : "Sekarang") : endDate ? formatDate(endDate) : undefined,
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

const buildData = (p: PortfolioData, lang: "en" | "id") => {
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
      const dates = formatDateRange(e.startDate, lang, e.endDate, e.isOngoing);
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
    const endYear = e.isOngoing ? (lang === "en" ? "Present" : "Sekarang") : e.endDate ? new Date(e.endDate).getFullYear().toString() : (lang === "en" ? "Present" : "Sekarang");
    return {
      school: e.institution,
      href: "#",
      degree: e.degree,
      major: e.major,
      gpa: e.gpa,
      logoUrl: e.logo,
      start: startYear,
      end: endYear,
    };
  });

  // Build projects from portfolio projects
  const projectItems = p.projects.map((proj: Project) => {
    const startDate = new Date(proj.startDate);
    const dateStr = proj.customTimeline || startDate.toLocaleDateString(lang === "en" ? "en-US" : "id-ID", { month: "short", year: "numeric" });
    return {
      title: proj.title,
      href: `/projects/${proj.slug}`,
      dates: dateStr,
      active: proj.status === "completed",
      description: proj.description,
      techStack: proj.techStack || [],
      tools: proj.tools || [],
      demoUrl: proj.demoUrl || "",
      repoUrl: proj.repoUrl || "",
      links: [
        ...(proj.demoUrl && proj.demoUrl !== "#"
          ? [{ type: lang === "en" ? "Website" : "Situs Web", href: proj.demoUrl, icon: <Icons.globe className="size-3" /> }]
          : []),
        ...(proj.repoUrl
          ? [{ type: lang === "en" ? "Source" : "Sumber", href: proj.repoUrl, icon: <Icons.github className="size-3" /> }]
          : []),
      ],
      image: "",
      video: "",
      images: proj.images || [],
      slug: proj.slug,
      longDescription: proj.longDescription || "",
      features: proj.features || [],
      highlights: proj.highlights || [],
      installation: proj.installation || [],
      challengesAndSolutions: proj.challengesAndSolutions || [],
      category: proj.category || "",
      status: proj.status || "ongoing",
      team: proj.team,
      role: proj.role,
      startDate: proj.startDate,
      customTimeline: proj.customTimeline,
    };
  });

  // Build hackathons/achievements from achievements (awards + some certifications)
  const hackathonItems = p.achievements
    .filter((a: Achievement) => a.category === "award")
    .map((a: Achievement) => ({
      title: a.title,
      dates: new Date(a.date).getFullYear().toString(),
      location: a.issuer,
      description: a.description || "",
      image: a.image || "",
      type: "award",
      links: a.credentialUrl
        ? [{ title: lang === "en" ? "Credential" : "Sertifikat", icon: <Icons.globe className="h-4 w-4" />, href: a.credentialUrl }]
        : [],
    }));

  // Add all certifications to achievements timeline
  const certItems = p.achievements
    .filter((a: Achievement) => a.category === "certification")
    .map((a: Achievement) => ({
      title: a.title,
      dates: new Date(a.date).getFullYear().toString(),
      location: a.issuer,
      description: lang === "en" ? `Certification from ${a.issuer}` : `Sertifikasi dari ${a.issuer}`,
      image: a.image || "",
      type: "certification",
      links: a.credentialUrl
        ? [{ title: lang === "en" ? "Verify" : "Verifikasi", icon: <Icons.globe className="h-4 w-4" />, href: a.credentialUrl }]
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

  return {
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
      { href: "/", icon: HomeIcon, label: lang === "en" ? "Home" : "Beranda" },
      { href: p.personal.resumeUrl || "/resume", icon: FileTextIcon, label: lang === "en" ? "Resume" : "Ringkasan" },
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
          navbar: false,
        },
        Instagram: {
          name: "Instagram",
          url: instagram?.url || "https://instagram.com/arfazrll",
          icon: Icons.instagram,
          navbar: true,
        },
        email: {
          name: lang === "en" ? "Send Email" : "Kirim Email",
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
    gallery: p.gallery,
    blogs: p.blogs,
    faqs: p.faqs,
    tools: p.tools,
    softSkills: p.softSkills,
    hardSkills: p.hardSkills,
    techStack: p.techStack,
  };
};

export const DATA = {
  en: buildData(portfolioDataEn, "en"),
  id: buildData(portfolioDataId, "id"),
};
