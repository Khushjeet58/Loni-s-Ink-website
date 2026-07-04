"use client";

import { reviews } from "@/data/site";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function ReviewCarousel() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {reviews.map((review, index) => (
        <motion.article
          key={review.name}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="card-tilt rounded-lg border border-white/10 bg-white/7 p-6"
        >
          {review.rating > 0 ? (
            <div className="flex gap-1 text-gold">
              {Array.from({ length: review.rating }).map((_, star) => (
                <Star key={star} size={16} fill="currentColor" />
              ))}
            </div>
          ) : (
            <p className="text-xs uppercase tracking-[.24em] text-gold">Profile insight</p>
          )}
          <p className="mt-5 text-lg leading-8 text-bone">{review.text}</p>
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-pearl/62">{review.service}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
