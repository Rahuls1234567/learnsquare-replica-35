import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeHtml } from "@/lib/sanitize";

function getAdminFromRequest(request: Request): { email: string; isAdmin: boolean } | null {
    const cookie = request.headers.get("cookie") || "";
    const match = cookie.match(/auth=([^;]+)/);
    if (!match) return null;
    try {
        const decoded = JSON.parse(atob(match[1]));
        if (decoded?.isAdmin) return decoded;
        return null;
    } catch {
        return null;
    }
}

export async function POST(request: Request) {
    try {
        const auth = getAdminFromRequest(request);
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
