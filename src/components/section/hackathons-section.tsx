/* eslint-disable @next/next/no-img-element */
"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const BLUR_FADE_DELAY = 0.04;
const DEFAULT_VISIBLE = 5;

export default function HackathonsSection() {
  const { t, lang } = useTranslation();
  const data = DATA[lang as keyof typeof DATA] || DATA.en;
  const visibleItems = data.hackathons.slice(0, DEFAULT_VISIBLE);

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">{t.achievementsLabel}</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.awardsCertifications}</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {t.achievementsDescription(data.hackathons.length)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {visibleItems.map((hackathon, index) => (
            <BlurFade
              key={hackathon.title + hackathon.dates}
              delay={BLUR_FADE_DELAY * (index + 1)}
            >
              <div className="group relative flex flex-col justify-center px-5 py-4 bg-muted/20 hover:bg-muted/30 border border-border/50 rounded-2xl transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-bold text-base md:text-lg tracking-tight truncate">
                      {hackathon.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{hackathon.location}</span>
                      <span className="size-1 rounded-full bg-muted-foreground/30" />
                      <time className="tabular-nums">{hackathon.dates}</time>
                    </div>
                  </div>
                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="flex gap-2">
                      {hackathon.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          <ChevronRight className="size-5" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
        {data.hackathons.length > DEFAULT_VISIBLE && (
          <div className="flex justify-center mt-4">
            <Link
              href="/achievements"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 w-fit flex items-center gap-1.5 group"
            >
              {t.viewAllAchievements}
              <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
