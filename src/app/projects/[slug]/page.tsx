"use client";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/i18n/context";
import { notFound } from "next/navigation";
import { use, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, "-");
}

export default function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const { t } = useTranslation();
    const project = portfolioData.projects.find((p) => slugify(p.title) === slug);

    if (!project) {
        notFound();
    }

    const startDate = new Date(project.startDate);
    const dateStr =
        project.customTimeline ||
        startDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    const images = project.images || [];

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [images.length]);

    const displayImage = images[currentIndex];

    return (
        <div className="flex flex-col gap-8">
            {/* Back Navigation */}
            <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
            >
                <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                {t.backToProjects}
            </Link>

            {/* Header */}
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                        {project.category}
                    </Badge>
                    <Badge
                        variant="outline"
                        className={
                            project.status === "completed"
                                ? "text-xs border-green-500/30 text-green-700 dark:text-green-400"
                                : "text-xs border-amber-500/30 text-amber-700 dark:text-amber-400"
                        }
                    >
                        {project.status === "completed" ? t.completed : t.inProgress}
                    </Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {project.title}
                </h1>
                <p className="text-muted-foreground text-lg">{project.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{dateStr}</span>
                    {project.team && <span>• Team: {project.team}</span>}
                    {project.role && <span>• Role: {project.role}</span>}
                </div>
            </div>

            {/* Project Image Carousel */}
            {images.length > 0 && !imageError && (
                <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden bg-muted border border-border">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={displayImage}
                            src={displayImage}
                            alt={project.title}
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    </AnimatePresence>
                </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3">
                {project.demoUrl && project.demoUrl !== "#" && (
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        <ExternalLink className="size-4" />
                        {t.liveDemo}
                    </Link>
                )}
                {project.repoUrl && (
                    <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
                    >
                        <Github className="size-4" />
                        {t.sourceCode}
                    </Link>
                )}
            </div>

            {/* Long Description */}
            {project.longDescription && (
                <section className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold">{t.aboutThisProject}</h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                        {project.longDescription}
                    </p>
                </section>
            )}

            {/* Tech Stack */}
            <section className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">{t.techStack}</h2>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </section>

            {/* Tools */}
            {project.tools.length > 0 && (
                <section className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold">{t.toolsUsed}</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                                {tool}
                            </Badge>
                        ))}
                    </div>
                </section>
            )}

            {/* Features */}
            {project.features.length > 0 && (
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">{t.keyFeatures}</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {project.features.map((feature) => (
                            <div
                                key={feature.title}
                                className="border border-border rounded-xl p-4 flex flex-col gap-3 bg-background"
                            >
                                <h3 className="font-semibold text-foreground">
                                    {feature.title}
                                </h3>
                                <ul className="space-y-2">
                                    {feature.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                                        >
                                            <span className="text-muted-foreground/50 mt-1.5 text-xs">▸</span>
                                            <span>{item.replace(/\*\*(.*?)\*\*/g, "$1")}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Highlights */}
            {project.highlights.length > 0 && (
                <section className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold">{t.highlights}</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs">
                                {highlight}
                            </Badge>
                        ))}
                    </div>
                </section>
            )}

            {/* Installation */}
            {project.installation.length > 0 && (
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">{t.installation}</h2>
                    {project.installation.map((step) => (
                        <div key={step.title} className="flex flex-col gap-2">
                            <h3 className="text-sm font-semibold text-muted-foreground">
                                {step.title}
                            </h3>
                            <pre className="bg-muted/50 dark:bg-muted/30 border border-border rounded-lg p-4 text-sm font-mono text-foreground overflow-x-auto">
                                <code>{step.code}</code>
                            </pre>
                        </div>
                    ))}
                </section>
            )}

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions.length > 0 && (
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">{t.challengesSolutions}</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {project.challengesAndSolutions.map((cs, idx) => (
                            <div
                                key={idx}
                                className="border border-border rounded-xl p-4 flex flex-col gap-3 bg-background"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                                        {t.challenge}
                                    </span>
                                    <p className="text-sm text-muted-foreground">{cs.problem}</p>
                                </div>
                                <div className="h-px bg-border" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                                        {t.solution}
                                    </span>
                                    <p className="text-sm text-muted-foreground">{cs.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
