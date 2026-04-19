import { Link } from "@tanstack/react-router";

export function GiftSection() {
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">A gift</p>
        <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
          The gift she didn't know she needed.
        </h2>
        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
          For the woman with the beautiful bag and nowhere to put it. Hängr arrives in a
          gift-ready box — add her initials for a finishing touch she'll carry everywhere.
        </p>
        <div className="mt-10">
          <Link
            to="/gift"
            className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
          >
            Shop Gift Sets →
          </Link>
        </div>
      </div>
    </section>
  );
}
