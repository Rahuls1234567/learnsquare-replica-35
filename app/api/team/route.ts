import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEFAULT_TEAM, TEAM_CONTENT_KEY, parseTeam } from "@/lib/team";

/** Public API — returns the About Us leadership team cards. */
export async function GET() {
    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: TEAM_CONTENT_KEY },
            select: { htmlContent: true },
        });

        const stored = parseTeam(entry?.htmlContent);
        // An explicitly saved empty list is respected; only a missing/corrupt row falls back.
        return NextResponse.json(stored ?? DEFAULT_TEAM);
    } catch (error) {
        console.error("Team fetch error:", error);
        return NextResponse.json(DEFAULT_TEAM);
    }
}
