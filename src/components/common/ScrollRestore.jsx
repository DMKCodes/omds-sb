import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Restores scroll position as user navigates to/from pages; replace import & line in App.jsx w/ ScrollToTop for more basic implementation
const ScrollRestore = () => {
    const location = useLocation();
    const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
    const positions = useRef(getStore());

    // Save position prior to nav
    useEffect(() => {
        const key = location.key || location.pathname + location.search;
        const handler = () => {
        positions.current[key] = { x: window.scrollX, y: window.scrollY };
        setStore(positions.current);
        };
        window.addEventListener("beforeunload", handler);
        return () => {
        handler();
        window.removeEventListener("beforeunload", handler);
        };
    }, [location]);

    // Restore position
    useLayoutEffect(() => {
        const key = location.key || location.pathname + location.search;

        if (location.hash) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
            el.scrollIntoView({ block: "start" });
            return;
        }
        }

        if (navType === "POP") {
        const pos = positions.current[key];
        if (pos) {
            window.scrollTo(pos.x, pos.y);
            return;
        }
        }

        window.scrollTo(0, 0);
    }, [location, navType]);

    return null;
};

function getStore() {
    try {
        return JSON.parse(sessionStorage.getItem("__scroll__") || "{}");
    } catch {
        return {};
    }
};

function setStore(obj) {
    try {
        sessionStorage.setItem("__scroll__", JSON.stringify(obj));
    } catch { /* ignore */ }
};

export default ScrollRestore;