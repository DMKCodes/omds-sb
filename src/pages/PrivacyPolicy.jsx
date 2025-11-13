import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { buildSeo, renderHelmetTags } from "../lib/seo";
import { ld, makeOrganization } from "../lib/schema";
import Section from "../components/common/Section";

const thisYear = new Date().getFullYear();

const PrivacyPolicy = () => {
    const seo = buildSeo({
        title: "Privacy Policy | Powerhouse Percussion",
        description: "How we collect, use, and protect information on this site.",
        path: "/privacy",
        image: "/assets/og/og-image.png",
        imageAlt: "Powerhouse Percussion logo",
        imageWidth: 1200,
        imageHeight: 630
    });
    
    return (
        <div className="container u-stack page legal">
            {renderHelmetTags(Helmet, seo)}
            <script type="application/ld+json">{ld(makeOrganization())}</script>

            <Section size="lg" padding="xl" alt className="legal__section">
                <h1 className="heading-privacy">Privacy Policy</h1>
                <p className="legal__effective">Effective date: {thisYear}</p>
                <h2 className="heading-privacy">Overview</h2>
                <p>
                    We respect your privacy. This page explains what we (Powerhouse Percussion / “we”) collect
                    when you visit this website, how we use it, and the choices you have. We do not sell your
                    personal information. Our analytics measure site usage anonymously and in aggregate to improve the site and booking process.
                </p>
            </Section>

            <Section size="lg" padding="sm" alt className="legal__section">
                <h2 className="heading-privacy">What we collect</h2>
                <ul>
                    <li>
                        <strong>Usage data</strong> (pages viewed, device type, approximate region,
                        referrers). This is collected in aggregate for performance and content insights.
                    </li>
                    <li>
                        <strong>Contact data</strong> (name, email, message) if you submit our contact form.
                        We use it only to respond to your inquiry.
                    </li>
                    <li>
                        <strong>Preferences</strong>: if you toggle light/dark mode, we store that preference
                        in your <code>localStorage</code> so it applies on future visits.
                    </li>
                </ul>
            </Section>

            <Section size="lg" padding="sm" alt className="legal__section">
                <h2 className="heading-privacy">Analytics</h2>
                <p>
                    We may use privacy-friendly analytics (e.g., Plausible) that do not set cookies and
                    do not collect personally identifiable information, <em>or</em> Google Analytics 4 (GA4),
                    which typically sets first-party cookies unless configured in a strict consent/cookieless mode.
                </p>
                <ul>
                    <li>
                        <strong>Plausible</strong>: cookie-free by default; data is aggregated and anonymized.
                    </li>
                    <li>
                        <strong>GA4</strong>: may set cookies to distinguish visitors and sessions. If deployed, we honor all “Do Not Track” and applicable consent settings.
                    </li>
                </ul>
                <p>
                    We use analytics only to understand site usage and improve content. We do not use analytics to identify you personally.
                </p>
            </Section>

            <Section size="lg" padding="sm" alt className="legal__section">
                <h2 className="heading-privacy">Cookies & similar technologies</h2>
                <p>
                    This site aims to minimize cookies. Core pages do not require cookies to function.
                    However, third-party <strong>embeds</strong> (e.g., YouTube videos) may place cookies or use local storage. Where possible, we use privacy-enhanced embeds and defer loading until you interact.
                </p>
                <ul>
                    <li>
                        <strong>Theme preferences</strong>: stored in <code>localStorage</code>, not a cookie.
                    </li>
                    <li>
                        <strong>Analytics</strong>: depends on the provider and configuration (see above).
                    </li>
                    <li>
                        <strong>Embeds</strong>: YouTube privacy-enhanced mode (<code>youtube-nocookie.com</code>) reduces tracking but may still set storage when you press play.
                    </li>
                </ul>
                <p>
                    You can block or clear cookies in your browser settings. Enabling “Do Not Track” (DNT)
                    is respected by our analytics implementation where supported.
                </p>
            </Section>

            <Section size="lg" padding="sm" alt className="legal__section">
                <h2 className="heading-privacy">Contact forms & email</h2>
                <p>
                    If you contact us, we store the details you submit (name, email, message) to respond.
                    If we use a form service (e.g., Formspree/Basin), your submission is processed by that
                    provider according to their policy. We do not use your submission for unrelated marketing
                    without your consent.
                </p>
                <h2 className="heading-privacy">Retention</h2>
                <p>
                    We keep contact messages for as long as needed to respond and maintain records. Analytics
                    data is retained in aggregate according to provider defaults.
                </p>
                <h2 className="heading-privacy">Your choices</h2>
                <ul>
                    <li>Use browser settings to block cookies and limit tracking.</li>
                    <li>Enable Do Not Track for additional privacy signals.</li>
                    <li>Contact us to request correction or deletion of contact messages you have sent.</li>
                </ul>
                <h2 className="heading-privacy">Changes</h2>
                <p>
                    We may update this policy from time to time. Material changes will be reflected on this page with an updated effective date.
                </p>
            </Section>

            <Section size="lg" padding="sm" alt className="legal__section">
                <h2 className="heading-privacy">Contact Details</h2>
                <address className="legal__address">
                    Powerhouse Percussion — Wes Lambert<br />
                    Milford, Pike County, Pennsylvania<br />
                    <a href="tel:+15555555555">+1 (555) 555-5555</a> &middot;{" "}
                    <a href="mailto:trashlan@ptd.net">trashlan@ptd.net</a>
                </address>
            </Section>
        </div>
    );
};

export default PrivacyPolicy;
