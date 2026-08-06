import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeHtml } from "@/lib/sanitize";

/**
 * Batch content API — fetches multiple content keys in ONE database query.
 * Replaces 30+ individual /api/content/[key] calls with a single request.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const keys: string[] = body?.keys;

        if (!Array.isArray(keys) || keys.length === 0) {
            return NextResponse.json({});
        }

        // ONE database query for all keys
        const entries = await prisma.websiteContent.findMany({
            where: { contentKey: { in: keys } },
            select: { contentKey: true, htmlContent: true },
        });

        const result: Record<string, string> = {};
        entries.forEach(entry => {
            result[entry.contentKey] = sanitizeHtml(entry.htmlContent);
        });

        return NextResponse.json(result, {
            headers: {
                // Cache for 60 seconds in browser, serve stale for up to 5 mins while revalidating
                'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
            },
        });
    } catch (error) {
        console.error("Batch content fetch error:", error);
        return NextResponse.json({});
    }
}
