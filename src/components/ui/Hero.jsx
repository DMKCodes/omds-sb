import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import Video from '../common/Video';
import ActionButton from "./ActionButton";
import "../../styles/components/_hero.scss";

const PosterPlaceholder = () => (
    <div className="hero__poster hero__poster--placeholder" aria-hidden="true">
        <div className="hero__ph-media" />
    </div>
);

const Hero = ({
    eyebrow, title, sub,
    primary, secondary,
    posterSrc, videoSrc, captions = [],
    align="left",
    children,
    as: As = "div",
    contained = true
}) => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen((v) => !v);
    const handleOpen = () => setOpen(true);
    const reduced = usePrefersReducedMotion();

    const container = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1, 
            y: 0,
            transition: { duration: 0.38, ease: "easeOut", staggerChildren: 0.06 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
    };

    const animationContainer = reduced ? {} : container;
    const animationItem = reduced ? {} : item;

    return (
        <As className={`hero hero--${align} ${contained ? "hero--contained" : ""}`}>
            <div className="hero__grid">
                <motion.div
                    className="hero__content"
                    variants={animationContainer}
                    initial="hidden"
                    animate="show"
                >
                    {eyebrow && (
                        <motion.div className="hero__eyebrow" variants={animationItem}>
                            {eyebrow}
                        </motion.div>
                    )}
                    <motion.h1 className="hero__title h-staff" variants={animationItem}>{title}</motion.h1>
                    {sub && (
                        <motion.p className="hero__sub" variants={animationItem}>
                            {sub}
                        </motion.p>
                    )}

                    {children}

                    {(primary || secondary) && (
                        <motion.div className="hero__actions" variants={animationItem}>
                            <ActionButton cfg={primary} variant="primary" />
                            <ActionButton cfg={secondary} variant="secondary" />
                        </motion.div>
                    )}
                </motion.div>

                {(posterSrc || videoSrc) && (
                    <motion.div 
                        className="hero__media" 
                        variants={animationItem} 
                        initial="hidden" 
                        animate="show"
                    >
                        {videoSrc ? (
                            <button
                                type="button"
                                className="hero__poster"
                                aria-label={open ? "Pause video" : "Play video"}
                                onClick={handleOpen}
                            >
                                {posterSrc ? (
                                    <img src={posterSrc} alt="" loading="lazy" decoding="async" />
                                ) : (
                                    <PosterPlaceholder />
                                )}
                            </button>
                        ) : (
                            <div className="hero__poster" aria-hidden="true">
                                <img src={posterSrc} alt="" loading="lazy" decoding="async" />
                            </div>
                        )}

                        {videoSrc && (
                            <button
                                type="button"
                                className="hero__control"
                                aria-pressed={open}
                                aria-label={open ? "Pause video" : "Play video"}
                                onClick={handleToggle}
                            >
                                <FontAwesomeIcon 
                                    icon={open ? faPause : faPlay} 
                                    className="hero__control-icon" 
                                />
                                <span className="hero__control-text">{open ? "Pause" : "Play"}</span>
                            </button>
                        )}

                        {videoSrc && (
                            <Dialog.Root open={open} onOpenChange={setOpen}>
                                <Dialog.Portal>
                                    <Dialog.Overlay className="hero-modal__overlay" />
                                    <Dialog.Content className="hero-modal__content" aria-label="Video">
                                        <Dialog.Close className="hero-modal__close" aria-label="Close">✕</Dialog.Close>
                                        <Video
                                            src={videoSrc}
                                            poster={posterSrc}
                                            captions={captions}
                                            controls
                                            autoPlay={open}
                                            className="hero-modal__video"
                                        />
                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                        )}
                    </motion.div>
                )}
            </div>
        </As>
    );
};

export default Hero;