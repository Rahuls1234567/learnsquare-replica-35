import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import { join, normalize } from "path";
import { MEDIA_DIR, mimeForExt } from "@/lib/media";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path: segments } = await params;

    if (!segments?.length) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const filePath = normalize(join(MEDIA_DIR, ...segments));

    // Security check: resolved path must stay within MEDIA_DIR.
    if (!filePath.startsWith(MEDIA_DIR)) {
        return NextResponse.json({ error: "Invalid path" }, { status: 400 });
    }

    try {
        const fileStat = await stat(filePath);
        if (!fileStat.isFile()) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        const bytes = await readFile(filePath);
        const ext = segments[segments.length - 1].split(".").pop() || "";

        return new NextResponse(new Uint8Array(bytes), {
            headers: {
                "Content-Type": mimeForExt(ext),
                "Content-Length": String(fileStat.size),
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
