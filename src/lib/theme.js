const STORAGE_KEY = "user-theme";
const OVERRIDE_ATTR = "data-user-theme";

export function getSystemPref() {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) return "dark";
    if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return "light";
    return "no-preference";
}

export function applyTheme(theme, { userOverride = false } = {}) {
    const root = document.documentElement;
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.setAttribute("data-theme", "dark");

    if (userOverride) root.setAttribute(OVERRIDE_ATTR, "true");
    else root.removeAttribute(OVERRIDE_ATTR);
}

export function initTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const sys = getSystemPref();
    const initial =
        stored || (sys === "dark" || sys === "light" ? sys : "dark");

    applyTheme(initial, { userOverride: Boolean(stored) });

    const root = document.documentElement;
    if (!root.hasAttribute(OVERRIDE_ATTR) && window.matchMedia) {
        const darkQ = window.matchMedia("(prefers-color-scheme: dark)");
        const lightQ = window.matchMedia("(prefers-color-scheme: light)");
        const onChange = () => {
        const r = document.documentElement;
        if (!r.hasAttribute(OVERRIDE_ATTR)) {
            const sysNow = getSystemPref();
            applyTheme(sysNow === "light" ? "light" : "dark");
        }
        };
        darkQ.addEventListener?.("change", onChange);
        lightQ.addEventListener?.("change", onChange);
    }
}

export function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next, { userOverride: true });
    localStorage.setItem(STORAGE_KEY, next);
}