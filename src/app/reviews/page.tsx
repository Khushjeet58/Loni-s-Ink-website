import { PageHero } from "@/components/PageHero";
import { ReviewCarousel } from "@/components/ReviewCarousel";

export default function ReviewsPage() {
  return (
    <main>
      <PageHero eyebrow="Trust" title="Useful signals from Loni's public profile." body="Instagram-accessible snippets did not expose a verified review feed, so these cards focus on public booking and work signals instead of invented testimonials." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ReviewCarousel />
        </div>
      </section>
    </main>
  );
}
