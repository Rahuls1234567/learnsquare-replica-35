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

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const auth = getAdminFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        const body = await request.json();
        const { name, role, text, image, rating, page } = body;

        const review = await prisma.review.update({
            where: { id },
            data: {
                name,
                role,
                text,
                image,
                rating: rating ? parseInt(rating) : 5,
                page,
            },
        });

        return NextResponse.json(review);
    } catch (error) {
        console.error("Review update error:", error);
        return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const auth = getAdminFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { id: idStr } = await params;
        const id = parseInt(idStr);
        await prisma.review.delete({ where: { id } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Review delete error:", error);
        return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
    }
}
