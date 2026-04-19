const messages = [
  "Free shipping on orders over €75",
  "Designed in Scandinavia",
  "Folds flat — fits any clutch",
  "30-day returns",
];

export const FREE_SHIPPING_THRESHOLD = 75;

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground text-[11px] tracking-[0.25em] uppercase">
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-center gap-10 overflow-hidden">
        {messages.map((m, i) => (
          <span key={i} className={i > 0 ? "hidden md:inline" : ""}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
