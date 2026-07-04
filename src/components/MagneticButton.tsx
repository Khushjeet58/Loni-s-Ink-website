"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function MagneticButton({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
        variant === "gold"
          ? "border border-gold bg-gold text-obsidian hover:bg-bone"
          : "border border-white/16 bg-white/8 text-bone hover:border-gold/70 hover:text-gold"
      }`}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
