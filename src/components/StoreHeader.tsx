import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide text-foreground">
          Tabletop Purse Pal
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Shop</Link>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
}
