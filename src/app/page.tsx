"use client";
/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import GallerySection from "@/components/section/gallery-section";
import { ArrowUpRight, BadgeCheck, Briefcase, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { RealTimeClock } from "@/components/real-time-clock";

const BLUR_FADE_DELAY = 0.04;

const homepageTechStackAI = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain' },
  { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow' },
  { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas' },
  { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
];

const homepageTechStackSoftware = [
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
];

const homepageHardSkills = [
  { name: 'Data Science', level: 'expert' },
  { name: 'Machine Learning', level: 'advanced' },
  { name: 'Deep Learning', level: 'advanced' },
  { name: 'NLP', level: 'advanced' },
  { name: 'Full Stack Developer', level: 'expert' },
  { name: 'System Architecture', level: 'intermediate' },
];

const levelColors: Record<string, string> = {
  expert: "border-green-500/50 ring-green-500/20",
  advanced: "border-blue-500/50 ring-blue-500/20",
  intermediate: "border-amber-500/50 ring-amber-500/20",
  beginner: "border-gray-500/50 ring-gray-500/20",
};

export default function Page() {
  const { t } = useTranslation();
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl leading-tight">
                  <span className="block">{t.heroPrefix}</span>
                  <span>{DATA.name}</span>
                  <BadgeCheck
                    className="inline-block ml-2 size-7 md:size-9 text-[#1DA1F2] -mt-1"
                    fill="currentColor"
                    stroke="white"
                  />
                </h1>
              </BlurFade>
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-muted-foreground pt-3">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for opportunity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-l pl-4 border-border ml-1">
                    <span className="font-mono pt-0.5">
                      <RealTimeClock />
                    </span>
                  </div>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t.about}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-justify font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t.workExperience}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t.education}</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t.skills}</h2>
          </BlurFade>
          {/* Tech Stack */}
          <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.techStack}</h3>
              <div className="flex flex-wrap gap-2">
                {homepageTechStackAI.map((skill) => (
                  <div key={skill.name} className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="size-4 rounded overflow-hidden object-contain dark:invert" />}
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
                {homepageTechStackSoftware.map((skill) => (
                  <div key={skill.name} className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="size-4 rounded overflow-hidden object-contain dark:invert" />}
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          {/* Tools */}
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.tools.slice(0, 6).map((tool) => (
                  <div key={tool.name} className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                    {tool.icon && <img src={tool.icon} alt={tool.name} className="size-4 rounded overflow-hidden object-contain dark:invert" />}
                    <span className="text-foreground text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          {/* Hard Skills */}
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.hardSkills}</h3>
              <div className="flex flex-wrap gap-2">
                {homepageHardSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`border bg-background ${levelColors[skill.level] || "border-border ring-border/20"} ring-2 rounded-xl h-8 w-fit px-4 flex items-center gap-2 transition-colors duration-300`}
                  >
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          {/* Soft Skills */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.softSkills}</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.softSkills.slice(0, 6).map((skill) => (
                  <div key={skill.name} className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center">
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
            <div className="flex justify-center">
              <Link
                href="/skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 w-fit flex items-center gap-1.5 group"
              >
                {t.viewAllSkills}
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="gallery">
        <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
          <GallerySection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
