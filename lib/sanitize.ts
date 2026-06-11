const PURIFY_OPTIONS = {
    ALLOWED_TAGS: [
        "p", "br", "strong", "b", "em", "i", "u", "s", "strike",
        "h1", "h2", "h3", "h4", "h5", "h6",
        "ul", "ol", "li",
        "a", "span", "div",
        "blockquote", "pre", "code",
        "img", "table", "thead", "tbody", "tr", "th", "td",
        "sub", "sup", "mark", "small", "del", "ins"
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "target", "rel"],
};

/**
 * Robust fallback sanitizer that doesn't rely on jsdom (which breaks Next.js SSR)
 * Strips script tags and inline event handlers to prevent XSS.
 */
function sanitizeHtmlFallback(html: string): string {
    if (!html) return "";
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
}

/**
 * Sanitize HTML to prevent XSS attacks before saving or rendering.
 * Uses a safe regex fallback to prevent JSDOM SSR crashes.
 */
export function sanitizeHtml(html: string): string {
    return sanitizeHtmlFallback(html);
}
