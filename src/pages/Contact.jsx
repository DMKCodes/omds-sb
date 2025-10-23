import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
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

            <Section size="sm" padding="xl" alt>
                <h1>Contact</h1>
                <p>Get in touch to see how we can help.</p>
                <ContactForm action="https://formspree.io/f/yourIdHere" />
            </Section>
        </div>
    );
};

export default Contact;