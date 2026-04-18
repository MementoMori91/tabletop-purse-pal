import { Truck, Leaf, RefreshCw, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free EU shipping over €120" },
  { icon: Leaf, label: "Designed in Scandinavia" },
  { icon: ShieldCheck, label: "Holds up to 15 kg" },
  { icon: RefreshCw, label: "30-day returns" },
];

export function USPStrip() {
  return (
    <section className="border-y border-border bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
            <Icon className="h-5 w-5 text-accent shrink-0" strokeWidth={1.5} />
            <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
