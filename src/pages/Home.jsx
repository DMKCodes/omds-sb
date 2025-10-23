import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import { events } from "../data/events";
import { faq } from "../data/faq";
import { infoCards } from "../data/info-cards";

import Hero from "../components/ui/Hero";
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import Video from "../components/common/Video";
import ActionButton from "../components/ui/ActionButton";
import FAQAccordion from "../components/modules/FAQAccordion";
import TestimonialList from "../components/modules/TestimonialList";

const Home = () => {
    const seo = buildSeo({
        title: "Powerhouse Percussion",
        description: "Positivity Through Percussion | Audiovisual Performances | Pike County, PA",
        path: "/",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section padding="xl" alt>
                <Hero
                    as="div"
                    contained={false}
                    align="left"
                    title="POSITIVITY THROUGH PERCUSSION."
                    sub="One man. One hundred drums. One unforgettable performance."
                    primary={{ label: "Get in touch", href: "/contact" }}
                    secondary={{ label: "Preview the show", href: "/media" }}
                    posterSrc="/assets/media/promo-pic-test.jpeg"
                    videoSrc="/assets/media/placeholder-vid.mp4"
                />
            </Section>

            <Section padding="xl" alt>
                <div className="grid grid--3">
                    {infoCards.map((c, i) => (
                        <Card 
                            key={i} 
                            title={c.title} 
                            text={c.text} 
                            media={c.media}  
                        />
                    ))}
                </div>
            </Section>

            <Section padding="xl" alt>
                <div className="feature feature--media">
                    <div className="feature__media">
                        <Video
                            src="/assets/vid/placeholder-vid.mp4"
                            poster="/assets/vid/promo-pic-test.jpeg"
                            controls
                            autoPlay={false}
                            captions={[]}
                        />
                    </div>
                    <div className="feature__content">
                        <h2 className="h3">Video Drum Solo (VDS)</h2>
                        <p className="muted">
                            A visual story first—then the drum solo amplifies it. Imagery, light, and rhythm in one seamless performance.
                        </p>
                        <ActionButton 
                            cfg={{ label: "See Media & Testimonials", href: "/media" }} 
                            variant="primary" 
                        />
                    </div>
                </div>
            </Section>

            <Section padding="xl" alt>
                <h2 className="h3">What People Are Saying</h2>
                <TestimonialList />
                <div className="u-mt-md">
                    <ActionButton
                        cfg={{ label: "More Media & Reviews", href: "/media" }}
                        variant="secondary"
                    />
                </div>
            </Section>

            <Section padding="xl" alt>
                <div className="events">
                    <h2 className="h3">Upcoming Events</h2>
                    {events.length ? (
                        <ul className="events__list">
                            {events.map((e, i) => (
                            <li key={i} className="events__item">
                                <div className="events__date">{e.date}</div>
                                <div className="events__venue">{e.venue}</div>
                                <div className="events__city">{e.city}</div>
                            </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="muted">New dates coming soon! Check back shortly.</p>
                    )}
                    <div className="u-mt-sm">
                        <ActionButton
                            cfg={{ label: "View All Events", href: "/events" }}
                            variant="secondary"
                        />
                    </div>
                </div>
            </Section>

            <Section padding="xl" alt>
                <h2 className="h3">FAQ</h2>
                <FAQAccordion items={faq} />
            </Section>

            <Section padding="xl" alt>
                <div className="cta">
                    <h2 className="h2">Ready to bring the One-Man Drum Show to your event?</h2>
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
            </Section>
        </div>
    );
};

export default Home;