import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";
import ActionButton from "../components/common/ActionButton";

const Events = () => {
const seo = buildSeo({
    title: "Upcoming Events — One Man Drum Show | Pike County, Pennsylvania",
    description: "See where Powerhouse Percussion is performing next. View dates, locations, and details—or request One Man Chaos for your school, festival, or community event.",
    path: "/events",
    image: "/assets/example.jpg",
});

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>
            <Section padding="sm" alt>
                <h1 className="h-staff">Upcoming Events</h1>
                <div data-tockify-component="calendar" data-tockify-calendar="powerhouse.percussion" />
                <div className="action-container">
                    <ActionButton cfg={{ label: "Book your event", href: "/contact" }} variant="primary" />
                </div>
            </Section>
        </div>
    );
 };

 export default Events;
