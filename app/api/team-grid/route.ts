import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEFAULT_TEAM_GRID, TEAM_GRID_CONTENT_KEY, parseTeamGrid } from "@/lib/team-grid";

/** Public API — returns the "Our Team" compact card grid. */
export async function GET() {
    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: TEAM_GRID_CONTENT_KEY },
            select: { htmlContent: true },
        });

        const stored = parseTeamGrid(entry?.htmlContent);
        // An explicitly saved empty list is respected; only a missing/corrupt row falls back.
        return NextResponse.json(stored ?? DEFAULT_TEAM_GRID);
    } catch (error) {
        console.error("Team grid fetch error:", error);
        return NextResponse.json(DEFAULT_TEAM_GRID);
    }
}
