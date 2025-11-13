import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { trackCtaClick } from "../../lib/analytics";
import { SITE } from "../../lib/siteConfig";
import SocialIcons from "./SocialIcons";
import SpotlightLayer from "../ui/SpotlightLayer";

const links = [
    { to: "info", label: "INFO" },
    { to: "/media", label: "MEDIA" },
    { to: "/events", label: "EVENTS" },
    { to: "/contact", label: "CONTACT" },
];

const Header = () => {
    const logoSrc = "/assets/brand/logo.png";
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="site-header" role="banner">
            <div className="header-bg" aria-hidden="true" />
            <SpotlightLayer />

            <div className="container header-inner">
                <div className="header-left">
                <button
                    className={`menu-toggle${open ? " is-open" : ""}`}
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-controls="mobile-nav"
                    aria-expanded={open ? "true" : "false"}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="menu-toggle__bar" />
                    <span className="menu-toggle__bar" />
                    <span className="menu-toggle__bar" />
                </button>

                    <nav id="primary-nav" aria-label="Primary" className="primary-nav">
                        <ul className="nav">
                            {links.map((l) => (
                                <li key={l.to}>
                                    <NavLink
                                        to={l.to}
                                        end
                                        data-spotlight
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                        onClick={() => trackCtaClick({ label: l.label, location: "Header" })}
                                    >
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            
                <Link className="logo" to="/">
                    <img
                        src={logoSrc}
                        alt={`${SITE.name} logo`}
                        className="logo__img"
                        height="80"
                        width="320"
                        decoding="async"
                        data-spotlight
                    />
                </Link>
                
                <div className="header-right">
                    <SocialIcons size="md" location="Header" />
                </div>
            </div>

            {open && <div className="header-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}

            <nav
                id="mobile-nav"
                className={`mobile-nav${open ? " is-open" : ""}`}
                aria-label="Mobile primary"
            >
                <ul className="mobile-nav__list">
                    {links.map((l) => (
                        <li key={l.to}>
                            <NavLink
                                to={l.to}
                                end
                                className={({ isActive }) => (isActive ? "mobile-nav__link active" : "mobile-nav__link")}
                                onClick={() => {
                                    trackCtaClick({ label: l.label, location: "Header Mobile" });
                                    setOpen(false);
                                }}
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;