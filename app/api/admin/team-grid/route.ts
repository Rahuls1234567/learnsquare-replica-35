import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import {
    DEFAULT_TEAM_GRID,
    TEAM_GRID_CONTENT_KEY,
    parseTeamGrid,
    validateTeamGridPayload,
} from "@/lib/team-grid";

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

/** GET — current grid for the admin portal. */
export async function GET() {
    const auth = await getAdminFromRequest();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: TEAM_GRID_CONTENT_KEY },
            select: { htmlContent: true },
        });
        const stored = parseTeamGrid(entry?.htmlContent);
        return NextResponse.json({ team: stored ?? DEFAULT_TEAM_GRID, usingDefaults: stored === null });
    } catch (error) {
        console.error("Admin team grid fetch error:", error);
        return NextResponse.json({ error: "Failed to load team cards" }, { status: 500 });
    }
}

/** POST — replace the whole grid. Body: { team: TeamGridMember[] } */
export async function POST(request: Request) {
    const auth = await getAdminFromRequest();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    let body: { team?: unknown };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const result = validateTeamGridPayload(body.team);
    if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        // Stored as raw JSON — deliberately not sanitizeHtml()'d, which would corrupt it.
        const json = JSON.stringify(result.team);
        await prisma.websiteContent.upsert({
            where: { contentKey: TEAM_GRID_CONTENT_KEY },
            create: { contentKey: TEAM_GRID_CONTENT_KEY, pageName: "about", htmlContent: json },
            update: { htmlContent: json },
        });
        return NextResponse.json({ success: true, team: result.team });
    } catch (error) {
        console.error("Admin team grid save error:", error);
        return NextResponse.json({ error: "Failed to save team cards" }, { status: 500 });
    }
}
