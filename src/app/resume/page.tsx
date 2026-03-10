import { portfolioData } from "@/data/portfolio";
import { redirect } from "next/navigation";

// This page redirects to the external resume URL.
// Update the resumeUrl in portfolio.ts to point to your Google Drive link.
export default function ResumePage() {
    const resumeUrl = portfolioData.personal.resumeUrl;

    // If it's an external URL, redirect there
    if (resumeUrl.startsWith("http")) {
        redirect(resumeUrl);
    }

    // Fallback: redirect to homepage if no external resume URL is set
    redirect("/");
}
