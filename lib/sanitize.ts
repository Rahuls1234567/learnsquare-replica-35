import DOMPurify from "isomorphic-dompurify";

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
} as const;

/** Fallback if isomorphic-dompurify fails in some Node / hosting environments */
function sanitizeHtmlFallback(html: string): string {
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
}

/**
 * Sanitize HTML to prevent XSS attacks before saving or rendering.
 * Allows common formatting tags and attributes used in content blocks.
 */
export function sanitizeHtml(html: string): string {
    try {
        return DOMPurify.sanitize(html, PURIFY_OPTIONS);
    } catch (err) {
        console.error("sanitizeHtml: DOMPurify failed, using fallback", err);
        return sanitizeHtmlFallback(html);
    }
}
