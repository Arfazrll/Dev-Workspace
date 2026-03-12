/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from "@/i18n/context";

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none relative z-10" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-background overflow-hidden object-contain flex-none relative z-10"
            onError={() => setImageError(true)}
        />
    );
}

export default function ExperiencePage() {
    const { t, lang } = useTranslation();
    const data = DATA[lang as keyof typeof DATA] || DATA.en;

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.allExperience}</h1>
                <p className="text-muted-foreground">
                    {t.experienceDescription(data.work.length)}
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full grid gap-6 relative before:absolute before:inset-y-0 before:left-4 md:before:left-5 before:w-px before:bg-border/60">
                {data.work.map((work, index) => (
                    <AccordionItem
                        key={`${work.company}-${index}`}
                        value={`${work.company}-${index}`}
                        className="w-full border-b-0 grid gap-2"
                    >
                        <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 gap-x-3 justify-between w-full text-left">
                                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                    <LogoImage src={work.logoUrl} alt={work.company} />
                                    <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                                        <div className="font-semibold leading-tight flex items-center gap-2">
                                            {work.company}
                                            <span className="relative inline-flex items-center w-3.5 h-3.5">
                                                <ChevronRight
                                                    className={cn(
                                                        "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                                                        "translate-x-0 opacity-0",
                                                        "group-hover:translate-x-1 group-hover:opacity-100",
                                                        "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                                                    )}
                                                />
                                                <ChevronDown
                                                    className={cn(
                                                        "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                                                        "opacity-0 rotate-0",
                                                        "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                                                    )}
                                                />
                                            </span>
                                        </div>
                                        <div className="font-sans text-sm text-muted-foreground">
                                            {work.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground sm:text-right flex-none ml-11 sm:ml-0">
                                    <span>
                                        {work.start} - {work.end ?? t.present}
                                    </span>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                            {work.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
