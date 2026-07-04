"use client";

import { navItems } from "@/data/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-obsidian/74 shadow-premium backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[var(--nav-height)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-bone text-sm font-black text-obsidian shadow-gold">
            LI
          </span>
          <span>
            <span className="block font-display text-xl tracking-[.18em] text-bone">LONI'S INK</span>
            <span className="block text-[10px] uppercase tracking-[.34em] text-gold/80">Private Tattoo Atelier</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3 py-2 text-sm text-pearl/78 transition hover:text-bone"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/8"
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <Link
          href="/booking"
          className="hidden rounded-full border border-gold/50 bg-gold px-5 py-2 text-sm font-semibold text-obsidian transition hover:bg-bone lg:inline-flex"
        >
          Book consult
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-bone lg:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-4 rounded-lg border border-white/12 bg-obsidian/96 p-3 shadow-premium backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-4 py-3 text-pearl transition hover:bg-white/8 hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
