import React from "react";
import "../styles/pages/_home.scss";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import { featuredBioShort } from "../data/featured";
import { infoCards } from "../data/info-cards";

import Hero from "../components/ui/Hero";
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import ActionButton from "../components/common/ActionButton";
import FeaturedContent from "../components/common/FeaturedContent";
import TestimonialList from "../components/common/TestimonialList";
import CTA from "../components/common/CTA";

const Home = () => {
    const seo = buildSeo({
        title: "One Man Drum Show — Musician & Entertainer",
        description: "A 45-minute drum and visuals extravaganza for schools, events, and parties. Book Powerhouse Percussion's One Man Drum Show for unforgettable, family-friendly entertainment in Northeast Pennsylvania.",
        path: "/",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            {/* Hero */}
            <Section id="home-hero" padding="xl" alt>
                <Hero
                    as="div"
                    contained={false}
                    align="left"
                    title="POSITIVITY THROUGH PERCUSSION"
                    sub="One man. One hundred drums. One unforgettable performance."
                    primary={{ label: "Book Now", href: "/contact" }}
                    secondary={{ label: "Preview the Show", href: "/media" }}
                    posterSrc="/assets/media/promo-pic-test.jpeg"
                    videoSrc="/assets/media/performance-video.mp4"
                />
            </Section>

            {/* Info Cards */}
            <Section id="home-info" padding="lg" alt>
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
            
            {/* Featured Content */}
            <Section id="home-feature" padding="lg" alt>
                <FeaturedContent {...featuredBioShort} />
            </Section>
            
            {/* Events Teaser (Replace) */}
            <Section id="home-events" padding="lg" alt>
                <div className="events">
                    <h2 className="h-staff">Upcoming Events</h2>
                    <div className="calendar-mini">
                        <div 
                            data-tockify-component="mini" 
                            data-tockify-calendar="powerhouse.percussion"
                        ></div>
                    </div>
                    <div className="action-container">
                        <ActionButton
                            cfg={{ label: "View All Events", href: "/events" }}
                            variant="primary"
                        />
                    </div>
                    
                </div>
            </Section>
            
            {/* Testimonials Teaser */}
            <Section id="home-tst" padding="lg" alt>
                <h2 className="h-staff">What People Are Saying</h2>
                <TestimonialList />
                <div className="action-container">
                    <ActionButton
                        cfg={{ label: "Media & Reviews", href: "/media" }}
                        variant="primary"
                    />
                </div>
            </Section>
            
            {/* CTA */}
            <Section id="home-cta" padding="lg" alt>
                <CTA />
            </Section>
        </div>
    );
};

export default Home;