import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";

const Events = () => {
    const seo = buildSeo({
        title: "PROJECT TITLE",
        description: "Project description, typically 30-60 chars.",
        path: "/",
        image: "/assets/example.jpg",
    });

    // Example event format
    // const eventJson = makeEvent({
    //     name: "Interactive Drum Assembly",
    //     description: "High-energy 45-minute school assembly.",
    //     startDate: "2025-12-05T10:00:00-05:00",
    //     endDate: "2025-12-05T10:45:00-05:00",
    //     image: "/assets/og/event.jpg",
    //     location: {
    //     "@type": "Place",
    //     name: "Maple Grove Elementary",
    //     address: {
    //         "@type": "PostalAddress",
    //         streetAddress: "123 School Ln",
    //         addressLocality: "New York",
    //         addressRegion: "NY",
    //         postalCode: "11111",
    //         addressCountry: "US",
    //     },
    //     },
    //     performer: { "@type": "Person", name: "Your Client Name" },
    //     offers: {
    //         price: "0.00", priceCurrency: "USD", url: "/contact", availability: "https://schema.org/InStock",
    //     },
    // });

    return (
        <div className="container u-stack">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section size="lg" padding="xl" alt>
                <h1>Events Calendar</h1>
                <p>See our upcoming events.</p>
            </Section>
        </div>
    );
};

export default Events;