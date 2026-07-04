"use client";

import { loniProfile } from "@/data/site";
import { Send, Upload } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const placements = ["Arm", "Leg", "Back", "Chest", "Rib", "Neck", "Hand", "Other"];
const budgets = ["Under $200", "$200 - $500", "$500 - $1000", "$1000+"];

export function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="glass rounded-lg p-5 sm:p-7"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input className="form-field" required placeholder="Name" name="name" />
        <input className="form-field" required placeholder="Phone" name="phone" />
        <input className="form-field" required type="email" placeholder="Email" name="email" />
        <input className="form-field" readOnly value={`Artist: ${loniProfile.name}`} name="artist" />
        <textarea className="form-field min-h-36 md:col-span-2" required placeholder="Tattoo idea" name="idea" />
        <select className="form-field" defaultValue="" required name="placement">
          <option value="" disabled>Placement</option>
          {placements.map((placement) => (
            <option key={placement} value={placement}>{placement}</option>
          ))}
        </select>
        <input className="form-field" required placeholder="Approximate size" name="size" />
        <select className="form-field" defaultValue="" required name="budget">
          <option value="" disabled>Budget</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>{budget}</option>
          ))}
        </select>
        <input className="form-field" type="date" name="date" />
        <input className="form-field" type="time" name="time" />
        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-white/18 bg-white/6 p-4 text-sm text-pearl md:col-span-2">
          <Upload size={19} className="text-gold" />
          <span>Reference images</span>
          <input className="sr-only" type="file" name="references" multiple accept="image/*" />
        </label>
        <textarea className="form-field min-h-28 md:col-span-2" placeholder="Additional notes" name="notes" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-obsidian transition hover:bg-bone">
          Send request
          <Send size={17} />
        </button>
        {sent && <span className="text-sm text-gold">Request drafted for Loni. Connect Supabase or Firebase to store and notify.</span>}
      </div>
    </motion.form>
  );
}
