import React from "react";
import ActionButton from "./ActionButton";

const FeaturedContent = ({ mediaSrc, mediaAlt, title, content, cta, ctaHref, ctaLabel }) => {
    return (
        <div className="feature">
            <div className="feature__media">
                <img
                    src={mediaSrc}
                    alt={mediaAlt}
                    className="bio__img"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="feature__content">
                <h2 className="h-staff">{title}</h2>
                {content}

                {cta &&
                    <div className="feature__actions">
                        <ActionButton 
                            cfg={{ label: ctaLabel, href: ctaHref }}
                            variant="primary"
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default FeaturedContent;