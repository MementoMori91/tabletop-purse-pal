import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StoreFooter } from "@/components/StoreFooter";

export const Route = createFileRoute("/gift")({
  component: GiftPage,
  head: () => ({
    meta: [
      { title: "Gift Sets & Personalisation — Hängr" },
      {
        name: "description",
        content:
          "Hängr arrives in a gift-ready box. Add her initials for a finishing touch she'll carry everywhere.",
      },
      { property: "og:title", content: "Gift Sets & Personalisation — Hängr" },
      {
        property: "og:description",
        content: "Gift-ready boxes with optional monogram.",
      },
    ],
  }),
});

function GiftPage() {
  return (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main className="bg-background">
        <section className="bg-cream py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">A gift</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              The gift she didn't know she needed.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the woman with the beautiful bag and nowhere to put it. Hängr arrives in a
              gift-ready box — add her initials for a finishing touch she'll carry everywhere.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-border p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Gift Set</p>
              <h2 className="font-serif text-2xl text-foreground mb-4">The Atelier Box</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                One Hängr of your choice, presented in our signature linen-lined box, sealed with
                a hand-tied ribbon.
              </p>
              <Link
                to="/"
                hash="products"
                className="inline-block text-sm tracking-[0.2em] uppercase border-b border-foreground text-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Choose a Hängr →
              </Link>
            </div>
            <div className="border border-border p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Personalise</p>
              <h2 className="font-serif text-2xl text-foreground mb-4">Add a monogram</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Engrave up to three initials on the underside of the hook. Subtle, permanent,
                quietly hers.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Available at checkout — coming soon
              </p>
            </div>
          </div>
        </section>
      </main>
      <StoreFooter />
    </>
  );
}
