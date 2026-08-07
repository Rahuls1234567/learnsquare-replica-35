/**
 * "Our Team" compact card grid on the About page.
 *
 * Deliberately a SEPARATE list from the large leadership profiles in lib/team.ts —
 * adding someone here does not create a full profile section, and vice versa.
 *
 * Stored as a JSON array inside the existing WebsiteContent table under
 * TEAM_GRID_CONTENT_KEY, so no schema migration is required. The value is NOT
 * HTML and must never be passed through sanitizeHtml().
 */

export type TeamGridMember = {
    id: string;
    name: string;
    role: string;
    image: string;
};

export const TEAM_GRID_CONTENT_KEY = "about_team_grid";

/** Seed list — used until an admin saves their own list. */
export const DEFAULT_TEAM_GRID: TeamGridMember[] = [
    {
        id: "g-seed-1",
        name: "Alekya Avula",
        role: "Co-Founder & Director",
        image: "/alekya mam.jpeg",
    },
    {
        id: "g-seed-2",
        name: "Gopinath Puralachetty",
        role: "Chief Marketing Officer",
        image: "/sir.jpeg",
    },
];

/** Only allow same-origin relative image paths — blocks javascript:/data: URLs. */
const isSafeSrc = (src: string) => src === "" || /^\/[^\s]*$/.test(src) || /^\/.+$/.test(src);

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.slice(0, max) : "");

/** Parse a stored JSON blob into a validated TeamGridMember[]. Returns null if unusable. */
export function parseTeamGrid(raw: string | null | undefined): TeamGridMember[] | null {
    if (!raw || !raw.trim()) return null;
    let parsed: unknown;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return null;
    }
    if (!Array.isArray(parsed)) return null;

    const clean: TeamGridMember[] = [];
    for (const item of parsed) {
        if (!item || typeof item !== "object") continue;
        const m = item as Record<string, unknown>;
        const image = str(m.image, 500);
        if (image && !isSafeSrc(image)) continue;
        clean.push({
            id: typeof m.id === "string" && m.id ? m.id : `g-${clean.length}-${Date.now()}`,
            name: str(m.name, 200),
            role: str(m.role, 200),
            image,
        });
    }
    return clean;
}

/** Validate an incoming payload from the admin portal. `error` is null when valid. */
export function validateTeamGridPayload(input: unknown): { error: string | null; team: TeamGridMember[] } {
    const fail = (error: string) => ({ error, team: [] as TeamGridMember[] });

    if (!Array.isArray(input)) return fail("Expected an array of team cards");
    if (input.length > 200) return fail("Too many team cards (max 200)");

    const team: TeamGridMember[] = [];
    for (const item of input) {
        if (!item || typeof item !== "object") return fail("Each team card must be an object");
        const m = item as Record<string, unknown>;
        const image = str(m.image, 500);
        if (image && !isSafeSrc(image)) return fail(`Invalid image path: ${image}`);
        if (!str(m.name).trim()) return fail("Each team card needs a name");
        team.push({
            id: typeof m.id === "string" && m.id ? m.id : `g-${team.length}-${Date.now()}`,
            name: str(m.name, 200).trim(),
            role: str(m.role, 200).trim(),
            image,
        });
    }
    return { error: null, team };
}
