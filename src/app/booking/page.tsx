import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function BookingPage() {
  return (
    <main>
      <PageHero eyebrow="Booking" title="A consultation request that respects the art and your time." body="Send the details Loni actually needs: idea, references, placement, size, budget, preferred date, preferred time, and notes." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="sticky top-28 rounded-lg border border-white/10 bg-white/7 p-6">
              <p className="text-sm uppercase tracking-[.24em] text-gold">What happens next</p>
              <ol className="mt-6 space-y-5 text-sm leading-7 text-pearl/72">
                <li><span className="text-gold">01</span> The studio reviews your idea, placement, references, and budget.</li>
                <li><span className="text-gold">02</span> Loni confirms scope, price range, and timing.</li>
                <li><span className="text-gold">03</span> Deposit details secure the appointment and design window.</li>
              </ol>
            </div>
          </Reveal>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
