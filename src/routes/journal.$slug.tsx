import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StoreFooter } from "@/components/StoreFooter";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
};

const ARTICLES: Article[] = [
  {
    slug: "why-never-put-your-bag-on-the-floor",
    title: "Why you should never put your bag on the floor",
    excerpt:
      "It's not superstition — it's hygiene, leather care, and a small act of respect for something you love.",
    body: [
      "There's an old superstition — money flies away when your bag touches the floor. The truth is more practical, and harder to ignore. Restaurant floors, café tiles, and pavement are some of the dirtiest surfaces you encounter in a day.",
      "Premium leather is porous. Once stained or scratched at the base, it cannot be fully restored. The corners are the first thing to wear, and the first thing to lose value at resale.",
      "A bag hook solves all of this in one quiet motion. Hängr was made because the alternatives — chairs, knees, a hopeful glance at the table edge — were never enough for a bag worth caring for.",
    ],
  },
  {
    slug: "best-accessories-for-louis-vuitton-owners",
    title: "The best accessories for Louis Vuitton owners",
    excerpt:
      "From rain covers to bag hooks — the small additions that protect a long investment.",
    body: [
      "A Louis Vuitton bag is not a season — it's a decade. The accessories that protect it should be considered with the same care.",
      "A felt liner keeps the interior structured and stops pen marks from migrating into the canvas. A silk twilly protects the handles from skin oils. And a foldable bag hook keeps the base off floors that were never meant to touch monogram canvas.",
      "Hängr fits inside the smallest pochette and disappears when not needed — exactly as a good accessory should.",
    ],
  },
  {
    slug: "how-to-care-for-your-designer-handbag",
    title: "How to care for your designer handbag",
    excerpt: "Five quiet rituals that keep premium leather looking new for decades, not seasons.",
    body: [
      "1. Store it stuffed. Empty bags collapse into permanent creases. Use the dust bag and acid-free tissue.",
      "2. Rotate. No bag should be worn every day for a year. Leather needs rest to recover its shape.",
      "3. Keep it off floors. Always. A bag hook turns this from a rule into a habit.",
      "4. Clean with intention. Soft cloth, no chemicals. For deeper care, a specialist — never a guess.",
      "5. Treat hardware like jewellery. Avoid perfume, lotion, and abrasive surfaces.",
    ],
  },
  {
    slug: "nordic-design-why-less-is-always-more",
    title: "Nordic design: why less is always more",
    excerpt:
      "On restraint, function, and the long Scandinavian tradition of designing things that disappear.",
    body: [
      "Scandinavian design is often described as minimal. The better word is restrained. Every line earns its place. Every material is honest. Decoration is what's left when nothing else can be removed.",
      "Hängr was shaped by this tradition. A small object, weighted correctly, finished beautifully — and quiet enough to belong on any table in any city.",
      "The point isn't to be noticed. The point is to work, every day, for a long time.",
    ],
  },
];

export const Route = createFileRoute("/journal/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Journal — Hängr" }] };
    return {
      meta: [
        { title: `${a.title} — Hängr Journal` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-foreground mb-4">Article not found</h1>
        <Link to="/journal" className="text-sm tracking-[0.2em] uppercase text-accent">
          ← Back to Journal
        </Link>
      </main>
      <StoreFooter />
    </>
  ),
  errorComponent: ({ error }) => (
    <main className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </main>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main className="bg-background">
        <article className="max-w-2xl mx-auto px-6 py-20">
          <Link
            to="/journal"
            className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground"
          >
            ← Journal
          </Link>
          <h1 className="mt-8 font-serif text-4xl md:text-5xl text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground italic">{article.excerpt}</p>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/90">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </main>
      <StoreFooter />
    </>
  );
}
