"use client";

import { useEffect, useState } from "react";

type CmsContentProps = {
    contentKey: string;
    fallback?: React.ReactNode;
    className?: string;
    /** When true, skips cms-content prose styles - use for fully-styled HTML blocks */
    raw?: boolean;
};

/**
 * Fetches and renders CMS content by key.
 * Uses existing CSS classes from the global stylesheet.
 * Content is sanitized server-side before rendering.
 */
export function CmsContent({ contentKey, fallback = null, className = "", raw = false }: CmsContentProps) {
    const [html, setHtml] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetch(`/api/content/${encodeURIComponent(contentKey)}`)
            .then((res) => res.json())
            .then((data) => {
                if (!cancelled) setHtml(data.htmlContent ?? "");
            })
            .catch(() => {
                if (!cancelled) setHtml("");
            });
        return () => {
            cancelled = true;
        };
    }, [contentKey]);

    if (html === null) return <>{fallback}</>;
    if (!html) return <>{fallback}</>;

    const wrapperClass = raw ? className : `cms-content ${className}`.trim();

    return (
        <div
            className={wrapperClass || undefined}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
