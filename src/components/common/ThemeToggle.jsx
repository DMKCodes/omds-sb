import React, { useEffect, useState } from "react";
import { initTheme, toggleTheme } from "../../lib/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = ({ className = "" }) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
        initTheme();
        const root = document.documentElement;
        const update = () => setMode(root.getAttribute("data-theme"));
        update();
        const obs = new MutationObserver(update);
        obs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
        return () => obs.disconnect();
  }, []);

  return (
        <button
            type="button"
            className={`theme-toggle ${className}`}
            aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
            onClick={() => { toggleTheme(); }}
        >
            <span className="theme-toggle__icon" aria-hidden="true">
                <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
            </span>
            <span className="theme-toggle__text">
                {mode === "light" ? "Dark" : "Light"}
            </span>
        </button>
  );
};

export default ThemeToggle;