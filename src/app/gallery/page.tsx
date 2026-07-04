import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";

export default function GalleryPage() {
  return (
    <main>
      <PageHero eyebrow="Curated work" title="A gallery built for confident decisions." body="Filter by style, inspect details, and move from inspiration to a structured booking request." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
