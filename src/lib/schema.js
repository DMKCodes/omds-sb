import { SITE } from "./siteConfig";
import { absoluteUrl } from "./seo";

/** Safe JSON string for <script type="application/ld+json"> */
export function ld(obj) {
    return JSON.stringify(obj, null, 2);
};

export function makeOrganization({
    name = SITE.name,
    url = SITE.siteUrl,
    logo = absoluteUrl("/assets/logo-512.png"),
    sameAs = SITE.socials || [],
    telephone = SITE.phone,
    address = SITE.address,
} = {}) {
    const base = {
        "@context": "https://schema.org",
        "@type": address ? "LocalBusiness" : "Organization",
        name,
        url,
        logo,
        sameAs,
    };
    if (address) {
        base.telephone = telephone;
        base.address = {
            "@type": "PostalAddress",
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.country,
        };
    }
    return base;
};

export function makeFAQPage(items = []) {
    return {    
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };
};

export function makeEvent({
    name,
    description,
    startDate, // "2025-11-10T19:00:00-05:00"
    endDate, // optional
    eventStatus = "https://schema.org/EventScheduled",
    image, // absolute or path
    location, // { name, address: {...} } or { "@type": "VirtualLocation", url }
    offers, // optional { price, priceCurrency, url, availability }
    performer,  // optional { "@type": "Person"|"MusicGroup", name }
}) {
    const obj = {
        "@context": "https://schema.org",
        "@type": "Event",
        name,
        description,
        eventStatus,
        startDate,
        ...(endDate ? { endDate } : {}),
    };
    if (image) obj.image = [absoluteUrl(image)];
    if (location) obj.location = location;
    if (offers) obj.offers = { "@type": "Offer", ...offers };
    if (performer) obj.performer = performer;
    return obj;
};

// Optional for logging breadcrumbs
export function makeBreadcrumbList(crumbs = []) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.item),
        })),
    };
};