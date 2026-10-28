import type { MetadataRoute } from "next";
import { PAGE_SEO, SITE_URL } from "@/lib/seo";

// Served at /sitemap.xml. Lists every public page in PAGE_SEO (admin/profile are noindex and not listed there).
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return Object.values(PAGE_SEO).map(({ path }) => ({
        url: `${SITE_URL}${path === "/" ? "" : path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: path === "/" ? 1 : 0.8,
    }));
}
