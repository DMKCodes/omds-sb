module.exports = {
    siteUrl: "https://www.onemandrumshow.com", // No trailing slash
    // Static routes to be indexed, when adding or renaming pages update this
    routes: [
        "/",
        "/about",
        "/media",
        "/events",
        "/faq",
        "/contact",
        "/404",
    ],
    // Optional per-path fallbacks, keys must match routes
    meta: {
        "/":        { changefreq: "weekly", priority: 1.0 },
        "/events":  { changefreq: "weekly",  priority: 0.9 },
        "/media":   { changefreq: "monthly", priority: 0.7 },
        "/about":   { changefreq: "yearly",  priority: 0.5 },
        "/faq":     { changefreq: "yearly",  priority: 0.6 },
        "/contact": { changefreq: "yearly",  priority: 0.5 },
        "/404":     { changefreq: "yearly", priority: 0.4 },
    },
    exclude: [],
    trailingSlash: false,
};