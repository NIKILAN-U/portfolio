"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frameId = 0;

    function handleMove(event: PointerEvent) {
      targetX = event.clientX;
      targetY = event.clientY;
    }

    function tick() {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      if (glow) glow.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      frameId = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handleMove);
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[440px] w-[440px] rounded-full opacity-40 mix-blend-multiply will-change-transform md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(124,140,240,0.5) 0%, rgba(244,92,156,0.25) 45%, transparent 70%)",
      }}
    />
  );
}
