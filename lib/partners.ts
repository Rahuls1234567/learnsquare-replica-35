/**
 * Client Partnership logos.
 *
 * Stored as a JSON array inside the existing WebsiteContent table under
 * PARTNERS_CONTENT_KEY, so no schema migration is required. The value is NOT
 * HTML and must never be passed through sanitizeHtml().
 */

export type Partner = {
    id: string;
    src: string;
    name: string;
};

export const PARTNERS_CONTENT_KEY = "home_client_partners";

/** Seed list — used until an admin saves their own list. */
export const DEFAULT_PARTNERS: Partner[] = [
    { id: "seed-1", src: "/images/logo-1.png", name: "Modern Educational Society" },
    { id: "seed-2", src: "/images/logo-2.png", name: "Shree Ramachandra College of Engineering" },
    { id: "seed-3", src: "/images/logo-3.png", name: "SHADAN" },
    { id: "seed-4", src: "/images/logo-4.png", name: "GPREC" },
    { id: "seed-5", src: "/images/logo-5.png", name: "SVIT" },
    { id: "seed-6", src: "/images/logo-6.png", name: "City Chalapathi" },
    { id: "seed-7", src: "/images/logo-7.png", name: "Malla Reddy University" },
    { id: "seed-8", src: "/images/logo-8.png", name: "Institution 8" },
    { id: "seed-9", src: "/images/logo-9.png", name: "Institution 9" },
    { id: "seed-10", src: "/images/logo-10.png", name: "Institution 10" },
];

/** Only allow same-origin relative image paths — blocks javascript:/data: URLs. */
const isSafeSrc = (src: string) => /^\/[^\s]*$/.test(src);

/** Parse a stored JSON blob into a validated Partner[]. Returns null if unusable. */
export function parsePartners(raw: string | null | undefined): Partner[] | null {
    if (!raw || !raw.trim()) return null;
    let parsed: unknown;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return null;
    }
    if (!Array.isArray(parsed)) return null;

    const clean: Partner[] = [];
    for (const item of parsed) {
        if (!item || typeof item !== "object") continue;
        const { id, src, name } = item as Record<string, unknown>;
        if (typeof src !== "string" || !isSafeSrc(src)) continue;
        clean.push({
            id: typeof id === "string" && id ? id : `p-${clean.length}-${Date.now()}`,
            src,
            name: typeof name === "string" ? name.slice(0, 200) : "",
        });
    }
    return clean;
}

/** Validate an incoming payload from the admin portal. `error` is null when valid. */
export function validatePartnersPayload(input: unknown): { error: string | null; partners: Partner[] } {
    const fail = (error: string) => ({ error, partners: [] as Partner[] });

    if (!Array.isArray(input)) return fail("Expected an array of partners");
    if (input.length > 200) return fail("Too many partners (max 200)");

    const partners: Partner[] = [];
    for (const item of input) {
        if (!item || typeof item !== "object") return fail("Each partner must be an object");
        const { id, src, name } = item as Record<string, unknown>;
        if (typeof src !== "string" || !src.trim()) return fail("Each partner needs an image");
        if (!isSafeSrc(src)) return fail(`Invalid image path: ${src}`);
        partners.push({
            id: typeof id === "string" && id ? id : `p-${partners.length}-${Date.now()}`,
            src,
            name: typeof name === "string" ? name.trim().slice(0, 200) : "",
        });
    }
    return { error: null, partners };
}
