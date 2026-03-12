"use client";
import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { useTranslation } from "@/i18n/context";

export default function ContactSection() {
  const { t, lang } = useTranslation();
  const data = DATA[lang as keyof typeof DATA] || DATA.en;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{t.contact}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.getInTouch}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {t.contactDescription}{" "}
          <Link
            href={data.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            LinkedIn
          </Link>{" "}
          {t.contactOr}{" "}
          <Link
            href={`mailto:${data.contact.email}?subject=${encodeURIComponent(t.contactSubject)}&body=${encodeURIComponent(t.contactBody)}`}
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {t.contactEmail}
          </Link>
          . {t.contactEnding}
        </p>
      </div>
    </div>
  );
}
