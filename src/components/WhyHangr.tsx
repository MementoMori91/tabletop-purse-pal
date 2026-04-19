import { Mountain, Scale, Gem, Package, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Mountain,
    title: "Designed in Scandinavia",
    body: "Shaped by Nordic simplicity and restraint",
  },
  {
    icon: Scale,
    title: "Holds up to 15 kg",
    body: "Strong enough for your heaviest everyday bag",
  },
  {
    icon: Gem,
    title: "Premium finish",
    body: "Brushed gold, polished steel, hand-selected stones",
  },
  {
    icon: Package,
    title: "Gift-ready packaging",
    body: "Every order arrives beautifully boxed",
  },
  {
    icon: RefreshCw,
    title: "30-day returns",
    body: "Buy with complete confidence",
  },
];

export function WhyHangr() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Why Hängr</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Quietly considered, in every detail
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <Icon className="h-8 w-8 mx-auto text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-serif text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
