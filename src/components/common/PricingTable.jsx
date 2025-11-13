import React from "react";
import ActionButton from "../common/ActionButton";
import "../../styles/components/_pricing.scss";

const PricingTable = ({ plans = [] }) => {
    return (
        <>
            <div className="pricing">
                {plans.map((p) => (
                    <article 
                        key={p.id} 
                        className={`pricing__card u-hover-elev ${p.popular ? "is-popular u-hover-elev--green" : ""}`} aria-label={`${p.name} plan`}
                    >
                        {p.popular && <div className="pricing__badge" aria-hidden="true">Most Popular</div>}
                        <h3 className="pricing__name">{p.name}</h3>
                        <div className="pricing__price">Starting at {p.price}</div>
                        <p className="pricing__blurb">{p.blurb}</p>
                        <ul className="pricing__features">
                            {p.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
            <p className="pricing__note">
                *Prices are estimated and may vary by date, travel, and technical requirements. We&apos;ll confirm details during booking.<br />
                *Discounted pricing available for schools and charitable organizations. Please mention this when completing our <a href="/contact">contact form</a>.
            </p>
            <div className="action-container">
                <ActionButton
                    cfg={{ label: "Request Information", href: "/contact" }} 
                    variant="primary"
                />
            </div>
        </>
    );
};

export default PricingTable;