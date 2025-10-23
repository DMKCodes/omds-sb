import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeFAQPage } from "../lib/schema";
import { faq } from "../data/faq";
import Section from "../components/common/Section";

const FAQ = () => {
    const seo = buildSeo({
        title: "FAQ",
        description: "Answers to commonly asked questions.", // make more specific for real projects
        path: "/faq",
    });

    return (
        <div className="container u-stack">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeFAQPage(faq))}</script>

            <Section size="lg" padding="xl" alt>
                <h1>FAQ</h1>
                <p>Answers to commonly asked questions.</p>
            </Section>
        </div>
    );
};

export default FAQ;