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

export async function POST(request: Request) {
    try {
        const auth = getAdminFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { name, role, text, image, rating, page } = body;

        if (!name || !role || !text || !page) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const review = await prisma.review.create({
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
        console.error("Review create error:", error);
        return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const auth = getAdminFromRequest(request);
        if (!auth) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const reviews = await prisma.review.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(reviews);
    } catch (error) {
        console.error("Admin reviews fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
    }
}
