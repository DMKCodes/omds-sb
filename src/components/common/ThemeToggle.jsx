const ThemeToggle = () => {
    const toggle = () => {
        const root = document.documentElement;
        const current = root.getAttribute("data-theme");
        root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
        localStorage.setItem("theme", root.getAttribute("data-theme"));
    };
    return <button onClick={toggle}>Toggle theme</button>;
};

const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);

export default ThemeToggle;