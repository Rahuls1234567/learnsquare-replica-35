/**
 * About Us leadership team cards.
 *
 * Stored as a JSON array inside the existing WebsiteContent table under
 * TEAM_CONTENT_KEY, so no schema migration is required. The value is NOT HTML
 * and must never be passed through sanitizeHtml().
 */

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    education: string;
    contact: string;
    bio: string;
    image: string;
};

export const TEAM_CONTENT_KEY = "about_team_members";

/** Seed list — used until an admin saves their own list. */
export const DEFAULT_TEAM: TeamMember[] = [
    {
        id: "seed-1",
        name: "Sandeep Bandari",
        role: "Founder & CEO",
        education: "EPBM - IIM K, M.TECH - JNTUH, B.TECH - JNTUH",
        contact: "988 555 2350 | sandeep@learnsquare.co",
        bio: "With over 18 years in the Ed-Tech industry, he is a passionate leader known for creating innovative learning solutions and building strategic partnerships with universities, government bodies, and channel partners nationwide. He has successfully launched and managed multiple Ed-Tech Products, LMS and CMS platforms, and led top educators across domains. A mentor to thousands of students through GATE, ESE, and competitive exam sessions, his expertise spans market research, product planning, implementation, budgeting, resource management, and team performance.",
        image: "/images/homeimage/sandeep bandari.jpg",
    },
    {
        id: "seed-2",
        name: "Alekya Avula",
        role: "Co-Founder & Director",
        education: "IPBA - IIM INDORE, M.TECH - JNTUH, B.TECH - JNTUH",
        contact: "",
        bio: "She is passionate about driving impactful product development through innovation and collaboration. With a strong foundation in business analytics and operational excellence, she leverages data-driven insights to optimize performance and achieve strategic goals. Known for leading cross-functional teams, she consistently delivers innovative solutions that exceed expectations.",
        image: "/alekya mam.jpeg",
    },
    {
        id: "seed-3",
        name: "Gopinath Puralachetty",
        role: "Chief Marketing Officer",
        education: "IRPM - Andhra University, M.Sc IT - Manipal University",
        contact: "77 9493 1347 | gopinath.p@learnsquare.co",
        bio: "He is a seasoned business leader with over 20 years of experience in education, business operations, and strategic planning. Holding a Master of Science in IT from Manipal University and a Degree in Industrial Relations from Andhra University, he has led key roles at T.I.M.E., CONDUIRA, FIITJEE, and APTECH. Known for his visionary leadership, strategic partnerships, and strong business acumen, he has consistently driven growth and delivered exceptional results across diverse markets.",
        image: "/sir.jpeg",
    },
];

/** Only allow same-origin relative image paths — blocks javascript:/data: URLs. */
const isSafeSrc = (src: string) => src === "" || /^\/[^\s]*$/.test(src) || /^\/.+$/.test(src);

const str = (v: unknown, max = 4000) => (typeof v === "string" ? v.slice(0, max) : "");

/** Parse a stored JSON blob into a validated TeamMember[]. Returns null if unusable. */
export function parseTeam(raw: string | null | undefined): TeamMember[] | null {
    if (!raw || !raw.trim()) return null;
    let parsed: unknown;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return null;
    }
    if (!Array.isArray(parsed)) return null;

    const clean: TeamMember[] = [];
    for (const item of parsed) {
        if (!item || typeof item !== "object") continue;
        const m = item as Record<string, unknown>;
        const image = str(m.image, 500);
        if (image && !isSafeSrc(image)) continue;
        clean.push({
            id: typeof m.id === "string" && m.id ? m.id : `t-${clean.length}-${Date.now()}`,
            name: str(m.name, 200),
            role: str(m.role, 200),
            education: str(m.education, 500),
            contact: str(m.contact, 300),
            bio: str(m.bio),
            image,
        });
    }
    return clean;
}

/** Validate an incoming payload from the admin portal. `error` is null when valid. */
export function validateTeamPayload(input: unknown): { error: string | null; team: TeamMember[] } {
    const fail = (error: string) => ({ error, team: [] as TeamMember[] });

    if (!Array.isArray(input)) return fail("Expected an array of team members");
    if (input.length > 100) return fail("Too many team members (max 100)");

    const team: TeamMember[] = [];
    for (const item of input) {
        if (!item || typeof item !== "object") return fail("Each team member must be an object");
        const m = item as Record<string, unknown>;
        const image = str(m.image, 500);
        if (image && !isSafeSrc(image)) return fail(`Invalid image path: ${image}`);
        if (!str(m.name).trim()) return fail("Each team member needs a name");
        team.push({
            id: typeof m.id === "string" && m.id ? m.id : `t-${team.length}-${Date.now()}`,
            name: str(m.name, 200).trim(),
            role: str(m.role, 200).trim(),
            education: str(m.education, 500).trim(),
            contact: str(m.contact, 300).trim(),
            bio: str(m.bio).trim(),
            image,
        });
    }
    return { error: null, team };
}
