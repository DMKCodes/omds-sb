import React from "react";
import "../../styles/components/_card.scss";

const Card = ({ 
    as: Tag = "article",
    title,
    eyebrow,
    text,
    media,
    footer,
    href,
    className="",
    children,
    ...rest 
}) => {
    const classNames = ["card", href ? "card--link" : "", className].filter(Boolean).join(" ");

    const body = (
        <>
            {media && (
                <div className="card__media">
                    {media}
                </div>
            )}
            <div className="card__body">
                {eyebrow && <div className="card__eyebrow">{eyebrow}</div>}
                {title && <h3 className="card__title">{title}</h3>}
                {text && <p className="card__text">{text}</p>}
                {children}
            </div>
            {footer && <div className="card__footer">{footer}</div>}
        </>
    );

    if (href) {
        return (
            <Tag className={classNames} {...rest}>
                <a className="card__link" href={href}>
                    {body}
                </a>
            </Tag>
        );
    };

    return (
        <Tag className={classNames} {...rest}>
            {body}
        </Tag>
    );
};

export default Card;