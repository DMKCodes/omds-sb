import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "../../lib/analytics";

const AnalyticsTracker = () => {
    const { pathname, search } = useLocation();
    const lastRef = useRef("");

    useEffect(() => {
        const key = pathname + search;
        if (key === lastRef.current) return;
        lastRef.current = key;

        const id = setTimeout(() => {
            trackPageview({ path: key, title: document.title });
        }, 0);

        return () => clearTimeout(id);
    }, [pathname, search]);

    return null;
};

export default AnalyticsTracker;