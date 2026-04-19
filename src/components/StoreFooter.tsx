import { Link } from "@tanstack/react-router";

export function StoreFooter() {
  return (
    <footer id="about" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl mb-1">Hängr</h3>
            <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Nordic Luxury</p>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Quietly crafted purse holders shaped by Scandinavian design — keeping your handbag
              safe, clean, and close.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase mb-4 opacity-50">Shop</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" hash="products" className="hover:opacity-100">The Collection</Link></li>
              <li><Link to="/" hash="products" className="hover:opacity-100">Classic</Link></li>
              <li><Link to="/" hash="products" className="hover:opacity-100">Signature</Link></li>
              <li><Link to="/gift" className="hover:opacity-100">Gift Sets</Link></li>
              <li><Link to="/gift" className="hover:opacity-100">Personalise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase mb-4 opacity-50">About</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100">Our Story</Link></li>
              <li><Link to="/journal" className="hover:opacity-100">Journal</Link></li>
              <li><Link to="/about" className="hover:opacity-100">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase mb-4 opacity-50">Customer Care</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Shipping &amp; Returns</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
            <h4 className="text-xs tracking-[0.25em] uppercase mt-6 mb-3 opacity-50">Follow</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Hängr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
