"use client";

import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="ink-field relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="absolute inset-0 section-mask opacity-70" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[.32em] text-gold">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[.96] text-balance sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/74">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
