import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../../styles/components/_lightbox.scss";

const MediaLightbox = ({ items = [] }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = items.map((m) => ({ src: m.src, alt: m.alt }));

    return (
        <>
            <div className="media-grid">
                {items.map((m, i) => (
                    <button 
                        key={i}
                        className="media-thumb"
                        onClick={() => { setIndex(i); setOpen(true); }}
                        aria-label={`Open image: ${m.alt || "media"}`}
                    >
                        <img src={m.src} alt={m.alt || ""} />
                    </button>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
                controller={{ closeOnBackdropClick: true }}
                render={{
                    slide: ({ slide }) => (
                        <img 
                            src={slide.src} 
                            alt={slide.alt || ""} 
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "contain" 
                            }} 
                        />
                    ),
                }}
            />
        </>
    );
};

export default MediaLightbox;