import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";

const NotFound = () => {
    const seo = buildSeo({
        title: "PROJECT TITLE",
        description: "Project description, typically 30-60 chars.",
        path: "/",
        image: "/assets/example.jpg",
    });
    
    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>
            <Section size="lg" padding="xl" alt>
                <h1>404</h1>
                <p>We couldn&apost find that page.</p>
                <Link to="/" className="c-button">Return Home</Link>
            </Section>
        </div>
    );
};

export default NotFound;