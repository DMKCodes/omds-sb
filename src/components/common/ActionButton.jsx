import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const ActionButton = ({ cfg, variant="primary" }) => {
    if (!cfg) return null;

    let className
    switch (variant) {
        case "primary":
            className = "c-button"
            break
        case "secondary":
            className = "c-button c-button--ghost"
            break
        case "accent":
            className = "c-button c-button--accent"
            break
        default:
            className = "c-button"
    }

    if (cfg.href) {
        const href = typeof cfg?.href === "string" ? cfg.href : "";
        const isInternal = href.startsWith("/");
        
        return isInternal ? (
            <a className={className} href={cfg.href}>
                {cfg.label} <FontAwesomeIcon icon={faHandPointRight} size="lg" className="c-button__icon" />
            </a>
        ) : (
            <a className={className} href={cfg.href} target="_blank" rel="noreferrer">
                {cfg.label} <FontAwesomeIcon icon={faHandPointRight} size="lg" className="c-button__icon" />
            </a>
        )
    }
    
    return (
        <button className={className} type="button" onClick={cfg.onClick}>
            {cfg.label} <FontAwesomeIcon icon={faHandPointRight} size="lg" className="c-button__icon" />
        </button>
    );
};

export default ActionButton;