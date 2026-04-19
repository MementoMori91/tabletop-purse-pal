const steps = [
  {
    n: "01",
    title: "Unfold",
    body: "Take Hängr out of your bag. One smooth motion, it's ready.",
  },
  {
    n: "02",
    title: "Place",
    body: "Rest it on any table edge — restaurant, café, office, bar. Works on surfaces as thin as 1 cm.",
  },
  {
    n: "03",
    title: "Hang",
    body: "Hang your bag. Physics keeps it secure. No magnets, no damage, no stress.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Three quiet motions</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.n} className="text-center md:text-left">
              <p className="font-serif text-5xl text-accent/60 mb-4">{step.n}</p>
              <h3 className="text-xl font-serif text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
