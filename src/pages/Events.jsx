import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";

const Events = () => {
    const seo = buildSeo({
        title: "Upcoming Events — One Man Drum Show | Pike County, Pennsylvania",
        description: "See where Powerhouse Percussion is performing next. View dates, locations, and details—or request One Man Chaos for your school, festival, or community event.",
        path: "/events",
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
        <div className="container u-stack page">
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