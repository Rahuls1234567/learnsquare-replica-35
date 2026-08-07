import { NextRequest, NextResponse } from "next/server";
import { writeFile, readdir, stat, unlink } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import { prisma } from "@/lib/prisma";
import { MEDIA_DIR, ALLOWED_IMAGE_EXTS, mimeForExt } from "@/lib/media";

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

function ensureMediaDir() {
    if (!existsSync(MEDIA_DIR)) {
        mkdirSync(MEDIA_DIR, { recursive: true });
    }
}

// GET - List all images (uploaded media from the DB + built-in /public/images assets)
export async function GET(request: NextRequest) {
    const auth = getAdminFromRequest(request);
    if (!auth) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const media = await prisma.media.findMany({ orderBy: { uploadedAt: "desc" } });
        const allImages: { name: string; url: string; path: string; size: number; folder: string }[] =
            media.map((m) => ({
                name: m.filename,
                url: m.url,
                path: m.path,
                size: m.size,
                folder: m.folder || "uploads",
            }));

        // Built-in site images (bundled assets, not user uploads) stay read-only.
        const scanDir = async (dir: string, urlPrefix: string, folderLabel: string) => {
            try {
                const files = await readdir(dir, { withFileTypes: true });
                for (const file of files) {
                    if (file.isFile()) {
                        const ext = file.name.split(".").pop()?.toLowerCase();
                        if (ALLOWED_IMAGE_EXTS.includes(ext || "")) {
                            const filePath = join(dir, file.name);
                            const fileStat = await stat(filePath);
                            allImages.push({
                                name: file.name,
                                url: `${urlPrefix}/${file.name}`,
                                path: filePath,
                                size: fileStat.size,
                                folder: folderLabel,
                            });
                        }
                    } else if (file.isDirectory()) {
                        await scanDir(join(dir, file.name), `${urlPrefix}/${file.name}`, `${folderLabel}/${file.name}`);
                    }
                }
            } catch {
                // Folder may not exist, skip
            }
        };

        await scanDir(join(process.cwd(), "public", "images"), "/images", "images");

        return NextResponse.json(allImages);
    } catch (error) {
        console.error("Image list error:", error);
        return NextResponse.json({ error: "Failed to list images" }, { status: 500 });
    }
}

// POST - Upload image
export async function POST(request: NextRequest) {
    const auth = getAdminFromRequest(request);
    if (!auth) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        ensureMediaDir();

        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const subfolder = (formData.get("subfolder") as string) || "";

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const ext = file.name.split(".").pop()?.toLowerCase();
        if (!ALLOWED_IMAGE_EXTS.includes(ext || "")) {
            return NextResponse.json({ error: "Invalid file type. Only images allowed." }, { status: 400 });
        }

        // Create unique filename with timestamp
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const timestamp = Date.now();
        const fileName = `${timestamp}_${safeName}`;

        const cleanSubfolder = subfolder.replace(/[^a-zA-Z0-9_-]/g, "");
        const targetDir = cleanSubfolder ? join(MEDIA_DIR, cleanSubfolder) : MEDIA_DIR;

        if (!existsSync(targetDir)) {
            mkdirSync(targetDir, { recursive: true });
        }

        const filePath = join(targetDir, fileName);
        const bytes = await file.arrayBuffer();
        await writeFile(filePath, Buffer.from(bytes));

        const relPath = cleanSubfolder ? `${cleanSubfolder}/${fileName}` : fileName;
        const url = `/api/media/${relPath}`;

        await prisma.media.create({
            data: {
                filename: fileName,
                folder: cleanSubfolder || "uploads",
                path: relPath,
                url,
                mimeType: file.type || mimeForExt(ext || ""),
                size: file.size,
            },
        });

        return NextResponse.json({
            success: true,
            url,
            name: fileName,
            size: file.size,
        });
    } catch (error) {
        console.error("Image upload error:", error);
        return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
    }
}

// DELETE - Delete image
export async function DELETE(request: NextRequest) {
    const auth = getAdminFromRequest(request);
    if (!auth) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { url } = await request.json();
        if (!url) {
            return NextResponse.json({ error: "No URL provided" }, { status: 400 });
        }

        // Only allow deleting uploaded media (tracked in the DB), never built-in site images.
        if (!url.startsWith("/api/media/")) {
            return NextResponse.json({ error: "Can only delete uploaded media" }, { status: 403 });
        }

        const media = await prisma.media.findFirst({ where: { url } });
        if (!media) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        const filePath = join(MEDIA_DIR, media.path);

        // Security check: resolved path must stay within MEDIA_DIR.
        if (!filePath.startsWith(MEDIA_DIR)) {
            return NextResponse.json({ error: "Invalid path" }, { status: 403 });
        }

        if (existsSync(filePath)) {
            await unlink(filePath);
        }

        await prisma.media.delete({ where: { id: media.id } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Image delete error:", error);
        return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
    }
}
