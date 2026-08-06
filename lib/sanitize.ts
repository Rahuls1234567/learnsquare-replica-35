const ALLOWED_TAGS = new Set([
    "p", "br", "strong", "b", "em", "i", "u", "s", "strike",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "ul", "ol", "li",
    "a", "span", "div",
    "blockquote", "pre", "code",
    "img", "table", "thead", "tbody", "tr", "th", "td",
    "sub", "sup", "mark", "small", "del", "ins",
]);

const ALLOWED_ATTR = new Set(["href", "src", "alt", "title", "class", "target", "rel"]);

function isSafeUrl(value: string): boolean {
    const trimmed = value.trim().toLowerCase();
    return (
        trimmed.startsWith("/") ||
        trimmed.startsWith("#") ||
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("tel:")
    );
}

function sanitizeHtmlInBrowser(html: string): string {
    const template = document.createElement("template");
    template.innerHTML = html;

    template.content.querySelectorAll("*").forEach((node) => {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();

        if (tagName === "script" || tagName === "style") {
            element.remove();
            return;
        }

        if (!ALLOWED_TAGS.has(tagName)) {
            element.replaceWith(...Array.from(element.childNodes));
            return;
        }

        Array.from(element.attributes).forEach((attr) => {
            const name = attr.name.toLowerCase();
            const value = attr.value;

            if (!ALLOWED_ATTR.has(name) || name.startsWith("on")) {
                element.removeAttribute(attr.name);
                return;
            }

            if ((name === "href" || name === "src") && !isSafeUrl(value)) {
                element.removeAttribute(attr.name);
            }
        });

        if (tagName === "a" && element.getAttribute("target") === "_blank") {
            element.setAttribute("rel", "noopener noreferrer");
        }
    });

    return template.innerHTML;
}

/** Fallback if isomorphic-dompurify fails in some Node / hosting environments */
function sanitizeHtmlFallback(html: string): string {
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
        .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
        .replace(/\s(href|src)\s*=\s*(['"]?)\s*javascript:[^'"\s>]*/gi, "")
        .replace(/\s(href|src)\s*=\s*(['"]?)\s*data:[^'"\s>]*/gi, "");
}

/**
 * Sanitize HTML to prevent XSS attacks before saving or rendering.
 * Allows common formatting tags and attributes used in content blocks.
 */
export function sanitizeHtml(html: string): string {
    if (!html) return "";

    if (typeof window !== "undefined" && typeof document !== "undefined") {
        return sanitizeHtmlInBrowser(html);
    }

    return sanitizeHtmlFallback(html);
}
