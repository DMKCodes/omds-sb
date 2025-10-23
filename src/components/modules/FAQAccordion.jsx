import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import "../../styles/components/_faq.scss";

const FAQAccordion = ({ items = [] }) => {
    return (
        <Accordion.Root type="multiple" className="faq">
            {items.map((it, i) => (
                <Accordion.Item className="faq__item" key={i} value={`item-${i}`}>
                    <Accordion.Header className="faq__header">
                        <Accordion.Trigger className="faq__trigger">
                            {it.q}
                            <span className="faq__icon" aria-hidden="true">+</span>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="faq__content">
                        <div className="faq__inner">{it.a}</div>
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
};

export default FAQAccordion;