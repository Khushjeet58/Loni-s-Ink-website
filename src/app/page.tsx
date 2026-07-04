import Image from "next/image";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Hero3D } from "@/components/Hero3D";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { galleryItems, loniProfile, stats } from "@/data/site";
import { ArrowDown, Award, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="stacked-section relative z-10 overflow-hidden bg-obsidian px-4 pb-14 pt-[var(--nav-height)] sm:px-6 lg:px-8">
        <Hero3D />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_60%_35%,transparent,rgba(6,6,6,.2)_25%,rgba(6,6,6,.92)_82%)]" />
        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-var(--nav-height))] max-w-7xl items-center">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[.36em] text-gold">Luxury tattoo studio</p>
              <h1 className="mt-5 font-display text-6xl leading-[.88] text-balance sm:text-8xl lg:text-[9.5rem]">
                Loni's Ink
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/78 sm:text-xl">
                Custom tattoos, flash work, piercing, PMU, private consultations, and direct booking with Loni in Jodhpur.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="/booking">Start booking</MagneticButton>
                <MagneticButton href="/gallery" variant="ghost">View work</MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-pearl/64">
          <ArrowDown className="animate-bounce" size={22} />
        </div>
      </section>

      <section className="cinematic-section stacked-section z-20 bg-graphite px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.86fr_1.14fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[.32em] text-gold">Trust first</p>
            <h2 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">A better way to book a tattoo.</h2>
            <p className="mt-6 text-lg leading-8 text-pearl/72">
              The site replaces vague DMs with a guided consultation, reference uploads, clear policies, and one direct flow to Loni.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Sterile process", body: "Safety-forward studio standards and clear session preparation." },
              { icon: Sparkles, title: "Custom design", body: "Flash and custom concepts tailored to placement, scale, and longevity." },
              { icon: Award, title: "Premium care", body: "Aftercare and touch-up guidance built into the customer journey." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="card-tilt rounded-lg border border-white/10 bg-white/7 p-6">
                  <item.icon className="text-gold" size={26} />
                  <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-pearl/68">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-section stacked-section z-30 bg-obsidian px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[.32em] text-gold">Featured work</p>
                <h2 className="mt-4 font-display text-5xl sm:text-7xl">Portfolio with presence.</h2>
              </div>
              <MagneticButton href="/gallery" variant="ghost">Open gallery</MagneticButton>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
                <article className="group card-tilt relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-white/7">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[.24em] text-gold">{item.category}</p>
                    <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-section stacked-section z-40 bg-smoke px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 shadow-premium">
              <Image src="/gallery/studio-hero.png" alt="Loni's Ink private studio detail" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm uppercase tracking-[.24em] text-gold">{loniProfile.handle}</p>
                <h2 className="mt-2 font-display text-5xl">{loniProfile.books}</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm uppercase tracking-[.32em] text-gold">Private studio</p>
            <h2 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">One artist. One clear brief. No lost DMs.</h2>
            <p className="mt-6 text-lg leading-8 text-pearl/72">
              {loniProfile.tagline} The public profile highlights custom tattoos, flash work, fine-line pieces, ornamental designs, memorial ideas, piercings, and PMU.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {loniProfile.specialties.map((specialty) => (
                <span key={specialty} className="rounded-full border border-white/12 bg-white/7 px-3 py-1 text-sm text-pearl">
                  {specialty}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/booking">Book with Loni</MagneticButton>
              <a href={loniProfile.instagram} className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-6 py-3 text-sm font-semibold text-bone transition hover:border-gold/70 hover:text-gold">
                <MapPin size={17} />
                {loniProfile.location}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cinematic-section stacked-section z-50 bg-obsidian px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm uppercase tracking-[.32em] text-gold">Proof</p>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl">Confidence before commitment.</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/7 p-5">
                  <p className="font-display text-4xl text-gold">{stat.value}</p>
                  <p className="mt-2 text-sm text-pearl/62">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <ReviewCarousel />
        </div>
      </section>

      <section className="stacked-section z-[60] bg-noise px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[.32em] text-gold">Book online</p>
          <h2 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">No more lost ideas in Instagram DMs.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pearl/76">
            Send references, placement, size, budget, preferred date, preferred time, and notes in one polished flow.
          </p>
          <div className="mt-8">
            <MagneticButton href="/booking">Request consultation</MagneticButton>
          </div>
        </Reveal>
      </section>

      <ChatAssistant />
    </main>
  );
}
