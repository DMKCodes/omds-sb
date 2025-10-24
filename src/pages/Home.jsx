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
import ActionButton from "../components/ui/ActionButton";
import FAQAccordion from "../components/modules/FAQAccordion";
import TestimonialList from "../components/modules/TestimonialList";

const Home = () => {
    const seo = buildSeo({
        title: "Powerhouse Percussion — One Man Chaos | Video Drum Show in Pike County, Pennsylvania",
        description: "A 45-minute drum and visuals extravaganza for schools, events, and parties. Book Powerhouse Percussion's One Man Drum Show for unforgettable, family-friendly entertainment in Northeast Pennsylvania.",
        path: "/",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section padding="xl" alt>
                <Hero
                    as="div"
                    contained={false}
                    align="left"
                    title="POSITIVITY THROUGH PERCUSSION."
                    sub="One man. One hundred drums. One unforgettable performance."
                    primary={{ label: "Book now", href: "/contact" }}
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
                <div className="feature feature--bio">
                    <div className="feature__media">
                        <img
                            src="assets\media\wes-pic-test.jpg"
                            alt="Wes Lambert, the One Man Chaos drum performer"
                            className="bio__img"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="feature__content">
                        <h2 className="h-staff">Who is One Man Chaos?</h2>
                        <p className="muted">
                            One Man Chaos is Wes Lambert—father, grandfather, longtime community leader, and retired youth coach. He co-built and served as president of the Matamoras Outdoor Community Hockey Rink and founded the TDS Bowl, a nonprofit charity. A self-taught drummer since 1979, Wes created the Video Drum Solo (VDS):
                            a story told through pictures and video, amplified by a drum performance. His 45-minute drum show uses over 100 drums, lights, and visuals to celebrate education, perseverance, positivity, and the unparalleled beauty of our natural world.
                        </p>
                    </div>
                </div>
            </Section>

            <Section padding="xl" alt>
                <h2 className="h-staff">What People Are Saying</h2>
                <TestimonialList />
                <div className="u-mt-md">
                    <ActionButton
                        cfg={{ label: "More Media & Reviews", href: "/media" }}
                        variant="primary"
                    />
                </div>
            </Section>

            <Section padding="xl" alt>
                <div className="events">
                    <h2 className="h-staff">Upcoming Events</h2>
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
                            variant="primary"
                        />
                    </div>
                </div>
            </Section>

            <Section padding="xl" alt>
                <h2 className="h-staff">FAQ</h2>
                <FAQAccordion items={faq} />
            </Section>

            <Section padding="xl" alt>
                <div className="cta">
                    <h2 style={{ fontFamily: "Anton SC, system-ui, sans-serif" }}>Ready to bring the One-Man Drum Show to your event?</h2>
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