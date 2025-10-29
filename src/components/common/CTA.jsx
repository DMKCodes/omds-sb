import React from "react";
import ActionButton from "./ActionButton";

const CTA = () => {
    return (
        <div className="cta u-hover-elev">
            <h2 style={{ fontFamily: "Anton SC, system-ui, sans-serif" }}>
                Ready to bring the One-Man Drum Show to your event?
            </h2>
            <p className="muted">Fast confirmations • Flexible logistics • Family-friendly fun</p>
            <div className="cta__actions">
                <ActionButton 
                    cfg={{ label: "Check Availability", href: "/contact" }} 
                    variant="primary" 
                />
                <ActionButton 
                    cfg={{ label: "See Packages", href: "/about#packages" }} 
                    variant="secondary" 
                />
            </div>
        </div>
    );
};

export default CTA;