import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import {
    DEFAULT_PARTNERS,
    PARTNERS_CONTENT_KEY,
    parsePartners,
    validatePartnersPayload,
} from "@/lib/partners";

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

/** GET — current list for the admin portal. */
export async function GET() {
    const auth = await getAdminFromRequest();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: PARTNERS_CONTENT_KEY },
            select: { htmlContent: true },
        });
        const stored = parsePartners(entry?.htmlContent);
        return NextResponse.json({ partners: stored ?? DEFAULT_PARTNERS, usingDefaults: stored === null });
    } catch (error) {
        console.error("Admin partners fetch error:", error);
        return NextResponse.json({ error: "Failed to load partners" }, { status: 500 });
    }
}

/** POST — replace the whole list. Body: { partners: Partner[] } */
export async function POST(request: Request) {
    const auth = await getAdminFromRequest();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    let body: { partners?: unknown };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const result = validatePartnersPayload(body.partners);
    if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        // Stored as raw JSON — deliberately not sanitizeHtml()'d, which would corrupt it.
        const json = JSON.stringify(result.partners);
        await prisma.websiteContent.upsert({
            where: { contentKey: PARTNERS_CONTENT_KEY },
            create: { contentKey: PARTNERS_CONTENT_KEY, pageName: "home", htmlContent: json },
            update: { htmlContent: json },
        });
        return NextResponse.json({ success: true, partners: result.partners });
    } catch (error) {
        console.error("Admin partners save error:", error);
        return NextResponse.json({ error: "Failed to save partners" }, { status: 500 });
    }
}
