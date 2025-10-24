import React, { useEffect, useRef } from "react";

const MusicNotes = ({ density = 12, zIndex = 4 }) => {
  const hostRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;

    const symbols = ["♪", "♫", "♬", "♩", "♭", "♯"];

    function spawnOne() {
      if (cancelled || !host.isConnected) return;

      const el = document.createElement("span");
      el.className = "bg-note";
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      // randomize trajectory/looks via CSS vars
      const vw = window.innerWidth;
      const startX = Math.random() * vw;              // px
      const drift = (Math.random() * 400 - 200) + "px";  // -200..200px
      const dur = (8 + Math.random() * 8).toFixed(2) + "s";
      const delay = (Math.random() * 2).toFixed(2) + "s";
      const size = (12 + Math.random() * 28).toFixed(0) + "px";
      const hue = Math.floor(180 + Math.random() * 120); // cool neon band
      const rot0 = (Math.random() * 60 - 30).toFixed(1) + "deg";
      const rot1 = (Math.random() * 60 - 30).toFixed(1) + "deg";

      el.style.left = `${startX}px`;
      el.style.setProperty("--drift", drift);
      el.style.setProperty("--dur", dur);
      el.style.setProperty("--delay", delay);
      el.style.setProperty("--size", size);
      el.style.setProperty("--hue", String(hue));
      el.style.setProperty("--rot0", rot0);
      el.style.setProperty("--rot1", rot1);

      host.appendChild(el);
      el.addEventListener("animationend", () => el.remove(), { once: true });
    }

    let tickId;
    const tick = () => {
      if (cancelled) return;
      const need = Math.max(0, density - host.childElementCount);
      for (let i = 0; i < Math.min(3, need); i++) spawnOne();
      tickId = setTimeout(tick, 600 + Math.random() * 1000);
    };

    tick();
    return () => {
      cancelled = true;
      clearTimeout(tickId);
      host.innerHTML = "";
    };
  }, [density]);

  return <div ref={hostRef} className="bg-notes" style={{ zIndex }} aria-hidden="true" />;
};

export default MusicNotes;