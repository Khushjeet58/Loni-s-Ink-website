"use client";

import { PageHero } from "@/components/PageHero";
import { faqItems } from "@/data/site";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQPage() {
  const [open, setOpen] = useState(0);

  return (
    <main>
      <PageHero eyebrow="FAQ" title="Clear answers before you book." body="Pricing, pain, deposit, healing, touch ups, and cancellation policies in one place." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-3">
          {faqItems.map((item, index) => (
            <div key={item.question} className="overflow-hidden rounded-lg border border-white/10 bg-white/7">
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-display text-2xl">{item.question}</span>
                <ChevronDown className={`shrink-0 text-gold transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              {open === index && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="border-t border-white/10 px-5 pb-5 pt-4">
                  <p className="leading-8 text-pearl/72">{item.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
