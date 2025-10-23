import React from "react";

/**
 * DrumButton
 * - Circular “drum” with crossed sticks.
 * - On hover/focus: sticks animate into a right-pointing chevron (→).
 *
 * Props:
 * - as?: 'button' | 'a' (default 'button')
 * - href?: string (used when as='a')
 * - onClick?: () => void
 * - label: string (for accessible name, e.g., "Play video")
 * - size?: 'sm' | 'md' | 'lg'
 * - className?: string
 */
const DrumButton = ({
  as: As = "button",
  href,
  onClick,
  label = "Play",
  size = "md",
  className = "",
  ...rest
}) => {
  const sizeClass =
    size === "lg" ? "drum-btn--lg" : size === "sm" ? "drum-btn--sm" : "drum-btn--md";

  const common = {
    className: `drum-btn ${sizeClass} ${className}`.trim(),
    "aria-label": label,
    "data-spotlight": true,
    ...rest,
  };

  return As === "a" ? (
    <As {...common} href={href} role="button">
      <span className="drum-btn__skin" aria-hidden="true" />
      <span className="drum-btn__rim" aria-hidden="true" />
      <span className="drum-btn__sticks" aria-hidden="true" />
    </As>
  ) : (
    <As {...common} type="button" onClick={onClick}>
      <span className="drum-btn__skin" aria-hidden="true" />
      <span className="drum-btn__rim" aria-hidden="true" />
      <span className="drum-btn__sticks" aria-hidden="true" />
    </As>
  );
};

export default DrumButton;