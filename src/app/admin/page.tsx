import { AdminConsole } from "@/components/AdminConsole";
import { PageHero } from "@/components/PageHero";

export default function AdminPage() {
  return (
    <main>
      <PageHero eyebrow="Owner console" title="Manage photos, bookings, calendar, enquiries, and reviews." body="A premium admin surface prepared for Supabase or Firebase authentication and storage." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AdminConsole />
        </div>
      </section>
    </main>
  );
}
