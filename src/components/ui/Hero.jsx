import React from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import Video from '../common/Video';
import ActionButton from "./ActionButton";
import "../../styles/components/_hero.scss";

const Hero = ({
    eyebrow, title, sub,
    primary, secondary,
    posterSrc, videoSrc, captions = [],
    align="left",
    children,
    as: As = "div",
    contained = true
}) => {
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
                    <motion.h1 className="hero__title" variants={animationItem}>{title}</motion.h1>
                    {sub && (
                        <motion.p className="hero__sub" variants={animationItem}>
                            {sub}
                        </motion.p>
                    )}

                    {children}

                    {(primary || secondary) && (
                        <motion.div className="hero__actions" variants={animationItem}>
                            <ActionButton cfg={primary} variant="primary" data-spotlight />
                            <ActionButton cfg={secondary} variant="secondary" data-spotlight />
                        </motion.div>
                    )}
                </motion.div>

                {posterSrc && (
                    <motion.div
                        className="hero__media"
                        variants={animationItem}
                        initial="hidden"
                        animate="show"
                    >
                        {videoSrc ? (
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <button className="hero__poster" type="button" aria-label="Play video">
                                        <img src={posterSrc} alt="" />
                                        <span className="hero__play" aria-hidden="true">▶</span>
                                    </button>
                                </Dialog.Trigger>

                                <Dialog.Portal>
                                    <Dialog.Overlay className="hero-modal__overlay" />
                                    <Dialog.Content className="hero-modal__content" aria-label="Video">
                                        <Dialog.Close className="hero-modal__close" aria-label="Close">✕</Dialog.Close>
                                        <Video
                                            src={videoSrc}
                                            poster={posterSrc}
                                            captions={captions}
                                            controls
                                            autoPlay={false}
                                            className="hero-modal__video"
                                        />
                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                        ) : (
                            <div className="hero__poster" aria-hidden="true">
                                <img src={posterSrc} alt="" />
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </As>
    );
};

export default Hero;