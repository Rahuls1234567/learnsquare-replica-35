import { prisma } from "@/lib/prisma";
import { sanitizeHtml } from "@/lib/sanitize";

/**
 * Fetch website content by key (server-side).
 * Use in server components. Content is sanitized before return.
 */
export async function getContent(contentKey: string): Promise<string> {
    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey },
            select: { htmlContent: true },
        });
        if (!entry) return "";
        return sanitizeHtml(entry.htmlContent);
    } catch {
        return "";
    }
}
