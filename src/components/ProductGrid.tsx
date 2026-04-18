import { useEffect, useMemo, useState } from "react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";

type TabKey = "all" | "classic" | "signature";

const TABS: { key: TabKey; label: string; tag?: string }[] = [
  { key: "all", label: "The Collection" },
  { key: "classic", label: "Classic", tag: "classic" },
  { key: "signature", label: "Signature", tag: "signature" },
];

export function ProductGrid() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 20 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    const tab = TABS.find((t) => t.key === activeTab);
    if (!tab?.tag) return products;
    const matches = products.filter((p) =>
      (p.node as unknown as { tags?: string[] }).tags?.some(
        (t) => t.toLowerCase() === tab.tag,
      ),
    );
    return matches.length > 0 ? matches : products;
  }, [products, activeTab]);

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Shop</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">The Hängr Collection</h2>
        <p className="mt-3 text-muted-foreground">Quiet craft, made for everyday carry</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 md:px-8 py-3 text-xs tracking-[0.25em] uppercase transition-colors -mb-px border-b-2 ${
                activeTab === tab.key
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-cream rounded-lg">
          <p className="text-lg text-muted-foreground">No products found</p>
          <p className="text-sm text-muted-foreground mt-2">Products will appear here once they're added to the store.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
