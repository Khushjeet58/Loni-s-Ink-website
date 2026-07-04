"use client";

import { useEffect, useRef } from "react";

export function CursorAura() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (event: PointerEvent) => {
      el.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(199,167,106,.2), rgba(129,43,34,.13) 40%, transparent 68%)",
      }}
    />
  );
}
