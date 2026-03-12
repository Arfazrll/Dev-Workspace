"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { useTranslation } from "@/i18n/context";
import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Calendar, ListFilter, Check } from "lucide-react";

interface GalleryRowProps {
    items: any[];
    rowIndex: number;
    startIndex: number;
    onImageClick: (index: number) => void;
}

function GalleryRow({ items, rowIndex, startIndex, onImageClick }: GalleryRowProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
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

        if (scrollLeft <= 0) {
            scrollRef.current.scrollLeft = scrollLeft + singleSetWidth;
        } else if (scrollLeft >= singleSetWidth * 2) {
            scrollRef.current.scrollLeft = scrollLeft - singleSetWidth;
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = singleSetWidth + (rowIndex * 100);
        }
    }, [rowIndex]);

    return (
        <div className="relative group/row w-full py-2">
            <button
                onClick={() => scroll("left")}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-2xl bg-background/90 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-all opacity-0 group-hover/row:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
            >
                <ChevronLeft className="size-5" />
            </button>

            <button
                onClick={() => scroll("right")}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-2xl bg-background/90 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-all opacity-0 group-hover/row:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
            >
                <ChevronRight className="size-5" />
            </button>

            <div
                ref={scrollRef}
                onScroll={handleInfiniteScroll}
                className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth items-stretch px-4 sm:px-0"
            >
                {duplicatedItems.map((item, idx) => {
                    const originalIndex = startIndex + (idx % items.length);
                    return (
                        <div
                            key={`${item.id}-${rowIndex}-${idx}`}
                            className="relative flex-none w-[200px] sm:w-[280px] aspect-[1.3/1] rounded-3xl overflow-hidden border border-border group/item bg-muted cursor-pointer transition-all duration-500 hover:border-primary/30"
                            onClick={() => onImageClick(originalIndex)}
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover/item:scale-110 group-hover/item:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg sm:text-xl leading-tight mb-2 translate-y-4 md:translate-y-8 group-hover/item:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-xs sm:text-sm line-clamp-2 font-medium leading-relaxed translate-y-4 md:translate-y-8 group-hover/item:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function GalleryPage() {
    const { t, lang } = useTranslation();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const data = DATA[lang as keyof typeof DATA] || DATA.en;

    const sortedItems = useMemo(() => {
        return [...data.gallery].sort((a: any, b: any) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });
    }, [sortOrder, data.gallery]);

    const row1 = sortedItems.slice(0, 5);
    const row2 = sortedItems.slice(5, 10);
    const row3 = sortedItems.slice(10, 15);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navigate = (direction: "prev" | "next") => {
        if (selectedImageIndex === null) return;
        const total = sortedItems.length;
        if (direction === "prev") {
            setSelectedImageIndex((selectedImageIndex - 1 + total) % total);
        } else {
            setSelectedImageIndex((selectedImageIndex + 1) % total);
        }
    };

    return (
        <div className="flex flex-col gap-8 py-8 md:py-12 overflow-hidden min-h-screen bg-background/50">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex flex-col gap-8">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <Link
                            href="/"
                            className="text-xs font-bold text-muted-foreground hover:text-primary transition-all border border-border/50 rounded-xl px-4 py-2 inline-flex items-center gap-2 w-fit group bg-muted/20 hover:bg-muted/40 uppercase tracking-widest"
                        >
                            <ChevronLeft className="size-3 group-hover:-translate-x-1 transition-transform" />
                            {t.backToHome}
                        </Link>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 flex-wrap">
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter font-heading text-foreground">
                                    {t.gallery}
                                </h1>
                                <span className="text-sm md:text-base font-bold px-4 py-1.5 rounded-full bg-foreground text-background dark:bg-zinc-900 dark:text-white/90 dark:border dark:border-white/10 uppercase tracking-[0.2em] shadow-2xl">
                                    {sortedItems.length} {t.posts}
                                </span>
                            </div>
                            <p className="text-muted-foreground text-sm md:text-xl max-w-[600px] font-medium leading-relaxed opacity-80">
                                {t.galleryDescription}
                            </p>
                        </div>
                    </div>

                    <div className="relative" ref={sortRef}>
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-muted/50 hover:bg-muted border border-border transition-all duration-300 group shadow-lg w-fit justify-start"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-1 px-1.5 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                                    <ListFilter className="size-4 text-muted-foreground group-hover:text-foreground" />
                                </div>
                                <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground uppercase tracking-wider">
                                    {sortOrder === "newest" ? t.newestFirst : t.oldestFirst}
                                </span>
                            </div>
                            <ChevronRight className={`size-4 text-muted-foreground/30 transition-transform duration-300 ${isSortOpen ? 'rotate-90' : 'rotate-0'}`} />
                        </button>

                        <AnimatePresence>
                            {isSortOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-0 mt-3 w-64 z-[80] p-2 bg-popover/95 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl overflow-hidden"
                                >
                                    <div className="flex flex-col gap-1">
                                        <button
                                            onClick={() => { setSortOrder("newest"); setIsSortOpen(false); }}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group/opt ${sortOrder === "newest" ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-wider">{t.newestFirst}</span>
                                            {sortOrder === "newest" && <Check className="size-4 text-primary" />}
                                        </button>
                                        <button
                                            onClick={() => { setSortOrder("oldest"); setIsSortOpen(false); }}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group/opt ${sortOrder === "oldest" ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-wider">{t.oldestFirst}</span>
                                            {sortOrder === "oldest" && <Check className="size-4 text-primary" />}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="h-px bg-linear-to-r from-border/80 via-border/20 to-transparent w-full" />
            </div>

            <div className="flex flex-col gap-4">
                <GalleryRow items={row1} rowIndex={0} startIndex={0} onImageClick={setSelectedImageIndex} />
                <GalleryRow items={row2} rowIndex={1} startIndex={5} onImageClick={setSelectedImageIndex} />
                <GalleryRow items={row3} rowIndex={2} startIndex={10} onImageClick={setSelectedImageIndex} />
            </div>

            <AnimatePresence mode="wait">
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/40 backdrop-blur-xl"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-50">
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                                className="p-4 md:p-6 rounded-3xl bg-background/90 backdrop-blur-xl border border-border text-foreground hover:bg-muted transition-all pointer-events-auto group/nav shadow-2xl active:scale-95"
                            >
                                <ChevronLeft className="size-6 md:size-8 group-hover/nav:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                                className="p-4 md:p-6 rounded-3xl bg-background/90 backdrop-blur-xl border border-border text-foreground hover:bg-muted transition-all pointer-events-auto group/nav shadow-2xl active:scale-95"
                            >
                                <ChevronRight className="size-6 md:size-8 group-hover/nav:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-8 right-8 z-[110] p-4 bg-background/90 backdrop-blur-xl border border-border rounded-3xl text-foreground hover:bg-muted hover:rotate-90 transition-all duration-500 shadow-2xl active:scale-90"
                        >
                            <X className="size-6" />
                        </button>

                        <motion.div
                            key={selectedImageIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -30 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="relative flex flex-col bg-transparent border border-border/50 rounded-[2rem] shadow-[0_32px_128px_-32px_rgba(0,0,0,0.5)] overflow-hidden max-w-6xl w-full max-h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-1 overflow-hidden bg-transparent group/modal">
                                <motion.img
                                    src={sortedItems[selectedImageIndex].url}
                                    alt={sortedItems[selectedImageIndex].title}
                                    className="w-full h-full object-contain pointer-events-none p-4"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-16 pointer-events-none">
                                    <h2 className="text-3xl md:text-6xl font-[900] text-white tracking-tighter mb-4 drop-shadow-2xl leading-[0.9]">
                                        {sortedItems[selectedImageIndex].title}
                                    </h2>
                                    <p className="text-white/80 text-sm md:text-xl font-medium max-w-3xl leading-relaxed drop-shadow-xl opacity-90">
                                        {sortedItems[selectedImageIndex].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
