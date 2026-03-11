"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
                >
                    <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                    {t.backToHome}
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.allProjects}</h1>
                <p className="text-muted-foreground">
                    {t.allProjectsDescription(DATA.projects.length)}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
                {DATA.projects.map((project, id) => (
                    <BlurFade
                        key={project.title}
                        delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                        className="h-full"
                    >
                        <ProjectCard
                            href={`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`}
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            images={project.images}
                            links={project.links}
                        />
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}
