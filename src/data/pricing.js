export const plans = [
    {
        id: "free",
        name: "Free Tier",
        price: "$0",
        blurb: "100% free • limited functionality",
        features: [
            "Feature one",
            "A second feature included",
            "Also, a third feature",
        ],
        cta: { label: "Get started", href: "/contact" },
    },
    {
        id: "mid",
        name: "Mid Tier",
        price: "$49/mo.",
        blurb: "expand your horizons • improved functionality",
        features: [
            "All features of free tier",
            "This bonus feature",
            "A new feature, but with limited capacity",
        ],
        cta: { label: "Get started", href: "/contact" },
        popular: true,
    },
    {
        id: "pro",
        name: "Pro Tier",
        price: "$109/mo.",
        blurb: "the sky's the limit • greatly improved functionality",
        features: [
            "All features of free & mid tiers",
            "24/7 support",
            "The same new feature as mid tier, but with unlimited capacity",
        ],
        cta: { label: "Go pro", href: "/contact" },
    },
];