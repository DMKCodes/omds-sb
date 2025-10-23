import React from "react";
import "../../styles/components/_testimonial.scss";

const Testimonial = ({ quote, author, role, avatar }) => {
    return (
        <figure className="tst">
            <blockquote className="tst__quote">&quot{quote}&quot</blockquote>
            <figcaption className="tst__byline">
                {avatar && <img className="tst__avatar" src={avatar} alt="" />}
                <div>
                    <div className="tst__author">{author}</div>
                    {role && <div className="tst__role">{role}</div>}
                </div>
            </figcaption>
        </figure>
    );
};

export default Testimonial;