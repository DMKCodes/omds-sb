export const plans = [
    {
        id: "free",
        name: "The Cymbal Crasher",
        price: "$739",
        blurb: "A basic, 45-minute show.",
        features: [
            "One performance of the One Man Drum Show at your venue.",
            "Includes smoke machine, lights, and video drum solo.",
            "Includes travel, setup, and teardown.",
            "Additional same-day show for just $199."
        ],
        cta: { label: "Get started", href: "/contact" },
    },
    {
        id: "mid",
        name: "The Drum Beater",
        price: "$950",
        blurb: "One show w/ meet and greet and drum seminar.",
        features: [
            "All features of The Toe Tapper.",
            "Meet and greet before or after the show.",
            "One-hour educational seminar.",
            "Additional same-day show for just $199."
        ],
        cta: { label: "Get started", href: "/contact" },
        popular: true,
    },
    {
        id: "pro",
        name: "The All-Out Extravaganza",
        price: "$1,100",
        blurb: "One show w/ meet and greet, special drum workshop, and custom drum solo.",
        features: [
            "All features of The Hip Shaker.",
            "Additional, custom drum solo created just for your organization or company included in the performance.",
            "One Man Chaos drum workshop.",
            "Additional same-day show for just $99."
        ],
        cta: { label: "Go pro", href: "/contact" },
    },
];