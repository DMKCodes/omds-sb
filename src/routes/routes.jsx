import React from "react";

const Home          = React.lazy(() => import("../pages/Home.jsx"));
const Info         = React.lazy(() => import("../pages/Info.jsx"));
const Media         = React.lazy(() => import("../pages/Media.jsx"));
const Events        = React.lazy(() => import("../pages/Events.jsx"));
const Contact       = React.lazy(() => import("../pages/Contact.jsx"));
const NotFound      = React.lazy(() => import("../pages/NotFound.jsx"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy.jsx"));

const routes = [
    { path: "/", Component: Home },
    { path: "/info", Component: Info },
    { path: "/media", Component: Media },
    { path: "/events", Component: Events },
    { path: "/contact", Component: Contact },
    { path: "/404", Component: NotFound },
    { path: "/privacy", Component: PrivacyPolicy }
];

export default routes;