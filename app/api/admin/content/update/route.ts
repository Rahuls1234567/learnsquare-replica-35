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

        let body: { content_key?: unknown; html_content?: unknown; page_name?: unknown };
        try {
            body = await request.json();
        } catch {
            return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
        }
        const { content_key, html_content, page_name } = body;

        if (!content_key || typeof content_key !== "string") {
            return NextResponse.json({ error: "content_key required" }, { status: 400 });
        }

        if (html_content !== undefined && typeof html_content !== "string") {
            return NextResponse.json({ error: "html_content must be a string" }, { status: 400 });
        }

        if (page_name !== undefined && typeof page_name !== "string") {
            return NextResponse.json({ error: "page_name must be a string" }, { status: 400 });
        }

        const htmlContentStr: string = typeof html_content === "string" ? html_content : "";
        const pageNameStr: string | undefined = typeof page_name === "string" ? page_name : undefined;

        const sanitized = sanitizeHtml(htmlContentStr);

        const updated = await prisma.websiteContent.upsert({
            where: { contentKey: content_key },
            create: { contentKey: content_key, pageName: pageNameStr ?? "", htmlContent: sanitized },
            update: { htmlContent: sanitized, ...(pageNameStr !== undefined && { pageName: pageNameStr }) },
        });

        return NextResponse.json(updated);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        const code = error && typeof error === "object" && "code" in error ? String((error as { code: unknown }).code) : undefined;
        console.error("Content update error:", message, code ?? "", error);
        const exposeDetail = process.env.NODE_ENV !== "production" || process.env.CMS_DEBUG === "1";
        return NextResponse.json(
            {
                error: "Failed to update content",
                ...(exposeDetail ? { detail: message, code } : {}),
            },
            { status: 500 }
        );
    }
}
