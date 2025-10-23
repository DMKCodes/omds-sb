import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

export const infoCards = [
    {
        title: "All-in-One Production",
        text: "Lights, visuals, and sound are built into the show. We adapt to gymnasiums, cafeterias, stages, and outdoor spaces.",
        media: <span className="card__icon"><FontAwesomeIcon icon={faLightbulb} /></span>,
    },
    {
        title: "School & Community Ready",
        text: "45 minutes of clean, high-energy performance. Designed for audiences of all ages.",
        media: <span className="card__icon"><FontAwesomeIcon icon={faSchool} /></span>,
    },
    {
        title: "Hassle-Free Booking",
        text: "Simple pricing, fast confirmation, and clear logistics. We bring the gear, you bring the audience.",
        media: <span className="card__icon"><FontAwesomeIcon icon={faCalendarDays} /></span>,
    },
];