import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OG_SIZE, PAGE_SEO, type PageKey } from "@/lib/seo";

// One 1200x630 share image per page in PAGE_SEO, generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(PAGE_SEO).map((page) => ({ page }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ page: string }> }) {
    const { page } = await params;
    const seo = PAGE_SEO[page as PageKey];
    if (!seo) return new Response("Not found", { status: 404 });

    const logo = await readFile(join(process.cwd(), "public/logo/LEARNSQUARE_LOGO (750x300).png"));
    const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

    // "AICAS | AI-Powered ..." -> "AICAS"; the home title starts with the brand, which the logo already shows.
    const [name, tagline] = seo.title.split(" | ");
    const heading = page === "home" ? tagline : name;

    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ffffff" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "48px 72px 0" }}>
                    <img src={logoSrc} width={300} height={120} style={{ marginLeft: -24 }} />
                    <div style={{ marginTop: 28, fontSize: 68, fontWeight: 700, color: "#3730a3", lineHeight: 1.1, letterSpacing: -1 }}>
                        {heading}
                    </div>
                    <div style={{ marginTop: 22, fontSize: 30, color: "#475569", lineHeight: 1.4, maxWidth: 1040 }}>
                        {seo.description}
                    </div>
                </div>
                <div
                    style={{
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 72px",
                        background: "linear-gradient(90deg, #4338ca, #9333ea)",
                        color: "#ffffff",
                        fontSize: 26,
                    }}
                >
                    <span style={{ fontWeight: 700, letterSpacing: 2 }}>LEARNSQUARE</span>
                    <span>learnsquare.co{seo.path === "/" ? "" : seo.path}</span>
                </div>
            </div>
        ),
        OG_SIZE,
    );
}
