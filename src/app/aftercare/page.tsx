import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { aftercareSteps } from "@/data/site";

export default function AftercarePage() {
  return (
    <main>
      <PageHero eyebrow="Aftercare" title="Protect the work after you leave the chair." body="Simple, calm instructions for the first day, first week, and healed review window." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {aftercareSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="card-tilt min-h-72 rounded-lg border border-white/10 bg-white/7 p-7">
                <p className="font-display text-6xl text-gold/80">0{index + 1}</p>
                <h2 className="mt-8 font-display text-4xl">{step.title}</h2>
                <p className="mt-4 leading-8 text-pearl/70">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
