/* eslint-disable @next/next/no-img-element */
"use client";

import { portfolioData } from "@/data/portfolio";
import { useTranslation } from "@/i18n/context";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight, X, Calendar } from "lucide-react";

export default function GallerySection() {
    const { t } = useTranslation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const items = portfolioData.gallery;

    // Duplicate items to create infinite effect
    const duplicatedItems = [
        ...items,
        ...items,
        ...items
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
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    const navigate = (direction: "prev" | "next") => {
        if (selectedImageIndex === null) return;
        const total = items.length;
        if (direction === "prev") {
            setSelectedImageIndex((selectedImageIndex - 1 + total) % total);
        } else {
            setSelectedImageIndex((selectedImageIndex + 1) % total);
        }
    };

    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") setSelectedImageIndex(null);
                if (e.key === "ArrowLeft") navigate("prev");
                if (e.key === "ArrowRight") navigate("next");
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImageIndex]);

    return (
        <section id="gallery" className="w-full h-full py-4">
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
                            {t.viewAllGallery}
                            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                        </span>
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="h-px bg-border/40 w-full" />

                <div className="relative w-full -mt-2">
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
                        {duplicatedItems.map((item, index) => {
                            const originalIndex = index % items.length;
                            return (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="relative flex-none w-[200px] sm:w-[280px] aspect-[1.2/1] rounded-3xl overflow-hidden border border-border group cursor-pointer bg-muted transition-all duration-300"
                                    onClick={() => setSelectedImageIndex(originalIndex)}
                                >
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/98 backdrop-blur-2xl"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-50">
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                                className="p-4 md:p-6 rounded-3xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 text-white hover:bg-zinc-800 transition-all pointer-events-auto group/nav shadow-2xl active:scale-95"
                            >
                                <ChevronLeft className="size-6 md:size-8 group-hover/nav:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                                className="p-4 md:p-6 rounded-3xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 text-white hover:bg-zinc-800 transition-all pointer-events-auto group/nav shadow-2xl active:scale-95"
                            >
                                <ChevronRight className="size-6 md:size-8 group-hover/nav:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-8 right-8 z-[110] p-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl text-white hover:bg-zinc-800 hover:rotate-90 transition-all duration-500 shadow-2xl active:scale-90"
                        >
                            <X className="size-6" />
                        </button>

                        <motion.div
                            key={selectedImageIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -30 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="relative flex flex-col bg-card/50 border border-border/50 rounded-none shadow-[0_32px_128px_-32px_rgba(0,0,0,0.5)] overflow-hidden max-w-6xl w-full max-h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-1 overflow-hidden bg-black/60 group/modal">
                                <motion.img
                                    src={items[selectedImageIndex].url}
                                    alt={items[selectedImageIndex].title}
                                    className="w-full h-full object-contain pointer-events-none p-4"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-16 pointer-events-none">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-white/60 uppercase tracking-widest">
                                            <Calendar className="size-4" />
                                            {new Date(items[selectedImageIndex].date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-6xl font-[900] text-white tracking-tighter mb-4 drop-shadow-2xl leading-[0.9]">
                                        {items[selectedImageIndex].title}
                                    </h2>
                                    <p className="text-white/80 text-sm md:text-xl font-medium max-w-3xl leading-relaxed drop-shadow-xl opacity-90">
                                        {items[selectedImageIndex].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
