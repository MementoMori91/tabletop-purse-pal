const shots = [
  {
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=80",
    caption: "At dinner in Stockholm.",
  },
  {
    img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
    caption: "At the office. On the terrace. Wherever your bag goes.",
  },
  {
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    caption: "The detail that changes everything.",
  },
];

export function AsWorn() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">As worn</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">In quiet company</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {shots.map((s) => (
            <figure key={s.caption} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
                <img
                  src={s.img}
                  alt={s.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 text-sm tracking-[0.15em] uppercase text-muted-foreground text-center">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
