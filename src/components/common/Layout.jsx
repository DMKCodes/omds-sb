import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { SITE } from "../../lib/siteConfig";
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        document.getElementById("main")?.focus?.();
    }, [pathname]);

    return (
        <>
            {/* Optional fallback helmet, per-page values override this by default */}
            <Helmet>
                <title>{SITE.name}</title>
                <meta name="description" content={SITE.tagline} />
                <link rel="canonical" href={SITE.siteUrl} />
            </Helmet>

            <a className="skip-to-content-link" href="#main">Skip to page content</a>
            <Header />
            <main id="main" role="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;