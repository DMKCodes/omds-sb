import React from "react";
import Testimonial from "./Testimonial.jsx";
import { testimonials } from "../../data/testimonials.js";

const TestimonialList = () => {
    const items = testimonials;

    return (
        <div className="tst-list">
            {items.map((t, i) => <Testimonial key={i} {...t} />)}
        </div>
    );
};

export default TestimonialList;