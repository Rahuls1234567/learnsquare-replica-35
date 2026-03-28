import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { sanitizeHtml } from "@/lib/sanitize";

async function getAdminFromRequest(): Promise<{ email: string; isAdmin: boolean } | null> {
    try {
        const cookieStore = await cookies();
        const authCookie = cookieStore.get("auth");
        
        if (!authCookie?.value) return null;
        
        // Use decodeURIComponent then atob to decode the Base64 session string
        const decoded = JSON.parse(atob(decodeURIComponent(authCookie.value)));
        
        if (decoded?.isAdmin) return decoded;
        return null;
    } catch (err) {
        console.error("Session decode error:", err);
        return null;
    }
}

export async function POST(request: Request) {
    try {
        const auth = await getAdminFromRequest();
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { content_key, html_content, page_name } = body;

        if (!content_key || typeof content_key !== "string") {
            return NextResponse.json({ error: "content_key required" }, { status: 400 });
        }

        const sanitized = sanitizeHtml(html_content ?? "");

        const updated = await prisma.websiteContent.upsert({
            where: { contentKey: content_key },
            create: { contentKey: content_key, pageName: page_name ?? "", htmlContent: sanitized },
            update: { htmlContent: sanitized, ...(page_name !== undefined && { pageName: page_name }) },
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error("Content update error:", error);
        return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
    }
}
