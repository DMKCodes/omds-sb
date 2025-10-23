import React from "react";
import { Link } from "react-router-dom";
import { trackCtaClick } from "../../lib/analytics";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <nav aria-label="Footer">
                    <ul className="footer-nav">
                        <li>
                            <Link 
                                to="/faq" 
                                onClick={() => trackCtaClick({ label: "FAQ", location: "Footer" })}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                onClick={() => trackCtaClick({ label: "Contact", location: "Footer" })}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a 
                                href="mailto:hello@example.com"
                                onClick={() => trackCtaClick({ label: "Email", location: "Footer" })}
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                </nav>
                <p>© {year} HOTKEY CREATIVE</p>
            </div>
        </footer>
    );
};

export default Footer;