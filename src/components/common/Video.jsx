import React, { useRef, useState, useEffect } from "react";
import "../../styles/components/_video.scss";

/* Props:
   - src: string (mp4 | webm) or YouTube URL (iframe handled OOTB)
   - poster?: string
   - captions?: [] { src: string, srclang?: string, label?: string, default?: boolean }
   - controls?: boolean (default: true)
   - autoPlay?: boolean (default: false) -> if true, forced mute avoids autoplay sound
   - loop?: boolean (default: true)
*/

const Video = (props) => {
    const isYT = isYouTube(props.src);
    return isYT ? <VideoYouTube {...props} /> : <VideoNative {...props} />;
};

const VideoYouTube = ({ src, className = "", ...rest }) => {
    return (
        <div className={`vid ${className}`} {...rest}>
            <div className="vid__frame">
                <iframe
                    title="Video"
                    src={toYoutubeEmbed(src)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

const VideoNative = ({ 
    src,
    poster,
    captions = [],
    controls = true,
    autoPlay = false,
    loop = true,
    className = "",
    ...rest
}) => {
    const ref = useRef(null);
    const [muted, setMuted] = useState(autoPlay ? true : false);

    // Maintain mute during autoplay re: browser standards
    useEffect(() => {
        if (autoPlay && ref.current) {
            ref.current.muted = true;
            ref.current.play().catch(() => {});
        }
    }, [autoPlay]);

    const toggleMute = () => {
        setMuted((m) => {
            const next = !m;
            if (ref.current) ref.current.muted = next;
            return next;
        });
    };

    const hasCaptions = captions.length > 0;

    return (
        <div className={`vid ${className}`} {...rest}>
            <video
                ref={ref}
                className="vid__media"
                src={src}
                poster={poster}
                controls={controls}
                muted={muted}
                loop={loop}
                playsInline
                preload="metadata"
            >
                <track 
                    kind="captions" 
                    src={hasCaptions ? captions.src : null}
                    srcLang="en" 
                    label="English" 
                    default 
                />
            </video>

            {autoPlay && (
                <button
                    type="button"
                    className="vid__mute"
                    onClick={toggleMute}
                    aria-pressed={!muted}
                >
                    {muted ? "Unmute" : "Mute"}
                </button>
            )}
        </div>
    );
};

const isYouTube = (url) => {
    try {
        const u = new URL(url);
        return /youtube\.com|youtu\.be/i.test(u.hostname);
    } catch {
        return false;
    }
};

const toYoutubeEmbed = (url) => {
    try {
        const u = new URL(url);
        if (u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.pathname.slice(1)}?rel=0`
        if (u.hostname.includes("youtube.com")) {
            const id = u.searchParams.get("v");
            return `https://www.youtube.com/embed/${id}?rel=0`;
        }
    } catch { /* ignore */ }

    return url;
};

export default Video;