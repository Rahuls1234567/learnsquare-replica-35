import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

async function getAdminFromRequest(): Promise<{ email: string; isAdmin: boolean } | null> {
    try {
        const cookieStore = await cookies();
        const authCookie = cookieStore.get("auth");
        if (!authCookie?.value) return null;
        const decoded = JSON.parse(atob(decodeURIComponent(authCookie.value)));
        if (decoded?.isAdmin) return decoded;
        return null;
    } catch {
        return null;
    }
}

/**
 * Admin POST: Save team cards as raw JSON (bypasses HTML sanitization).
 * Body: { cards: Array<{ id: number, name: string, designation: string, image: string }> }
 */
export async function POST(request: Request) {
    try {
        const auth = await getAdminFromRequest();
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        let body: { cards?: unknown };
        try {
            body = await request.json();
        } catch {
            return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const { cards } = body;

        if (!Array.isArray(cards)) {
            return NextResponse.json({ error: "cards must be an array" }, { status: 400 });
        }

        // Validate each card's fields
        const sanitizedCards = cards.map((card: unknown) => {
            if (typeof card !== "object" || card === null) return null;
            const c = card as Record<string, unknown>;
            return {
                id: typeof c.id === "number" ? c.id : Date.now(),
                name: typeof c.name === "string" ? c.name.slice(0, 200) : "",
                designation: typeof c.designation === "string" ? c.designation.slice(0, 200) : "",
                image: typeof c.image === "string" ? c.image.slice(0, 500) : "",
            };
        }).filter(Boolean);

        const jsonString = JSON.stringify(sanitizedCards);

        const updated = await prisma.websiteContent.upsert({
            where: { contentKey: "about_team_cards_json" },
            create: {
                contentKey: "about_team_cards_json",
                pageName: "about",
                htmlContent: jsonString,
            },
            update: { htmlContent: jsonString },
        });

        return NextResponse.json({ success: true, updated });
    } catch (error) {
        console.error("Team cards save error:", error);
        return NextResponse.json({ error: "Failed to save team cards" }, { status: 500 });
    }
}
