import React from "react";
import "../../styles/components/_container.scss";

const Container = ({ size="lg", className="", as: Tag = "div", children, ...rest }) => {
    const cls = ["container", `container--${size}`, className].filter(Boolean).join(" ");
    return (
        <Tag className={cls} {...rest}>
            {children}
        </Tag>
    );
};

export default Container;