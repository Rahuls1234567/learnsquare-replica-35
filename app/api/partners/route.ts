import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEFAULT_PARTNERS, PARTNERS_CONTENT_KEY, parsePartners } from "@/lib/partners";

/** Public API — returns the Client Partnership logos for the homepage. */
export async function GET() {
    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: PARTNERS_CONTENT_KEY },
            select: { htmlContent: true },
        });

        const stored = parsePartners(entry?.htmlContent);
        // An explicitly saved empty list is respected; only a missing/corrupt row falls back.
        return NextResponse.json(stored ?? DEFAULT_PARTNERS);
    } catch (error) {
        console.error("Partners fetch error:", error);
        return NextResponse.json(DEFAULT_PARTNERS);
    }
}
