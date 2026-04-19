import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StoreFooter } from "@/components/StoreFooter";

export const articles = [
  {
    slug: "why-never-put-your-bag-on-the-floor",
    title: "Why you should never put your bag on the floor",
    excerpt:
      "It's not superstition — it's hygiene, leather care, and a small act of respect for something you love.",
  },
  {
    slug: "best-accessories-for-louis-vuitton-owners",
    title: "The best accessories for Louis Vuitton owners",
    excerpt:
      "From rain covers to bag hooks — the small additions that protect a long investment.",
  },
  {
    slug: "how-to-care-for-your-designer-handbag",
    title: "How to care for your designer handbag",
    excerpt:
      "Five quiet rituals that keep premium leather looking new for decades, not seasons.",
  },
  {
    slug: "nordic-design-why-less-is-always-more",
    title: "Nordic design: why less is always more",
    excerpt:
      "On restraint, function, and the long Scandinavian tradition of designing things that disappear.",
  },
] as const;

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Journal — Hängr" },
      {
        name: "description",
        content:
          "Notes on bag care, Nordic design, and the small details that protect what you carry.",
      },
      { property: "og:title", content: "Journal — Hängr" },
      {
        property: "og:description",
        content: "Notes on bag care, Nordic design, and quiet luxury.",
      },
    ],
  }),
});

function JournalPage() {
  return (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main className="bg-background">
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Journal</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
            Notes on what you carry
          </h1>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24">
          <div className="divide-y divide-border border-y border-border">
            {articles.map((a) => (
              <Link
                key={a.slug}
                to="/journal/$slug"
                params={{ slug: a.slug }}
                className="block py-10 group"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:opacity-70 transition-opacity">
                  {a.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <span className="mt-4 inline-block text-xs tracking-[0.25em] uppercase text-accent">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <StoreFooter />
    </>
  );
}
