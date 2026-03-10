import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "Technical skills, frameworks, tools, and expertise areas.",
};

export default function SkillsPage() {
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
                    Back to Home
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Expertise</h1>
                <p className="text-muted-foreground">
                    A complete overview of my technical stack, expertise areas, and tools.
                </p>
            </div>

            {/* Tech Stack */}
            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="border bg-background border-border rounded-xl p-3 flex items-center gap-3 hover:ring-2 hover:ring-border/50 transition-all"
                        >
                            <span className="text-sm font-medium text-foreground">{tech.name}</span>
                            <span className="text-[10px] text-muted-foreground uppercase ml-auto">{tech.category}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Hard Skills by Category */}
            <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Hard Skills</h2>
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
            </section>

            {/* Soft Skills */}
            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Soft Skills</h2>
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
            </section>

            {/* Tools */}
            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="border bg-background border-border rounded-xl p-3 flex items-center gap-3 hover:ring-2 hover:ring-border/50 transition-all"
                        >
                            <span className="text-sm font-medium text-foreground">{tool.name}</span>
                            <span className="text-[10px] text-muted-foreground uppercase ml-auto">{tool.category}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
