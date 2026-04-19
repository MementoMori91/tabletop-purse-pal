import { createFileRoute } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StoreFooter } from "@/components/StoreFooter";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Our Story — Hängr" },
      {
        name: "description",
        content:
          "Hängr was born at a quiet café in Stockholm. Foldable purse holders shaped by Nordic restraint.",
      },
      { property: "og:title", content: "Our Story — Hängr" },
      {
        property: "og:description",
        content: "Foldable purse holders shaped by Nordic restraint.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <StoreHeader />
      <main className="bg-background">
        <section className="max-w-3xl mx-auto px-6 py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
            Our story
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground text-center mb-12 leading-tight">
            Quiet craft, made for everyday carry
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Hängr was born at a quiet café in Stockholm. A friend set her bag on the floor —
              again — and we wondered why something so cared for had nowhere to rest.
            </p>
            <p>
              The answer was small, weighted, and beautifully Nordic. A foldable purse holder
              shaped by Scandinavian design — minimal, refined, and made to keep your bag off the
              floor wherever you go.
            </p>
            <p>
              Every piece is considered. Brushed gold and polished steel, hand-selected stones,
              forest-green croc. Strong enough for 15 kg. Quiet enough for any room.
            </p>
            <p className="font-serif text-2xl text-foreground italic pt-6">
              "We made the answer: small, weighted, beautifully Nordic."
            </p>
            <p className="text-sm tracking-[0.2em] uppercase">— The Hängr Atelier</p>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
            <div>
              <p className="font-serif text-3xl text-foreground mb-2">15 kg</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Tested holding capacity
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground mb-2">1 cm</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Minimum table thickness
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground mb-2">30 days</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Returns, no questions
              </p>
            </div>
          </div>
        </section>
      </main>
      <StoreFooter />
    </>
  );
}
