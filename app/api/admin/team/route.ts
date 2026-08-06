import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { DEFAULT_TEAM, TEAM_CONTENT_KEY, parseTeam, validateTeamPayload } from "@/lib/team";

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

/** GET — current team for the admin portal. */
export async function GET() {
    const auth = await getAdminFromRequest();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: TEAM_CONTENT_KEY },
            select: { htmlContent: true },
        });
        const stored = parseTeam(entry?.htmlContent);
        return NextResponse.json({ team: stored ?? DEFAULT_TEAM, usingDefaults: stored === null });
    } catch (error) {
        console.error("Admin team fetch error:", error);
        return NextResponse.json({ error: "Failed to load team" }, { status: 500 });
    }
}

/** POST — replace the whole team. Body: { team: TeamMember[] } */
export async function POST(request: Request) {
    const auth = await getAdminFromRequest();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    let body: { team?: unknown };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const result = validateTeamPayload(body.team);
    if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        // Stored as raw JSON — deliberately not sanitizeHtml()'d, which would corrupt it.
        const json = JSON.stringify(result.team);
        await prisma.websiteContent.upsert({
            where: { contentKey: TEAM_CONTENT_KEY },
            create: { contentKey: TEAM_CONTENT_KEY, pageName: "about", htmlContent: json },
            update: { htmlContent: json },
        });
        return NextResponse.json({ success: true, team: result.team });
    } catch (error) {
        console.error("Admin team save error:", error);
        return NextResponse.json({ error: "Failed to save team" }, { status: 500 });
    }
}
