import Link from "next/link";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { loniProfile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="font-display text-3xl tracking-[.14em]">LONI'S INK</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-pearl/70">
            Private Jodhpur tattoo consultations, custom work with Loni, transparent booking, and aftercare that keeps the work sharp.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[.24em] text-gold">Studio</p>
          <div className="mt-4 grid gap-2 text-sm text-pearl/76">
            <Link href="/gallery">Gallery</Link>
            <Link href="/aftercare">Aftercare</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[.24em] text-gold">Contact</p>
          <div className="mt-4 flex gap-3">
            <a aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8" href={loniProfile.instagram}>
              <Instagram size={18} />
            </a>
            <a aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8" href="https://wa.me/910000000000">
              <MessageCircle size={18} />
            </a>
            <a aria-label="Phone" className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8" href="tel:+910000000000">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
