"use client";
import Link from "next/link";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { portfolioData } from "@/data/portfolio";
import { useTranslation } from "@/i18n/context";

export default function SkillsPage() {
    const { t } = useTranslation();
    const { techStack, hardSkills, softSkills, tools } = portfolioData;

    // Group hard skills by category
    const hardSkillsByCategory: Record<string, typeof hardSkills> = {};
    hardSkills.forEach((skill) => {
        const cat = skill.category;
        if (!hardSkillsByCategory[cat]) hardSkillsByCategory[cat] = [];
        hardSkillsByCategory[cat].push(skill);
    });

    const categoryLabels: Record<string, string> = {
        ai: "AI & Machine Learning",
        software: "Software Engineering",
        data: "Data & Analytics",
        devops: "DevOps & Infrastructure",
        other: "Other Technical Skills",
    };

    const levelColors: Record<string, string> = {
        expert: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
        advanced: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        intermediate: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
        beginner: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
    };

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.skillsExpertise}</h1>
                <p className="text-muted-foreground">
                    {t.skillsDescription}
                </p>
            </div>

            {/* Tech Stack */}
            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">{t.techStack}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="border bg-background border-border rounded-xl p-3 flex items-center gap-3 hover:ring-2 hover:ring-border/50 transition-all"
                        >
                            {tech.icon && <img src={tech.icon} alt={tech.name} className="size-5 rounded overflow-hidden object-contain dark:invert" />}
                            <span className="text-sm font-medium text-foreground">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools */}
            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">{t.tools}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="border bg-background border-border rounded-xl p-3 flex items-center gap-3 hover:ring-2 hover:ring-border/50 transition-all"
                        >
                            {tool.icon && <img src={tool.icon} alt={tool.name} className="size-5 rounded overflow-hidden object-contain dark:invert" />}
                            <span className="text-sm font-medium text-foreground">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Hard Skills by Category */}
            <section className="flex flex-col gap-6">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="hard-skills" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-0">
                            <h2 className="text-xl font-bold">{t.hardSkills}</h2>
                            <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="pt-6">
                            <div className="flex flex-col gap-6">
                                {Object.entries(hardSkillsByCategory).map(([category, skills]) => (
                                    <div key={category} className="flex flex-col gap-3">
                                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                            {categoryLabels[category] || category}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="border bg-background border-border rounded-xl p-4 flex flex-col gap-2"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                                                        <span className={`text-[10px] font-medium uppercase px-2 py-0.5 rounded-full border ${levelColors[skill.level] || ""}`}>
                                                            {skill.level}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* Soft Skills */}
            <section className="flex flex-col gap-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="soft-skills" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-0">
                            <h2 className="text-xl font-bold">{t.softSkills}</h2>
                            <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {softSkills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="border bg-background border-border rounded-xl p-4 flex flex-col gap-1"
                                    >
                                        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                                        <p className="text-xs text-muted-foreground">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    );
}
