import "../../styles/components/_pricing.scss";

const PricingTable = ({ plans = [] }) => {
    return (
        <div className="pricing">
            {plans.map((p) => (
                <article 
                    key={p.id} 
                    className={`pricing__card ${p.popular ? "is-popular" : ""}`} aria-label={`${p.name} plan`}
                >
                    {p.popular && <div className="pricing__badge" aria-hidden="true">Most Popular</div>}
                    <h3 className="pricing__name">{p.name}</h3>
                    <div className="pricing__price">{p.price}</div>
                    <p className="pricing__blurb">{p.blurb}</p>
                    <ul className="pricing__features">
                        {p.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    {p.cta?.href && (
                        <a className="c-button" href={p.cta.href}>{p.cta.label}</a>
                    )}
                </article>
            ))}
        </div>
    );
};

export default PricingTable;