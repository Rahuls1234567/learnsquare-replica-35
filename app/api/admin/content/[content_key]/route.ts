import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

export async function GET(
    request: Request,
    { params }: { params: Promise<{ content_key: string }> }
) {
    try {
        const auth = getAdminFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { content_key } = await params;
        if (!content_key) {
            return NextResponse.json({ error: "content_key required" }, { status: 400 });
        }

        const entry = await prisma.websiteContent.findUnique({
            where: { contentKey: content_key },
            select: { htmlContent: true, contentKey: true, pageName: true, updatedAt: true },
        });

        if (!entry) {
            return NextResponse.json({ error: "Content not found" }, { status: 404 });
        }

        return NextResponse.json(entry);
    } catch (error) {
        console.error("Content fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
    }
}
