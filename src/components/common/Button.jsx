import "../../styles/components/_button.scss";

const Button = ({ variant = "solid", children, ...props }) => {
    const cls = variant === "ghost" ? "c-button c-button--ghost" : "c-button";
    return <button className={cls} {...props}>{children}</button>;
};

export default Button;