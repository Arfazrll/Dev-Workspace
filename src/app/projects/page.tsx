"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, X, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { useState, useMemo, useEffect } from "react";

const BLUR_FADE_DELAY = 0.04;
const PROJECTS_PER_PAGE = 5;

function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, "-");
}

export default function ProjectsPage() {
    const { t, lang } = useTranslation();
    const data = DATA[lang as keyof typeof DATA] || DATA.en;
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Reset pagination when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const filteredProjects = useMemo(() => {
        return data.projects.filter((project: any) => {
            const searchLower = searchQuery.toLowerCase();
            const matchesTitle = project.title.toLowerCase().includes(searchLower);
            const matchesTech = project.techStack.some((tech: string) =>
                tech.toLowerCase().includes(searchLower)
            );
            return matchesTitle || matchesTech;
        });
    }, [searchQuery, data.projects]);

    const paginatedProjects = useMemo(() => {
        const start = (currentPage - 1) * PROJECTS_PER_PAGE;
        return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
    }, [filteredProjects, currentPage]);

    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

    return (
        <div className="flex flex-col gap-8 md:gap-12 pb-12">
            <div className="flex flex-col gap-6">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
                >
                    <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                    {t.backToHome}
                </Link>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.allProjects}</h1>
                        <p className="text-muted-foreground">
                            {t.allProjectsDescription(data.projects.length)}
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder={t.searchProjects}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-muted/20 border border-border/50 rounded-xl py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="size-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {filteredProjects.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[900px] mx-auto auto-rows-fr w-full">
                        {paginatedProjects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                                className="h-full"
                            >
                                <ProjectCard
                                    href={project.href}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.techStack}
                                    image={project.image}
                                    images={project.images || []}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-between mt-12 w-full max-w-[900px] mx-auto">
                            <span className="text-sm font-medium text-muted-foreground tabular-nums opacity-60">
                                {lang === "en" ? `Page ${currentPage} of ${totalPages}` : `Halaman ${currentPage} dari ${totalPages}`}
                            </span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1))}
                                    className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-muted/20 hover:bg-muted/40 border border-border/50 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={currentPage === 1 && totalPages <= 1}
                                >
                                    <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                                    {t.previous}
                                </button>
                                <button
                                    onClick={() => setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1))}
                                    className="flex items-center gap-2 px-5 py-2 text-sm font-black bg-muted/20 hover:bg-muted/40 border border-border/80 rounded-xl text-foreground transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={currentPage === totalPages && totalPages <= 1}
                                >
                                    {t.next}
                                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="bg-muted/30 p-4 rounded-full mb-4">
                        <Search className="size-8 text-muted-foreground opacity-30" />
                    </div>
                    <h3 className="text-xl font-bold">{t.noProjectsFound}</h3>
                    <p className="text-muted-foreground mt-1 max-w-xs mx-auto text-sm">
                        {t.noProjectsMatching}
                    </p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="mt-6 px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                        {t.clearSearch}
                    </button>
                </div>
            )}
        </div>
    );
}
