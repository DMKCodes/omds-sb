import React from "react";
import Container from "./Container";
import "../../styles/components/_section.scss";

const Section = ({ id, className="", size="lg", padding="lg", alt=false, children, ...rest }) => {
    const cls = ["section", `section--pad-${padding}`, alt ? "section--alt" : "", className]
        .filter(Boolean)
        .join(" ");
    
    return (
        <section id={id} className={cls} {... rest}>
            <Container size={size}>
                {children}
            </Container>
        </section>
    );
};

export default Section;