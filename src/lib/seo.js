import React from "react";
import { SITE } from "./siteConfig";

export function absoluteUrl(path = "/") {
    if (!path) return SITE.siteUrl;
    if (path.startsWith("https")) return path;
    return `${SITE.siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
};

export function makeTitle(title) {
    if (!title) return SITE.name;
    return `${title} — ${SITE.name} — Pike County, PA`;
};

export function buildSeo({
    title,
    description = SITE.tagline,
    path = "/",
    image = SITE.defaultImage,
    imageAlt = `${SITE.name} — promotional image`,
    imageWidth = 1200,
    imageHeight = 630,
    noindex = false,
    locale = SITE.locale,
} = {}) {
    const url = absoluteUrl(path);
    const imgAbs = absoluteUrl(image);
    return {
        title: makeTitle(title),
        description,
        url,
        image: imgAbs,
        imageAlt,
        imageWidth,
        imageHeight,
        noindex,
        locale,
        siteName: SITE.name,
    };
};

export function renderHelmetTags(Helmet, seo) {
    const { title, description, url, image, imageAlt, imageWidth, imageHeight, noindex, locale, siteName } = seo;

    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={url} />

            {noindex ? (
                <meta name="robots" content="noindex, nofollow, noarchive" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}

            <meta property="og:type" content="website" />
            <meta property="og:locale" content={locale} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={url} />
            {image && (
                <>
                    <meta property="og:image" content={image} />
                    <meta property="og:image:width" content={String(imageWidth)} />
                    <meta property="og:image:height" content={String(imageHeight)} />
                    {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
                </>
            )}
        </Helmet>
    );
};

