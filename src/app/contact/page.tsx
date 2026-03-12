"use client";

import { useTranslation } from "@/i18n/context";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ChevronLeft, Mail, Github, Linkedin, Instagram, MessageSquare, Database } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
    const { t, lang } = useTranslation();
    const data = DATA[lang as keyof typeof DATA] || DATA.en;

    const socialLinks = [
        {
            name: "LinkedIn",
            url: data.contact.social.LinkedIn.url,
            icon: Linkedin,
            color: "group-hover:text-[#0A66C2]",
        },
        {
            name: "GitHub",
            url: data.contact.social.GitHub.url,
            icon: Github,
            color: "group-hover:text-foreground", // Adapted to theme
        },
        {
            name: "Instagram",
            url: data.contact.social.Instagram.url,
            icon: Instagram,
            color: "group-hover:text-[#E4405F]",
        },
        {
            name: "Discord",
            url: "https://discord.com/users/arfazrll",
            icon: MessageSquare,
            color: "group-hover:text-[#5865F2]",
        },
        {
            name: "Kaggle",
            url: "https://kaggle.com/arfazrll",
            icon: Database, // Brain wasn't imported initially, Database works as a clean alternative for Kaggle
            color: "group-hover:text-[#20BEFF]",
        },
        {
            name: "Email",
            url: `mailto:${data.contact.email}?subject=${encodeURIComponent("Inquiry regarding your Portfolio / Collaboration Opportunity")}&body=${encodeURIComponent("Dear Syahril Arfian Almazril,\n\nI recently viewed your portfolio and I am very impressed with your background in AI and Software Engineering.\n\nI would love to discuss a potential opportunity or collaboration with you regarding [insert topic here].\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your Name]\n[Your Company/Organization]")}`,
            icon: Mail,
            color: "group-hover:text-[#EA4335]",
        },
    ];

    return (
        <main className="min-h-dvh flex flex-col pt-12 md:pt-24 px-4 w-full max-w-2xl mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-2 w-fit inline-flex items-center gap-2 mb-8 group bg-background"
                >
                    <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                    {t.backToHome}
                </Link>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-col gap-2 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t.letsConnect}</h1>
                    <p className="text-muted-foreground text-lg">
                        {t.contactPlatformDescription}
                    </p>
                </div>
            </BlurFade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pb-20">
                {socialLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                        <BlurFade key={link.name} delay={BLUR_FADE_DELAY * 3 + idx * 0.1}>
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-background hover:bg-muted/50 hover:border-border/80 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-300"
                            >
                                <div className={`p-2.5 rounded-xl bg-muted group-hover:bg-background border border-transparent group-hover:border-border transition-colors duration-300 ${link.color}`}>
                                    <Icon className="size-6 transition-all duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                        {link.name}
                                    </span>
                                </div>
                            </Link>
                        </BlurFade>
                    );
                })}
            </div>
        </main>
    );
}
