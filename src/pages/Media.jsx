import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import { gallery, videos, press } from "../data/media";
import { trackCtaClick } from "../lib/analytics";

import Section from "../components/common/Section";
import Card from "../components/common/Card";
import Video from "../components/common/Video";
import MediaLightbox from "../components/common/MediaLightbox";
import TestimonialList from "../components/common/TestimonialList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Media = () => {
    const seo = buildSeo({
        title: "Media & Testimonials — One Man Drum Show | Pike County, Pennsylvania",
        description: "Watch performance clips, browse photos, and read testimonials for Powerhouse Percussion's One Man Drum Show. See why schools and event organizers love to book this immersive and educational drum show.",
        path: "/media",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            {/* Intro */}
            <Section padding="lg" alt>
                <h1 className="h-staff">Media & Testimonials</h1>
                <TestimonialList />
            </Section>

            {/* Gallery (Lightbox) */}
            <Section padding="lg" alt>
                <h2 className="h-staff">Photos</h2>
                <div className="media-grid">
                    {gallery.map((g, i) => (
                        <MediaLightbox items={g} key={i} />
                    ))}
                </div>

                
            </Section>

            {/* Videos */}
            <Section padding="lg">
                <h2 className="h-staff">Videos</h2>
                <div className="media-videos">
                    {videos.map((v) => (
                        <Card key={v.poster} className="u-hover-elev" data-hover-elev>
                            <div className="media-video">
                                <Video src={v.src} poster={v.poster} controls autoPlay={false} />
                            </div>
                            <div className="media-video__meta">{v.title}</div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Press */}
            <Section padding="lg" alt>
                <h2 className="h-staff">In the news</h2>
                <div className="press-grid">
                    {press.map((p) => (
                        <Card key={p.href} className="u-hover-elev" data-hover-elev>
                            <div className="card__media">
                                {p.icon && (
                                    <span className="card__icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={p.icon} />
                                    </span>
                                )}
                                <div className="press__body">
                                    <h3 className="card__title">{p.title}</h3>
                                    <p className="card__text">{p.summary}</p>
                                    <div className="press__source">{p.source}</div>
                                </div>
                            </div>
                            <div className="card__footer">
                                <a
                                    className="c-button c-button--ghost"
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                    trackCtaClick({
                                        label: `Press: ${p.source}`,
                                        location: "Media",
                                    })
                                    }
                                >
                                    Read article
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Media;