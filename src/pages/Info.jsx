import React from "react";
import "../styles/pages/_info.scss";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import { faq } from "../data/faq";
import { plans } from "../data/pricing";
import { featuredBioLong } from "../data/featured";

import Section from "../components/common/Section";
import FeaturedContent from "../components/common/FeaturedContent";
import FAQAccordion from "../components/common/FAQAccordion";
import PricingTable from "../components/common/PricingTable";
import CTA from "../components/common/CTA";

const Info = () => {
    const seo = buildSeo({
        title: "Bio, Pricing, & FAQ",
        description: "Meet Wes Lambert: entertainer, community leader, and creator of the video drum solo. Learn how One Man Chaos blends education, inspiration, and high-impact percussion for audiences of all ages",
        path: "/info",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section padding="lg" alt>
                <FeaturedContent {...featuredBioLong} />
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
                <CTA />
            </Section>
        </div>
    );
};

export default Info;