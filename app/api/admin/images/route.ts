import { NextRequest, NextResponse } from "next/server";
import { writeFile, readdir, stat, unlink } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

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

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");

function ensureUploadDir() {
    if (!existsSync(UPLOAD_DIR)) {
        mkdirSync(UPLOAD_DIR, { recursive: true });
    }
}

// GET - List all images
export async function GET(request: NextRequest) {
    const auth = getAdminFromRequest(request);
    if (!auth) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        ensureUploadDir();

        // Scan both /public/uploads and /public/images for all image files
        const allImages: { name: string; url: string; path: string; size: number; folder: string }[] = [];

        const scanDir = async (dir: string, urlPrefix: string, folderLabel: string) => {
            try {
                const files = await readdir(dir, { withFileTypes: true });
                for (const file of files) {
                    if (file.isFile()) {
                        const ext = file.name.split(".").pop()?.toLowerCase();
                        if (["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"].includes(ext || "")) {
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

        await scanDir(UPLOAD_DIR, "/uploads", "uploads");
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
        ensureUploadDir();

        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const subfolder = (formData.get("subfolder") as string) || "";

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const ext = file.name.split(".").pop()?.toLowerCase();
        if (!["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"].includes(ext || "")) {
            return NextResponse.json({ error: "Invalid file type. Only images allowed." }, { status: 400 });
        }

        // Create unique filename with timestamp
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const timestamp = Date.now();
        const fileName = `${timestamp}_${safeName}`;

        const targetDir = subfolder
            ? join(UPLOAD_DIR, subfolder.replace(/[^a-zA-Z0-9_-]/g, ""))
            : UPLOAD_DIR;

        if (!existsSync(targetDir)) {
            mkdirSync(targetDir, { recursive: true });
        }

        const filePath = join(targetDir, fileName);
        const bytes = await file.arrayBuffer();
        await writeFile(filePath, Buffer.from(bytes));

        const relPath = subfolder ? `/uploads/${subfolder}/${fileName}` : `/uploads/${fileName}`;

        return NextResponse.json({
            success: true,
            url: relPath,
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

        // Only allow deleting from /uploads folder for safety
        if (!url.startsWith("/uploads/")) {
            return NextResponse.json({ error: "Can only delete images from the uploads folder" }, { status: 403 });
        }

        const relativePath = url.replace("/uploads/", "");
        const filePath = join(UPLOAD_DIR, relativePath);

        // Ensure the path is within UPLOAD_DIR (security check)
        if (!filePath.startsWith(UPLOAD_DIR)) {
            return NextResponse.json({ error: "Invalid path" }, { status: 403 });
        }

        if (!existsSync(filePath)) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        await unlink(filePath);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Image delete error:", error);
        return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
    }
}
