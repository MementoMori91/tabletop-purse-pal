export function StoreFooter() {
  return (
    <footer id="about" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl mb-1">Hängr</h3>
            <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Nordic Luxury</p>
            <p className="text-sm opacity-70 leading-relaxed">
              Quietly crafted purse holders shaped by Scandinavian design — keeping your handbag safe, clean, and close.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 opacity-50">Customer Care</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Shipping &amp; Returns</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 opacity-50">Follow Us</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Instagram</li>
              <li>Pinterest</li>
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
