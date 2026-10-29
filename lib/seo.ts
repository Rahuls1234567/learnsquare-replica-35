import type { Metadata } from "next";

/**
 * Public domain used for absolute og/twitter URLs. Pinned in code (not read from env)
 * so a staging env value can never leak into share previews again.
 */
export const SITE_URL = "https://learnsquare.co";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * public/share-logo.png ("fav icon.png" resized, no space in the URL).
 * Kept under 300px wide so WhatsApp shows a small side thumbnail instead of a big banner.
 */
const LOGO_SIZE = { width: 200, height: 200 };

type PageSeo = { title: string; description: string; path: string };

/** Per-page titles (50–60 chars) and descriptions (120–160 chars). */
export const PAGE_SEO = {
    home: {
        path: "/",
        title: "LEARNSQUARE - AICAS(ERP) | Industry Ready Trainings | AI LMS | SemesterPrep",
        description: "Transforming Campuses with a One-Stop Solution.",
    },
    about: {
        path: "/about",
        title: "About LEARNSQUARE | Our Mission, Vision & Leadership Team",
        description: "Learn about LEARNSQUARE Technologies, the Hyderabad-based edtech company building AI tools and training that help colleges and students succeed.",
    },
    aicas: {
        path: "/aicas",
        title: "AICAS | AI-Powered Campus Automation ERP for Colleges",
        description: "AICAS is an AI-powered ERP with 14 modules that automates admissions, fees, exams, attendance and accreditation for colleges and universities.",
    },
    syntaxWorks: {
        path: "/syntax-works",
        title: "SyntaxWorks | Online Coding Practice & Assessment Platform",
        description: "Practice coding in multiple languages with the SyntaxWorks smart IDE, dynamic tests and performance analytics built for technical recruitment prep.",
    },
    semesterPrep: {
        path: "/semester-prep",
        title: "SemesterPrep | Semester Exam Notes, PYQs & Study Material",
        description: "Prepare for semester exams with SemesterPrep: expert-curated notes, previous year question papers, placement prep and real-time updates on any device.",
    },
    trainingPrograms: {
        path: "/training-programs",
        title: "Training Programs | Full Stack, Data Science & CRT Courses",
        description: "Industry-ready training in Python and Java Full Stack, MERN, Data Science, Cloud, Cyber Security and CRT, taking you from foundations to real projects.",
    },
    contact: {
        path: "/contact",
        title: "Contact LEARNSQUARE | Get in Touch with Our Hyderabad Team",
        description: "Contact LEARNSQUARE in Begumpet, Hyderabad for product demos, college partnerships, training enquiries or support. Call, email or send us a message.",
    },
    login: {
        path: "/login",
        title: "Login | Access Your LEARNSQUARE Student Account Securely",
        description: "Log in to your LEARNSQUARE account to access your courses, SemesterPrep content, assessments and learning progress from any device, anytime.",
    },
    register: {
        path: "/register",
        title: "Register | Create Your Free LEARNSQUARE Student Account",
        description: "Create a free LEARNSQUARE account to unlock study material, previous year papers, coding practice and training updates tailored to your university.",
    },
    privacy: {
        path: "/privacy",
        title: "Privacy Policy | How LEARNSQUARE Collects & Uses Your Data",
        description: "Read the LEARNSQUARE privacy policy to understand what personal data we collect, how we use and protect it, and the choices and rights you have.",
    },
    terms: {
        path: "/terms",
        title: "Terms & Conditions | Rules for Using LEARNSQUARE Services",
        description: "Read the terms and conditions that govern your use of the LEARNSQUARE website, products and training services, including your account responsibilities.",
    },
} satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof PAGE_SEO;

export function pageMetadata(page: PageKey): Metadata {
    const { title, description, path } = PAGE_SEO[page];
    // Square logo so WhatsApp/Telegram show the LEARNSQUARE icon as the link thumbnail.
    // (The 1200x630 banner from app/og/[page]/route.tsx is still available at /og/<page>.)
    const image = { url: "/share-logo.png", ...LOGO_SIZE, alt: "LEARNSQUARE logo" };
    return {
        title,
        description,
        // Self-canonical, resolved against metadataBase (SITE_URL) in app/layout.tsx
        alternates: { canonical: path },
        openGraph: {
            title,
            description,
            url: path,
            siteName: "LEARNSQUARE",
            type: "website",
            images: [image],
        },
        twitter: {
            card: "summary",
            title,
            description,
            images: [image],
        },
    };
}

/** Private pages (admin, profile): own tab title, kept out of search results. */
export function privateMetadata(title: string): Metadata {
    return { title, robots: { index: false, follow: false }, alternates: { canonical: null } };
}
