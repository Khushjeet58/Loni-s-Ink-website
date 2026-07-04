import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="A private atelier built around trust." body="Loni's Ink blends design discipline, sterile process, and hospitality so clients can make confident, permanent decisions." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10">
              <Image src="/gallery/studio-hero.png" alt="Loni's Ink studio workspace" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm uppercase tracking-[.24em] text-gold">Studio standard</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">Cinematic experience, clinical discipline.</h2>
            <p className="mt-6 text-lg leading-8 text-pearl/72">
              The studio journey is designed around fewer unknowns: clear preparation, careful placement advice, direct communication with Loni, transparent booking, and visible aftercare.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Single-use needles", "Private consults", "Custom and flash tattoos", "Healed review-ready"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/7 p-4 text-pearl">{item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
