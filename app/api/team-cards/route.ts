import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Public API: Fetch team cards JSON (no HTML sanitization, raw JSON storage).
 */
export async function GET() {
    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: "about_team_cards_json" },
            select: { htmlContent: true },
        });

        if (!entry || !entry.htmlContent) {
            return NextResponse.json({ cards: [] });
        }

        try {
            const cards = JSON.parse(entry.htmlContent);
            return NextResponse.json({ cards });
        } catch {
            return NextResponse.json({ cards: [] });
        }
    } catch (error) {
        console.error("Team cards fetch error:", error);
        return NextResponse.json({ cards: [] });
    }
}
