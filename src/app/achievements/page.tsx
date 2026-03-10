/* eslint-disable @next/next/no-img-element */
"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { ChevronLeft } from "lucide-react";
import { useTranslation } from "@/i18n/context";

export default function AchievementsPage() {
    const { t } = useTranslation();

    // Separate awards and certifications
    const awards = DATA.hackathons.filter((h) => {
        return h.description && !h.description.startsWith("Certification from");
    });
    const certifications = DATA.hackathons.filter((h) => {
        return h.description && h.description.startsWith("Certification from");
    });

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {t.allAchievementsTitle}
                </h1>
                <p className="text-muted-foreground">
                    {t.allAchievementsDescription(DATA.hackathons.length)}
                </p>
            </div>

            {/* Awards Section */}
            {awards.length > 0 && (
                <section className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-border" />
                        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.awards}</h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>
                    <Timeline>
                        {awards.map((item) => (
                            <TimelineItem key={item.title + item.dates} className="w-full flex items-start justify-between gap-10">
                                <TimelineConnectItem className="flex items-start justify-center">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                                        />
                                    ) : (
                                        <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                                    )}
                                </TimelineConnectItem>
                                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                                    {item.dates && <time className="text-xs text-muted-foreground">{item.dates}</time>}
                                    {item.title && <h3 className="font-semibold leading-none">{item.title}</h3>}
                                    {item.location && <p className="text-sm text-muted-foreground">{item.location}</p>}
                                    {item.description && (
                                        <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">{item.description}</p>
                                    )}
                                    {item.links && item.links.length > 0 && (
                                        <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                                            {item.links.map((link, idx) => (
                                                <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                                                    <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                                                        {link.icon}
                                                        {link.title}
                                                    </Badge>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </section>
            )}

            {/* Certifications Section */}
            {certifications.length > 0 && (
                <section className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-border" />
                        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.certifications}</h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>
                    <Timeline>
                        {certifications.map((item) => (
                            <TimelineItem key={item.title + item.dates} className="w-full flex items-start justify-between gap-10">
                                <TimelineConnectItem className="flex items-start justify-center">
                                    <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                                </TimelineConnectItem>
                                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                                    {item.dates && <time className="text-xs text-muted-foreground">{item.dates}</time>}
                                    {item.title && <h3 className="font-semibold leading-none">{item.title}</h3>}
                                    {item.location && <p className="text-sm text-muted-foreground">{item.location}</p>}
                                    {item.links && item.links.length > 0 && (
                                        <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                                            {item.links.map((link, idx) => (
                                                <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                                                    <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                                                        {link.icon}
                                                        {link.title}
                                                    </Badge>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </section>
            )}
        </div>
    );
}
