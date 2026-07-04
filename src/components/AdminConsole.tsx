"use client";

import { galleryItems, reviews } from "@/data/site";
import { CalendarDays, ImagePlus, Inbox, Trash2 } from "lucide-react";
import { useState } from "react";

export function AdminConsole() {
  const [items, setItems] = useState(galleryItems);

  return (
    <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
      <section className="glass rounded-lg p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[.24em] text-gold">Gallery CMS</p>
            <h2 className="mt-2 font-display text-3xl">Portfolio assets</h2>
          </div>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full bg-gold text-obsidian">
            <ImagePlus size={19} />
          </button>
        </div>
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div key={item.title} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/7 p-3">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs text-pearl/60">{item.category} - {item.artist}</p>
              </div>
              <button
                type="button"
                aria-label={`Delete ${item.title}`}
                onClick={() => setItems((current) => current.filter((asset) => asset.title !== item.title))}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-pearl transition hover:border-ember hover:text-bone"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5">
        <div className="glass rounded-lg p-5">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-gold" />
            <h2 className="font-display text-3xl">Appointment calendar</h2>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["Consultation", "Design review", "Tattoo session"].map((event, index) => (
              <div key={event} className="rounded-lg border border-white/10 bg-white/7 p-4">
                <p className="text-xs uppercase tracking-[.2em] text-gold">Day {index + 1}</p>
                <p className="mt-3 font-semibold">{event}</p>
                <p className="mt-1 text-sm text-pearl/62">{10 + index}:30 AM</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-lg p-5">
          <div className="flex items-center gap-3">
            <Inbox className="text-gold" />
            <h2 className="font-display text-3xl">Enquiries and reviews</h2>
          </div>
          <div className="mt-5 space-y-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-lg border border-white/10 bg-white/7 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{review.name}</p>
                  <button type="button" className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">Reply</button>
                </div>
                <p className="mt-2 text-sm text-pearl/68">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
