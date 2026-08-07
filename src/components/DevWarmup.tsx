"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const ROUTES_TO_PREFETCH = [
    "/contact",
    "/syntax-works",
    "/aicas",
    "/myskillforge",
    "/training-programs",
    "/test-prep-pro",
    "/login",
    "/register",
];

// Only routes that accept GET belong here — POST-only routes always 405 on
// warmup and just spam the console without adding any real compile benefit.
const API_ROUTES_TO_WARM = [
    "/api/admin/reports",
];

export default function DevWarmup() {
    const router = useRouter();
    const warmed = useRef(false);

    useEffect(() => {
        if (warmed.current) return;
        warmed.current = true;

        // Prefetch pages so they're compiled before user clicks
        for (const route of ROUTES_TO_PREFETCH) {
            router.prefetch(route);
        }

        // Warm API routes with GET so they compile before first form submit
        const base = typeof window !== "undefined" ? window.location.origin : "";
        for (const api of API_ROUTES_TO_WARM) {
            fetch(`${base}${api}`, { method: "GET" }).catch(() => {});
        }
    }, [router]);

    return null;
}
