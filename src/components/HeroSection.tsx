import heroImage from "@/assets/hero-purse-holder.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-24">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 animate-fade-in-up">
            Nordic Luxury
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight animate-fade-in-up-delay">
            Hängr — quiet craft for everyday carry
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md animate-fade-in-up-delay-2">
            A foldable purse holder shaped by Scandinavian design. Minimal, refined, and made to keep your bag off the floor wherever you go.
          </p>
          <div className="mt-8 animate-fade-in-up-delay-2">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Foldable purse holder on marble table"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/30 to-transparent md:from-cream/10" />
        </div>
      </div>
    </section>
  );
}
