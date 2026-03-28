export type AuthSession = { email: string; id: number; isAdmin: boolean };

export function getAuthFromCookie(): AuthSession | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/auth=([^;]+)/);
    if (!match) return null;
    try {
        return JSON.parse(atob(decodeURIComponent(match[1]))) as AuthSession;
    } catch {
        return null;
    }
}

export function setAuthCookie(session: AuthSession) {
    const value = btoa(JSON.stringify(session));
    document.cookie = `auth=${value}; path=/; max-age=86400; SameSite=Lax`;
}

export function clearAuthCookie() {
    document.cookie = "auth=; path=/; max-age=0";
}
