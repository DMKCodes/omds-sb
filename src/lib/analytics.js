import { SITE } from "./siteConfig";

// Respect DNT
const dnt = () => 
    typeof navigator !== "undefined" && 
(navigator.doNotTrack === "1" || window.doNotTrack === "1");

// Script checks
const hasPlausible = () => typeof window !== "undefined" && typeof window.plausible === "function";
const hasGA = () => typeof window !== "undefined" && typeof window.gtag === "function";

const abs = (path) =>
    path?.startsWith("http") ? path : `${SITE.siteUrl}${path?.startsWith("/") ? "" : "/"}${path || ""}`;

// Page view on route changes
export function trackPageview({ path, title }) {
    if (dnt()) return;

    try {
        const url = abs(path || window.location.pathname + window.location.search);
        const page_title = title || document.title || SITE.name;

        // Plausible
        if (hasPlausible()) {
        // Optional: pass the full URL so it matches canonical
        window.plausible("pageview", { u: url });
        }

        // GA4
        if (hasGA()) {
        window.gtag("event", "page_view", {
            page_title,
            page_location: url,
            page_path: path || window.location.pathname,
        });
        }
    } catch (_) { /* ignore */ }
}

// Generic event helper
export function trackEvent(name, params = {}) {
    if (dnt()) return;
    
    try {
        // Plausible (event name: string, props in {props})
        if (hasPlausible()) {
            window.plausible(name, { props: params });
        }

        // GA4 (event name: string, params object)
        if (hasGA()) {
            window.gtag("event", name, params);
        }
    } catch (_) { /* ignore */ }
}

// Wrapper for common events
export const trackCtaClick = ({ label, location }) =>
    trackEvent("cta_click", { label, location });