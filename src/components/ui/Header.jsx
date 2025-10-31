import React from "react";
import { NavLink, Link } from "react-router-dom";
import { trackCtaClick } from "../../lib/analytics";
import { SITE } from "../../lib/siteConfig";
import SocialIcons from "./SocialIcons";
import SpotlightLayer from "../ui/SpotlightLayer";
import ThemeToggle from "../common/ThemeToggle";

const links = [
    { to: "info", label: "INFO" },
    { to: "/media", label: "MEDIA" },
    { to: "/events", label: "EVENTS" },
    { to: "/contact", label: "CONTACT" },
];

const Header = () => {
    const logoSrc = "/assets/brand/logo.png";

    return (
        <header className="site-header" role="banner">
            <div className="header-bg" aria-hidden="true" />
            <SpotlightLayer />

            <div className="container header-inner">
                <div className="header-left">
                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label="Open menu"
                        aria-controls="primary-nav"
                        aria-expanded="false"
                    >
                        {/* your hamburger icon here */}
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
                    <ThemeToggle className="u-mr-sm" />
                </div>
            </div>
        </header>
    );
};

export default Header;