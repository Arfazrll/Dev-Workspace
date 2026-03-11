import BlogList from "./blog-list";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

export default function BlogPage() {
  return (
    <Suspense>
      <BlogList />
    </Suspense>
  );
}
