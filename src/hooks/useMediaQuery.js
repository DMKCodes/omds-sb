import { useSyncExternalStore } from "react";

export default function useMediaQuery(query) {
    const subscribe = (onStoreChange) => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return () => {};
        }

        const mql = window.matchMedia(query);
        const handler = () => onStoreChange();
        if (mql.addEventListener) mql.addEventListener("change", handler);
        else mql.addListener(handler); // Safari fallback

        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", handler);
            else mql.removeListener(handler);
        };
    };

    const getSnapshot = () => {
        if (typeof window === "undefined" || !window.matchMedia) return false;
        return window.matchMedia(query).matches;
    };

    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};