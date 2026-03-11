"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";

const BLUR_FADE_DELAY = 0.04;

interface GalleryRowProps {
    items: typeof portfolioData.gallery;
    rowIndex: number;
}

function GalleryRow({ items, rowIndex }: GalleryRowProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Duplicate items for infinite effect (3 sets for safety)
    const duplicatedItems = [...items, ...items, ...items];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount * 0.8, behavior: "smooth" });
        }
    };

    const handleInfiniteScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const singleSetWidth = scrollWidth / 3;

        if (scrollLeft < singleSetWidth * 0.5) {
            scrollRef.current.scrollLeft = scrollLeft + singleSetWidth;
        } else if (scrollLeft > singleSetWidth * 2.5 - clientWidth) {
            scrollRef.current.scrollLeft = scrollLeft - singleSetWidth;
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            // Offset rows slightly for a more dynamic look
            scrollRef.current.scrollLeft = singleSetWidth + (rowIndex * 100);
        }
    }, [rowIndex]);

    return (
        <div className="relative group/row w-full py-2">
            {/* Desktop Navigation Buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10 text-white hover:bg-zinc-800 transition-all opacity-0 group-hover/row:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
            >
                <ChevronLeft className="size-5" />
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10 text-white hover:bg-zinc-800 transition-all opacity-0 group-hover/row:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
            >
                <ChevronRight className="size-5" />
            </button>

            <div
                ref={scrollRef}
                onScroll={handleInfiniteScroll}
                className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth items-stretch px-4"
            >
                {duplicatedItems.map((item, idx) => (
                    <div
                        key={`${item.id}-${rowIndex}-${idx}`}
                        className="relative flex-none w-[200px] sm:w-[280px] aspect-[1.2/1] rounded-3xl overflow-hidden border border-border group/item bg-muted"
                    >
                        <img
                            src={item.url}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                        />
                        {/* Caption Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                            <span className="text-[10px] font-semibold text-primary/90 uppercase tracking-[0.2em] mb-1 drop-shadow-md">
                                {item.category}
                            </span>
                            <h3 className="text-white font-bold text-base sm:text-lg leading-tight drop-shadow-lg mb-1">
                                {item.title}
                            </h3>
                            <p className="text-white/80 text-[10px] sm:text-xs line-clamp-2 drop-shadow-md font-medium leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function GalleryPage() {
    const { t } = useTranslation();
    const allItems = portfolioData.gallery;

    // Split 15 items into 3 rows of 5
    const row1 = allItems.slice(0, 5);
    const row2 = allItems.slice(5, 10);
    const row3 = allItems.slice(10, 15);

    return (
        <div className="flex flex-col gap-4 py-8 overflow-hidden">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full px-4 sm:px-0">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
                >
                    <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                    {t.backToHome}
                </Link>
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-heading">
                        {t.gallery}
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-[700px]">
                        A visual journey through my experiences, research, and professional milestones.
                    </p>
                </div>
                <div className="h-px bg-border/40 w-full mt-1" />
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 mt-0">
                <GalleryRow items={row1} rowIndex={0} />
                <GalleryRow items={row2} rowIndex={1} />
                <GalleryRow items={row3} rowIndex={2} />
            </div>
        </div>
    );
}
