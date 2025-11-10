import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
    const seo = buildSeo({
        title: "Contact Powerhouse Percussion — Book Now | Pike County, Pennsylvania",
        description: "Ready to bring the One Man Drum Show to your school or event? Send a message for dates, packages, and technical needs. Powerhouse Percussion makes setup easy.",
        path: "/contact",
        image: "/assets/example.jpg",
    });
    
    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section id="contact-form" size="sm" padding="sm" alt>
                <h1 className="h-staff">Let&apos;s talk!</h1>
                <p>Ready to book for your event? Have questions? We can&apos;t wait to hear from you.</p>
                <ContactForm />
            </Section>
        </div>
    );
};

export default Contact;