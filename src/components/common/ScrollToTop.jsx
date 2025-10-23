import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Returns to top of page as user navigates to/from pages; replace import & line in App.jsx w/ ScrollRestore for more robust implementation
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);
    
    return null;
};

export default ScrollToTop;