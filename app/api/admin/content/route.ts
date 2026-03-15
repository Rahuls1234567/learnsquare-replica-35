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

export async function GET(request: Request) {
    try {
        const auth = getAdminFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const entries = await prisma.websiteContent.findMany({
            orderBy: { contentKey: "asc" },
            select: { id: true, contentKey: true, pageName: true, updatedAt: true },
        });

        return NextResponse.json(entries);
    } catch (error) {
        console.error("Content list error:", error);
        return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
    }
}
