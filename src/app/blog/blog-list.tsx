"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import { paginate, normalizePage } from "@/lib/pagination";
import { ChevronRight, ChevronLeft, Search, ListFilter, Check, X } from "lucide-react";
import { useTranslation } from "@/i18n/context";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default function BlogList() {
    const { t } = useTranslation();
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");

    // States for search and filter
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    // Filter and Sort posts
    const processedPosts = useMemo(() => {
        let filtered = [...allPosts];

        // Search filter (title or topics)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.topics?.some(topic => topic.toLowerCase().includes(query))
            );
        }

        // Sorting
        return filtered.sort((a, b) => {
            const dateA = new Date(a.publishedAt).getTime();
            const dateB = new Date(b.publishedAt).getTime();
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });
    }, [searchQuery, sortOrder]);

    const totalPages = Math.ceil(processedPosts.length / PAGE_SIZE);
    const currentPage = normalizePage(pageParam || "1", totalPages);
    const { items: paginatedPosts, pagination } = paginate(processedPosts, {
        page: currentPage,
        pageSize: PAGE_SIZE,
    });

    // Close sort dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Reset page when filtering
    useEffect(() => {
        if (pageParam && pageParam !== "1" && searchQuery) {
            router.push("/blog?page=1");
        }
    }, [searchQuery, router, pageParam]);

    return (
        <section id="blog">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-col gap-4 mb-8">
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 w-fit group"
                    >
                        <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
                        {t.backToHome}
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight mb-2">
                                {t.blog}{" "}
                                <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
                                    {processedPosts.length} posts
                                </span>
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                My thoughts on software development, life, and more.
                            </p>
                        </div>

                        {/* Search and Sort "Navbar" area */}
                        <div className="flex items-center gap-2">
                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                                <input
                                    type="text"
                                    placeholder={t.searchPosts}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9 pr-8 py-2 text-sm bg-muted/50 border border-border rounded-lg outline-none focus:ring-1 focus:ring-ring transition-all w-full md:w-64"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 hover:bg-muted rounded-md transition-colors"
                                    >
                                        <X className="size-3 text-muted-foreground" />
                                    </button>
                                )}
                            </div>

                            <div className="relative" ref={sortRef}>
                                <button
                                    onClick={() => setIsSortOpen(!isSortOpen)}
                                    className="p-2 border border-border rounded-lg hover:bg-accent transition-colors relative"
                                    title={t.sortBy}
                                >
                                    <ListFilter className="size-4 text-muted-foreground" />
                                </button>
                                <AnimatePresence>
                                    {isSortOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                            className="absolute top-full right-0 mt-2 w-48 z-50 p-1 bg-popover border border-border rounded-lg shadow-md"
                                        >
                                            <button
                                                onClick={() => { setSortOrder("newest"); setIsSortOpen(false); }}
                                                className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-accent text-left"
                                            >
                                                {t.newestFirst}
                                                {sortOrder === "newest" && <Check className="size-3.5" />}
                                            </button>
                                            <button
                                                onClick={() => { setSortOrder("oldest"); setIsSortOpen(false); }}
                                                className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-accent text-left"
                                            >
                                                {t.oldestFirst}
                                                {sortOrder === "oldest" && <Check className="size-3.5" />}
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-px bg-border/40 w-full mb-8" />
            </BlurFade>

            {paginatedPosts.length > 0 ? (
                <>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="flex flex-col gap-5">
                            {paginatedPosts.map((post, id) => {
                                const slug = post._meta.path.replace(/\.mdx$/, "");
                                const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;
                                return (
                                    <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                                        <Link
                                            className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            href={`/blog/${slug}`}
                                        >
                                            <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                                                {String(indexNumber).padStart(2, "0")}.
                                            </span>
                                            <div className="flex flex-col gap-y-2 flex-1">
                                                <p className="tracking-tight text-lg font-medium">
                                                    <span className="group-hover:text-foreground transition-colors">
                                                        {post.title}
                                                        <ChevronRight
                                                            className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                                            aria-hidden
                                                        />
                                                    </span>
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-xs text-muted-foreground">
                                                        {post.publishedAt}
                                                    </p>
                                                    {post.topics && post.topics.length > 0 && (
                                                        <div className="flex gap-1">
                                                            {post.topics.map((topic: string) => (
                                                                <span key={topic} className="text-[10px] text-muted-foreground/60 border border-border px-1.5 py-0.5 rounded">
                                                                    {topic}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </BlurFade>
                                );
                            })}
                        </div>
                    </BlurFade>

                    {/* Pagination Controls */}
                    {pagination.totalPages > 1 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 4}>
                            <div className="flex gap-3 flex-row items-center justify-between mt-12">
                                <div className="text-sm text-muted-foreground">
                                    Page {pagination.page} of {pagination.totalPages}
                                </div>
                                <div className="flex gap-2 sm:justify-end">
                                    <button
                                        disabled={!pagination.hasPreviousPage}
                                        onClick={() => router.push(`/blog?page=${pagination.page - 1}`)}
                                        className={`h-8 w-fit px-3 flex items-center justify-center text-sm border border-border rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${!pagination.hasPreviousPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/50 group whitespace-nowrap'}`}
                                    >
                                        <ChevronLeft className="size-3.5 mr-1 group-hover:-translate-x-0.5 transition-transform" />
                                        {t.previous}
                                    </button>
                                    <button
                                        disabled={!pagination.hasNextPage}
                                        onClick={() => router.push(`/blog?page=${pagination.page + 1}`)}
                                        className={`h-8 w-fit px-3 flex items-center justify-center text-sm border border-border rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${!pagination.hasNextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/50 group whitespace-nowrap'}`}
                                    >
                                        {t.next}
                                        <ChevronRight className="size-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </BlurFade>
                    )}
                </>
            ) : (
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
                        <p className="text-muted-foreground text-center">
                            {searchQuery ? "No posts match your search." : "No blog posts yet. Check back soon!"}
                        </p>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 text-sm text-primary hover:underline font-medium"
                            >
                                Clear search
                            </button>
                        )}
                    </div>
                </BlurFade>
            )}
        </section>
    );
}
