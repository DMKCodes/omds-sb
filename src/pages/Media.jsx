import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";
import TestimonialList from "../components/modules/TestimonialList";

const Media = () => {
    const seo = buildSeo({
        title: "PROJECT TITLE",
        description: "Project description, typically 30-60 chars.",
        path: "/",
        image: "/assets/example.jpg",
    });

    return (
        <div className="container u-stack">
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