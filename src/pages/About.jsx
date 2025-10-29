import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import { faq } from "../data/faq";
import { plans } from "../data/pricing";
import Section from "../components/common/Section";
import FAQAccordion from "../components/common/FAQAccordion";
import ActionButton from "../components/common/ActionButton";
import PricingTable from "../components/common/PricingTable";

const About = () => {
    const seo = buildSeo({
        title: "About One Man Chaos — Wes Lambert & Powerhouse Percussion",
        description: "Meet Wes Lambert: entertainer, community leader, and creator of the video drum solo. Learn how One Man Chaos blends education, inspiration, and high-impact percussion for audiences of all ages",
        path: "/about",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section padding="xl" alt className="about__intro">
                <div className="about__intro-media">
                    <img
                        src="/assets/media/wes-pic-test.jpg"
                        alt="Wes Lambert performing as One Man Chaos"
                        className="about__img"
                        width="1200"
                        height="1600"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="about__intro-copy">
                    <h1 className="h-staff">Who is One Man Chaos?</h1>
                    <p>
                        One Man Chaos is Wes Lambert—father, grandfather, longtime community leader, and retired youth coach. Wes co-built and served as president of the Matamoros Outdoor Community Hockey Rink and founded the TDS Bowl, a nonprofit charity. He&apos;s been drumming since 1979, starting in middle school and learning by doing: marching band taught snare and triples, school musicals opened the door to the kit, and real-world grit supplied the rest.
                    </p>
                    <p>
                        Without formal lessons after graduation, Wes became a journeyman printing pressman and a self-taught drummer with a big idea: the <strong>Video Drum Solo</strong>. Each VDS begins with images and film—places, people, and stories worth celebrating. The drums are composed last to amplify the narrative. The result is a show that blends rhythm, light, and story into something educational, inspirational, and fun for audiences of all ages.
                    </p>
                    <p>
                        Today, the <em>One Man Drum Show</em> packs over 100 drums into a 45-minute visual and musical experience. It&apos;s a thank you to educators, a celebration of perseverance, and an invitation for every audience member to invest in learning and in themselves. In the wise words of Wes: <strong>Stay strong and drum on!</strong>
                    </p>
                </div>
            </Section>

            <Section padding="lg" alt>
                <h2 className="h-staff">Packages &amp; Pricing</h2>
                <PricingTable plans={plans} />
            </Section>

            <Section padding="lg">
                <h2 className="h-staff">Frequently Asked Questions</h2>
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

export default About;