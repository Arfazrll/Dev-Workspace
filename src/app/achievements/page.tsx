/* eslint-disable @next/next/no-img-element */
"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ChevronLeft, ChevronRight, Search, X, ExternalLink, FileText, Image as ImageIcon } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { useState, useMemo, useEffect } from "react";

export default function AchievementsPage() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCert, setSelectedCert] = useState<{ title: string; image: string; type: string } | null>(null);
    const [certPage, setCertPage] = useState(1);
    const CERTS_PER_PAGE = 5;
    const BLUR_FADE_DELAY = 0.05;

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    // Reset pagination when search changes
    useEffect(() => {
        setCertPage(1);
    }, [searchQuery]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [certPage]);

    // Filter awards and certifications based on search query
    const filteredAwards = useMemo(() => {
        const awards = DATA.hackathons.filter((h) => h.type === "award");
        if (!searchQuery) return awards;
        return awards.filter(
            (h) =>
                h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                h.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const filteredCertifications = useMemo(() => {
        const certifications = DATA.hackathons.filter((h) => h.type === "certification");
        if (!searchQuery) return certifications;
        return certifications.filter(
            (h) =>
                h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                h.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const paginatedCertifications = useMemo(() => {
        const start = (certPage - 1) * CERTS_PER_PAGE;
        return filteredCertifications.slice(start, start + CERTS_PER_PAGE);
    }, [filteredCertifications, certPage]);

    const totalCertPages = Math.ceil(filteredCertifications.length / CERTS_PER_PAGE);

    const renderCard = (item: any, index: number, isCarousel = false) => {
        const rawPath = item.image || "";
        const lowerPath = rawPath.toLowerCase();

        // Robust extension detection
        const isPdf = lowerPath.endsWith('.pdf');
        const encodedPath = encodeURI(rawPath);

        return (
            <BlurFade key={item.title + item.dates} delay={BLUR_FADE_DELAY * (index + 1)}>
                <div
                    className={`group flex flex-col p-4 bg-muted/10 hover:bg-muted/20 border border-border/50 rounded-2xl transition-all duration-300 h-full cursor-pointer ${isCarousel ? "w-[280px] sm:w-full shrink-0" : "w-full"
                        }`}
                    onClick={() => setSelectedCert({ title: item.title, image: rawPath, type: item.type })}
                >
                    {/* Certificate/Image Frame */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-black/40 mb-4 group-hover:border-primary/30 transition-colors">
                        {rawPath ? (
                            isPdf ? (
                                <div className="h-full w-full relative bg-white">
                                    <iframe
                                        src={`${encodedPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                        className="w-full h-full border-0 pointer-events-none"
                                        style={{
                                            transform: 'scale(1.25)',
                                            transformOrigin: 'top center',
                                            overflow: 'hidden'
                                        }}
                                        scrolling="no"
                                    />
                                    <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-[10px] font-bold h-6 shadow-sm border-primary/20">
                                            <FileText className="size-3 mr-1" />
                                            PDF PREVIEW
                                        </Badge>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={encodedPath}
                                    alt={item.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-muted/10">
                                <span className="text-xs text-muted-foreground italic text-center px-4 font-medium">No Preview Available</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/40 px-4 py-2">
                                <ExternalLink className="size-4 mr-2" />
                                {isPdf ? "Read Full PDF" : "View Full Image"}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 flex-1 p-1">
                        <h3 className="font-bold text-[15px] md:text-base line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-3">
                            <span className="font-medium truncate">{item.location}</span>
                            <span className="size-1 rounded-full bg-muted-foreground/30 shrink-0" />
                            <time className="tabular-nums shrink-0">{item.dates}</time>
                        </div>
                    </div>

                    {item.links && item.links.length > 0 && (
                        <div className="mt-4 flex gap-2">
                            {item.links.map((link: any, idx: number) => (
                                <Link
                                    href={link.href}
                                    key={idx}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Badge className="w-full flex justify-center py-2 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors gap-1.5 text-xs font-semibold">
                                        <ExternalLink className="size-3" />
                                        {link.title}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </BlurFade>
        );
    };

    return (
        <div className="flex flex-col gap-8 md:gap-12 max-w-5xl mx-auto px-4 py-8 relative min-h-screen">
            <div className="flex flex-col gap-6">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-1.5 inline-flex items-center gap-2 w-fit group"
                >
                    <ChevronLeft className="size-4 group-hover:-translate-x-px transition-transform" />
                    {t.backToHome}
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {t.allAchievementsTitle}
                        </h1>
                        <p className="text-muted-foreground text-sm md:text-lg max-w-[600px]">
                            {t.allAchievementsDescription(DATA.hackathons.length)}
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-muted/20 border border-border/50 rounded-xl py-3 md:py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            {filteredAwards.length > 0 && (
                <section className="flex flex-col gap-6 md:gap-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight shrink-0">{t.awards}</h2>
                        <div className="h-px flex-1 bg-border/60" />
                    </div>
                    {/* Mobile: Horizontal Scroll, Desktop: Grid */}
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 snap-x">
                        {filteredAwards.map((item, index) => renderCard(item, index, true))}
                    </div>
                </section>
            )}

            {/* Certifications Section */}
            {filteredCertifications.length > 0 && (
                <section className="flex flex-col gap-6 md:gap-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight shrink-0">{t.certifications}</h2>
                        <div className="h-px flex-1 bg-border/60" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {paginatedCertifications.map((item, index) => renderCard(item, index))}
                    </div>

                    {/* Pagination Controls */}
                    {totalCertPages > 1 && (
                        <div className="flex items-center justify-between mt-12 w-full">
                            <span className="text-sm font-medium text-muted-foreground tabular-nums opacity-60">
                                Page {certPage} of {totalCertPages}
                            </span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setCertPage(prev => (prev === 1 ? totalCertPages : prev - 1))}
                                    className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-muted/20 hover:bg-muted/40 border border-border/50 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 group"
                                >
                                    <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                                    {t.previous}
                                </button>
                                <button
                                    onClick={() => setCertPage(prev => (prev === totalCertPages ? 1 : prev + 1))}
                                    className="flex items-center gap-2 px-5 py-2 text-sm font-black bg-muted/20 hover:bg-muted/40 border border-border/80 rounded-xl text-foreground transition-all duration-300 group"
                                >
                                    {t.next}
                                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* Empty State */}
            {filteredAwards.length === 0 && filteredCertifications.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="bg-muted/30 p-5 rounded-full mb-5">
                        <Search className="size-10 text-muted-foreground opacity-40" />
                    </div>
                    <h3 className="text-2xl font-bold">No results found</h3>
                    <p className="text-muted-foreground mt-2 max-w-sm mx-auto text-lg">We couldn't find any achievements matching your search.</p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors"
                    >
                        Clear search
                    </button>
                </div>
            )}

            {/* Certificate Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-12 bg-background/95 backdrop-blur-xl animate-in fade-in duration-300">
                    <div
                        className={`relative flex flex-col bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 ${selectedCert.image.toLowerCase().endsWith('.pdf')
                            ? "w-full max-w-5xl h-[85vh] md:h-[90vh]"
                            : "w-auto max-w-[90vw] h-auto max-h-[85vh] md:max-h-[90vh]"
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-muted/20 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    {selectedCert.image.toLowerCase().endsWith('.pdf') ? (
                                        <FileText className="size-5 text-primary" />
                                    ) : (
                                        <ImageIcon className="size-5 text-primary" />
                                    )}
                                </div>
                                <h3 className="font-bold text-base md:text-lg line-clamp-1 truncate max-w-[180px] md:max-w-md">{selectedCert.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="p-1.5 hover:bg-muted rounded-xl transition-all hover:rotate-90 duration-300 ml-4"
                                aria-label="Close modal"
                            >
                                <X className="size-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-auto bg-black/5 flex flex-col">
                            {selectedCert.image ? (
                                selectedCert.image.toLowerCase().endsWith('.pdf') ? (
                                    <iframe
                                        src={`${encodeURI(selectedCert.image)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                        className="w-full h-full flex-1 border-0 bg-white"
                                        title={selectedCert.title}
                                    />
                                ) : (
                                    <div className="flex-1 flex items-center justify-center p-2 md:p-4">
                                        <img
                                            src={encodeURI(selectedCert.image)}
                                            alt={selectedCert.title}
                                            className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-lg border border-border/30 animate-in fade-in zoom-in-95 duration-500"
                                        />
                                    </div>
                                )
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-12 text-center">
                                    <FileText className="size-16 mb-4 opacity-20" />
                                    <p className="text-lg font-medium">Preview not available</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
