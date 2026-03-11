/* eslint-disable @next/next/no-img-element */
"use client";

import { portfolioData } from "@/data/portfolio";
import { useTranslation } from "@/i18n/context";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function GallerySection() {
    const { t } = useTranslation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate items to create infinite effect
    const duplicatedItems = [
        ...portfolioData.gallery,
        ...portfolioData.gallery,
        ...portfolioData.gallery
    ];

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

        // If we reach near the start or end of the middle set, jump back to the middle
        const singleSetWidth = scrollWidth / 3;

        if (scrollLeft < singleSetWidth * 0.5) {
            scrollRef.current.scrollLeft = scrollLeft + singleSetWidth;
        } else if (scrollLeft > singleSetWidth * 2.5 - clientWidth) {
            scrollRef.current.scrollLeft = scrollLeft - singleSetWidth;
        }
    };

    useEffect(() => {
        // Initial scroll to the middle set
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    return (
        <section id="gallery" className="w-full h-full py-12">
            <div className="flex flex-col gap-6 w-full relative max-w-5xl mx-auto px-2">
                <div className="flex items-end justify-between px-2">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                            {t.gallery}
                        </h2>
                    </div>
                    <Link
                        href="/gallery"
                        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                        <span className="relative overflow-hidden pt-1">
                            {t.viewAll}
                            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                        </span>
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="h-px bg-border/40 w-full" />

                <div className="relative w-full -mt-2">
                    {/* Navigation Buttons - Circular Minimalist */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-1 sm:-left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10 text-white hover:bg-zinc-800 transition-all shadow-xl flex items-center justify-center pointer-events-auto"
                    >
                        <ChevronLeft className="size-5" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-1 sm:-right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10 text-white hover:bg-zinc-800 transition-all shadow-xl flex items-center justify-center pointer-events-auto"
                    >
                        <ChevronRight className="size-5" />
                    </button>

                    <div
                        ref={scrollRef}
                        onScroll={handleInfiniteScroll}
                        className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth items-stretch py-4"
                    >
                        {duplicatedItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="relative flex-none w-[200px] sm:w-[280px] aspect-[1.2/1] rounded-3xl overflow-hidden border border-border group cursor-pointer bg-muted transition-all duration-300"
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
