import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeHtml } from "@/lib/sanitize";

/**
 * Public API for frontend to fetch and render website content.
 * Content is sanitized before returning.
 */
export async function GET(
    _request: Request,
    { params }: { params: Promise<{ content_key: string }> }
) {
    try {
        const { content_key } = await params;
        if (!content_key) {
            return NextResponse.json({ error: "content_key required" }, { status: 400 });
        }

        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: content_key },
            select: { htmlContent: true },
        });

        if (!entry) {
            return NextResponse.json({ htmlContent: "" });
        }

        const sanitized = sanitizeHtml(entry.htmlContent);
        return NextResponse.json({ htmlContent: sanitized });
    } catch (error) {
        console.error("Public content fetch error:", error);
        return NextResponse.json({ htmlContent: "" });
    }
}
