import React from "react";

const ActionButton = ({ cfg, variant="primary" }) => {
    if (!cfg) return null;
    const className = variant === "primary" ? "c-button" : "c-button c-button--ghost";

    if (cfg.href) {
        const isInternal = cfg.href.startsWith("/");
        return isInternal ? (
            <a className={className} href={cfg.href}>{cfg.label}</a>
        ) : (
            <a className={className} href={cfg.href} target="_blank" rel="noreferrer">{cfg.label}</a>
        )
    }
    
    return (
        <button className={className} type="button" onClick={cfg.onClick}>
            {cfg.label}
        </button>
    );
};

export default ActionButton;