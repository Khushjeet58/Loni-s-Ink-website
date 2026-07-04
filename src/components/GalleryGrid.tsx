"use client";

import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/site";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active],
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === category
                ? "border-gold bg-gold text-obsidian"
                : "border-white/14 bg-white/7 text-pearl hover:border-gold/70 hover:text-bone"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="masonry">
        {filtered.map((item, index) => (
          <motion.article
            layout
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="masonry-item group card-tilt overflow-hidden rounded-lg border border-white/10 bg-white/7"
          >
            <button type="button" onClick={() => setLightbox(item)} className="relative block w-full overflow-hidden text-left">
              <Image
                src={item.image}
                alt={`${item.title} by ${item.artist}`}
                width={900}
                height={1125}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/16 bg-obsidian/60 text-bone opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Maximize2 size={17} />
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent p-5 pt-24">
                <span className="block text-xs uppercase tracking-[.24em] text-gold">{item.category}</span>
                <span className="mt-2 block font-display text-2xl text-bone">{item.title}</span>
                <span className="mt-1 block text-sm text-pearl/74">{item.artist} - {item.size}</span>
              </span>
            </button>
          </motion.article>
        ))}
      </motion.div>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-obsidian/92 p-4 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/16 bg-white/8"
          >
            <X size={19} />
          </button>
          <motion.div initial={{ scale: 0.94 }} animate={{ scale: 1 }} className="w-full max-w-4xl overflow-hidden rounded-lg border border-white/12 bg-smoke">
            <Image src={lightbox.image} alt={lightbox.title} width={1400} height={1200} className="max-h-[76vh] w-full object-contain" />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-5">
              <div>
                <p className="font-display text-3xl">{lightbox.title}</p>
                <p className="text-sm text-pearl/70">{lightbox.artist} - {lightbox.category}</p>
              </div>
              <p className="rounded-full border border-gold/35 px-4 py-2 text-sm text-gold">{lightbox.size}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
