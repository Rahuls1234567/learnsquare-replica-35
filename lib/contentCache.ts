/**
 * Client-side content cache with request batching (DataLoader pattern).
 * All EditableContent components that mount in the same tick will share
 * ONE batch request instead of firing 30+ individual API calls.
 */

type ContentCallback = (html: string | null) => void;

interface PendingRequest {
    callbacks: ContentCallback[];
}

// Module-level singletons (persist across re-renders on client)
let pendingKeys: Map<string, PendingRequest> = new Map();
let batchTimer: ReturnType<typeof setTimeout> | null = null;
const cache = new Map<string, string | null>();

async function flushBatch() {
    batchTimer = null;
    const keys = Array.from(pendingKeys.keys());
    const pending = new Map(pendingKeys);
    pendingKeys = new Map();

    try {
        const res = await fetch('/api/content/batch', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keys }),
        });

        if (res.ok) {
            const data: Record<string, string> = await res.json();
            keys.forEach(key => {
                const html = data[key] ?? null;
                cache.set(key, html);
                pending.get(key)?.callbacks.forEach(cb => cb(html));
            });
        } else {
            keys.forEach(key => {
                cache.set(key, null);
                pending.get(key)?.callbacks.forEach(cb => cb(null));
            });
        }
    } catch {
        keys.forEach(key => {
            pending.get(key)?.callbacks.forEach(cb => cb(null));
        });
    }
}

export function fetchContent(key: string, callback: ContentCallback) {
    // Return from cache immediately if available
    if (cache.has(key)) {
        // Use setTimeout to keep async behaviour consistent
        setTimeout(() => callback(cache.get(key)!), 0);
        return;
    }

    // Add to pending batch
    if (!pendingKeys.has(key)) {
        pendingKeys.set(key, { callbacks: [] });
    }
    pendingKeys.get(key)!.callbacks.push(callback);

    // Schedule batch flush — collected during the current microtask queue
    if (!batchTimer) {
        batchTimer = setTimeout(flushBatch, 0);
    }
}

export function invalidateContent(key: string) {
    cache.delete(key);
}
