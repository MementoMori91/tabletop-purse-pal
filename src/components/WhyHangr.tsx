import { Mountain, Scale, Gem, Package, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Mountain,
    title: "Designed in Scandinavia",
    body: "Drawn in a Stockholm studio and shaped by Nordic restraint. Every curve, weight and finish is considered, so Hängr feels as quiet on your table as it does in your hand.",
  },
  {
    icon: Scale,
    title: "Holds up to 15 kg",
    body: "Engineered from solid weighted metal to support even the heaviest everyday bag. Tested on structured leather totes and overpacked weekenders so yours never touches the floor.",
  },
  {
    icon: Gem,
    title: "Premium finish",
    body: "Brushed gold, polished steel and hand-selected stones, set by hand. Materials are chosen to age beautifully and keep their shine through years of daily use.",
  },
  {
    icon: Package,
    title: "Gift-ready packaging",
    body: "Each Hängr arrives in a soft-touch box with a linen pouch tucked inside. Ready to give straight from the parcel — no extra wrapping, no last-minute shopping.",
  },
  {
    icon: RefreshCw,
    title: "30-day returns",
    body: "Try it at your favourite café, restaurant or desk. If it isn't right, send it back within 30 days for a full refund — no forms, no questions, no fuss.",
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
