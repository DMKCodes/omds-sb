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

    return (
        <div className="container u-stack page">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>
            <Section padding="xl" alt>
                <div data-tockify-component="calendar" data-tockify-calendar="powerhouse.percussion" />
                <button
                    type="button"
                    className="c-button"
                    onClick={() => window._tkf?.openFullScreen?.({ name: "powerhouse.percussion" })}
                >
                    View Fullscreen Calendar
                </button>
            </Section>
        </div>
    );
 };

 export default Events;
