import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";

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
            
            <Section size="lg" padding="xl" alt>
                <h1>About</h1>
                <p>Learn about us and our products/services.</p>
            </Section>
        </div>
    );
};

export default About;