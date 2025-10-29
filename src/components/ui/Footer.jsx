import React from "react";
import { NavLink, Link } from "react-router-dom";
import ActionButton from "../common/ActionButton";
import { SITE } from "../../lib/siteConfig";

const Footer = () => {
    const logoSrc = "/assets/brand/logo.png";

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container footer__grid">
                <div className="footer__brand">
                    <Link to="/" className="footer__logo">
                        <img
                            src={logoSrc}
                            alt={`${SITE.name} logo`}
                            width="240"
                            height="72"
                            loading="lazy"
                            decoding="async"
                        />
                    </Link>
                </div>

                <nav className="footer__nav" aria-label="Footer">
                    <ul className="footer__links">
                        <li><NavLink to="/about"   className="footer__link">About</NavLink></li>
                        <li><NavLink to="/media"   className="footer__link">Media</NavLink></li>
                        <li><NavLink to="/events"  className="footer__link">Events</NavLink></li>
                        <li><NavLink to="/contact" className="footer__link">Contact</NavLink></li>
                        <li><NavLink to="/privacy" className="footer__link">Privacy Policy</NavLink></li>
                    </ul>
                </nav>

                <address className="footer__address">
                    <strong className="footer__business">Powerhouse Percussion</strong><br />
                    Wes Lambert &mdash; One-Man Chaos<br />
                    <a className="footer__contact" href="tel:+15555555555">+1 (555) 555-5555</a><br />
                    <a className="footer__contact" href="mailto:trashlan@ptd.net">trashlan@ptd.net</a><br />
                    Milford, Pike County, Pennsylvania
                    <p className="hotkey">
                        Website by{' '} 
                        <strong><a href="https://hotkeycreative.com">Hotkey Creative</a></strong>
                        .
                    </p>
                </address>
                

                <ActionButton
                    cfg={{ label: "Book now", href: "/contact" }}
                    variant="primary"
                    className="footer__cta"
                    data-spotlight
                />
            </div>

            <div className="footer__legal">
                <div className="container footer__legal-inner">
                <small>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;