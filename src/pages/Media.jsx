import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";
import TestimonialList from "../components/modules/TestimonialList";

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
            
            <Section size="lg" padding="xl" alt>
                <h1>Media</h1>
                <p>Read customer testimonials or reviews.</p>
                <TestimonialList />
            </Section>
        </div>
    );
};

export default Media;