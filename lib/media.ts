import { join } from "path";

/**
 * Uploaded files live here — a top-level directory outside `public/`, so
 * uploads never show up as changes in `public/` (and therefore never show up
 * as noise in `git status`). Served through /api/media/[...path]; cataloged
 * in the Media DB table.
 */
export const MEDIA_DIR = join(process.cwd(), "media");

export const ALLOWED_IMAGE_EXTS = ["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"];

const MIME_BY_EXT: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    avif: "image/avif",
};

export function mimeForExt(ext: string): string {
    return MIME_BY_EXT[ext.toLowerCase()] || "application/octet-stream";
}
