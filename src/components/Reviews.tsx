import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section className="bg-cream-dark/30 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Reviews</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">
          Words from our customers
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-background border border-border p-8 text-left flex flex-col items-start gap-4"
            >
              <div className="flex gap-1 text-muted-foreground/40">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">No reviews yet.</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Verified reviews coming soon
        </p>
      </div>
    </section>
  );
}
