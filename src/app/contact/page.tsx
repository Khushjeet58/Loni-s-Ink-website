import { PageHero } from "@/components/PageHero";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { loniProfile } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Visit, call, or send the brief." body="Find studio details, business hours, WhatsApp, Instagram, and map-ready location information." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="min-h-[480px] overflow-hidden rounded-lg border border-white/10 bg-white/7">
            <iframe
              title="Studio map"
              src="https://www.google.com/maps?q=C%20Road%20Jodhpur%20Rajasthan%20India&output=embed"
              className="h-full min-h-[480px] w-full grayscale invert"
              loading="lazy"
            />
          </div>
          <div className="grid gap-4">
            {[
              { icon: MapPin, title: "Studio", body: loniProfile.location },
              { icon: Phone, title: "Phone", body: "+91 00000 00000" },
              { icon: MessageCircle, title: "WhatsApp", body: "Fastest for appointment confirmations" },
              { icon: Instagram, title: "Instagram", body: loniProfile.handle },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/7 p-5">
                <item.icon className="text-gold" />
                <h2 className="mt-4 font-display text-3xl">{item.title}</h2>
                <p className="mt-2 text-pearl/70">{item.body}</p>
              </div>
            ))}
            <div className="rounded-lg border border-gold/25 bg-gold/10 p-5">
              <h2 className="font-display text-3xl">Business hours</h2>
              <p className="mt-3 text-pearl/72">Tue - Sun, 11:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
