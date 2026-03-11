"use client";

import { allPosts } from "content-collections";
import { useTranslation } from "@/i18n/context";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function BlogSection() {
    const { t } = useTranslation();

    // Get latest 3 posts
    const latestPosts = [...allPosts]
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 3);

    if (latestPosts.length === 0) return null;

    return (
        <section id="blog-preview" className="w-full py-4">
            <div className="flex flex-col gap-6 w-full relative max-w-5xl mx-auto px-4">
                <div className="flex items-end justify-between px-2">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                            {t.blog}
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                        <span className="relative overflow-hidden pt-1">
                            {t.viewAllBlogs}
                            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                        </span>
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="h-px bg-border/40 w-full" />

                <div className="flex flex-col gap-4 mt-2">
                    {latestPosts.map((post, id) => {
                        const slug = post._meta.path.replace(/\.mdx$/, "");
                        return (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: id * 0.1 }}
                            >
                                <Link
                                    href={`/blog/${slug}`}
                                    className="flex items-start gap-x-4 group p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
                                >
                                    <span className="text-sm font-mono text-muted-foreground mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                        {String(id + 1).padStart(2, "0")}.
                                    </span>
                                    <div className="flex flex-col gap-y-1.5 flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <ChevronRight className="size-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <time className="text-xs text-muted-foreground font-medium">
                                                {post.publishedAt}
                                            </time>
                                            <div className="size-1 rounded-full bg-border" />
                                            <span className="text-xs text-muted-foreground font-medium">
                                                {Math.ceil(post.content.length / 500)} min read
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
