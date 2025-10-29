import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import { featuredBioShort } from "../data/featured";
import { events } from "../data/events";
import { faq } from "../data/faq";
import { infoCards } from "../data/info-cards";

import Hero from "../components/ui/Hero";
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import ActionButton from "../components/common/ActionButton";
import FeaturedContent from "../components/common/FeaturedContent";
import FAQAccordion from "../components/common/FAQAccordion";
import TestimonialList from "../components/common/TestimonialList";
import CTA from "../components/common/CTA";

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
                            className="u-hover-elev" 
                        />
                    ))}
                </div>
            </Section>

            <Section padding="xl" alt>
                <FeaturedContent {...featuredBioShort} />
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
                                <li key={i} className="events__item u-hover-elev">
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
                <CTA />
            </Section>
        </div>
    );
};

export default Home;