import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

export const infoCards = [
    {
        title: "All-in-One Production",
        text: "Lights, visuals, and sound are built into the show. We adapt to gymnasiums, cafeterias, stages, outdoor spaces, and more.",
        media: <span className="card__icon"><FontAwesomeIcon icon={faLightbulb} /></span>,
    },
    {
        title: "Community Ready",
        text: "Clean, high-energy performance with a positive message. Designed for audiences of all ages.",
        media: <span className="card__icon"><FontAwesomeIcon icon={faSchool} /></span>,
    },
    {
        title: "Hassle-Free Booking",
        text: "Simple pricing, fast confirmation, and clear logistics. We bring the gear, you bring the audience.",
        media: <span className="card__icon"><FontAwesomeIcon icon={faCalendarDays} /></span>,
    },
    {
        title: "School & Nonprofit Discounts",
        text: "Powerhouse Percussion is proud to offer additional discounts for collaborations with public schools and charitable organizations. ",
        media: <span className="card__icon"><FontAwesomeIcon icon={faCalendarDays} /></span>,
    },
];