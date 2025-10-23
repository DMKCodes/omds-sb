import React from "react";
import Container from "../common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../data/socials";
import { trackEvent } from "../../lib/analytics";
import "../../styles/components/_spotlight.scss";

/*
 * props:
 * - items: [{ name, link, icon }]
 * - size: "sm" | "md" | "lg"
 * - location: string (e.g., "Header", "Footer", "Hero")
 * - className: string
 * - utm?: { source?: string; medium?: string; campaign?: string }
 */
const SocialIcons = ({
    items = socials,
    size = "md",
    location = "Header",
    className = "",
    utm = { source: "website", medium: "social", campaign: location.toLowerCase() },
}) => {
    const handleTracking = (name, href) => {
        trackEvent("social_click", { network: name, href, location });
    };

    const withUtm = (url) => {
        if (!url) return "";
        try {
            const u = new URL(url);
            if (utm) {
                if (utm.source) u.searchParams.set("utm_source", utm.source);
                if (utm.medium) u.searchParams.set("utm_medium", utm.medium);
                if (utm.campaign) u.searchParams.set("utm_campaign", utm.campaign);
            }
            return u.toString();
        } catch {
            return url;
        }
    };

    const sizeClass = {
        sm: "social--sm",
        md: "social--md",
        lg: "social--lg",
    }[size];

    return (
        <Container>
            <ul className={`social ${sizeClass} ${className}`}>
                {items
                    .filter((it) => it.link)
                    .map(({ name, link, icon }) => {
                        const href = withUtm(link);
                        return (
                            <li key={name}>
                                <a
                                    className="social__btn"
                                    href={href}
                                    data-spotlight
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    onClick={(e) => handleTracking(name, href, e)}
                                    onAuxClick={(e) => {
                                        if (e.button === 1) handleTracking(name, href, e);
                                    }}
                                >
                                    <FontAwesomeIcon icon={icon} className="social__icon" />
                                    <span className="sr-only">{name}</span>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </Container>
    );
};

export default SocialIcons;