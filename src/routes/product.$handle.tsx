import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { ShoppingBag, Loader2, ArrowLeft, Layers, ShieldCheck, MoveHorizontal, Lock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$handle")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { handle } = Route.useParams();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [handle]);

  if (loading) {
    return (
      <>
        <StoreHeader />
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <StoreHeader />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <p className="text-lg text-muted-foreground mb-4">Product not found</p>
          <Link to="/" className="text-sm text-accent hover:underline">← Back to shop</Link>
        </div>
        <StoreFooter />
      </>
    );
  }

  const variant = product.variants.edges[selectedVariantIdx]?.node;
  const images = product.images.edges;

  const handleAddToCart = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: product.title });
  };

  return (
    <>
      <StoreHeader />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </button>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square bg-cream rounded-sm overflow-hidden">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <ShoppingBag className="h-16 w-16" />
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${idx === selectedImage ? "border-accent" : "border-transparent"}`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground">{product.title}</h1>
            <p className="mt-4 text-2xl text-foreground">
              €{parseFloat(variant?.price.amount || "0").toFixed(0)}
            </p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Meet the <span className="text-foreground">{product.title}</span> — a quietly luxurious bag holder
                designed to keep your favourite handbag off the floor, wherever the day takes you.
              </p>
              <p>
                Drawn in Sweden and crafted from solid, weighted metal, its considered design
                evenly distributes the load so even structured leather totes sit safely. When
                you're done, it folds flat to slip into the smallest of bags.
              </p>
              <p>
                Carry your most-loved pieces with confidence — knowing they'll stay pristine,
                wherever you are.
              </p>
              {product.description && (
                <p className="pt-2 border-t border-border/60 text-sm">{product.description}</p>
              )}
            </div>

            {product.options.length > 0 && product.options[0].name !== "Title" && (
              <div className="mt-8 space-y-4">
                {product.options.map((option) => (
                  <div key={option.name}>
                    <label className="text-sm tracking-widest uppercase text-muted-foreground mb-2 block">
                      {option.name}
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {option.values.map((value) => {
                        const isSelected = variant?.selectedOptions.some(
                          (so) => so.name === option.name && so.value === value
                        );
                        return (
                          <button
                            key={value}
                            onClick={() => {
                              const idx = product.variants.edges.findIndex((v) =>
                                v.node.selectedOptions.some((so) => so.name === option.name && so.value === value)
                              );
                              if (idx >= 0) setSelectedVariantIdx(idx);
                            }}
                            className={`px-4 py-2 text-sm border rounded-sm transition-colors ${
                              isSelected ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                            }`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleAddToCart}
              disabled={isLoading || !variant?.availableForSale}
              className="mt-8 w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : !variant?.availableForSale ? (
                "Sold Out"
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>

        <section className="mt-24 py-16 border-t border-border">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Wherever you go</p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground max-w-2xl mx-auto">
              Designed for the bags you love most
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We're handbag people too. After years of searching for a portable hanger that
              actually felt worthy of a fine bag, we drew our own — quietly engineered, beautifully made.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-12 text-center md:text-right">
              <div>
                <Layers className="h-7 w-7 mx-auto md:ml-auto md:mr-0 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="text-sm font-serif text-foreground mb-2">Works on any surface</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Wood, marble, brushed steel — the weighted base sits flat and distributes the load
                  evenly, so your bag stays steady wherever you set it down.
                </p>
              </div>
              <div>
                <ShieldCheck className="h-7 w-7 mx-auto md:ml-auto md:mr-0 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="text-sm font-serif text-foreground mb-2">Tested on designer bags</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Built from solid metal and tried on the heaviest of totes — holds up to 7 kg / 15.4 lbs
                  with a gentle, secure grip that won't mark the strap.
                </p>
              </div>
            </div>

            {images[0]?.node && (
              <div className="hidden md:block w-64 lg:w-80 aspect-square bg-cream rounded-sm overflow-hidden mx-auto">
                <img
                  src={images[0].node.url}
                  alt={images[0].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-12 text-center md:text-left">
              <div>
                <Lock className="h-7 w-7 mx-auto md:mr-auto md:ml-0 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="text-sm font-serif text-foreground mb-2">Anti-slip protection</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Soft pads on the underside grip the table without scratching, keeping every
                  precious piece safe from slips, knocks and unexpected falls.
                </p>
              </div>
              <div>
                <MoveHorizontal className="h-7 w-7 mx-auto md:mr-auto md:ml-0 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="text-sm font-serif text-foreground mb-2">Foldable & stylish</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Folds down to slip into even the smallest clutch. Beautiful enough to leave on
                  the table — discreet enough to disappear into your bag.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <div className="border-t border-border pt-6">
              <h4 className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Specifications</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Holds up to 7 kg / 15.4 lbs</li>
                <li>Solid plated metal construction</li>
                <li>Anti-slip pads for table grip</li>
                <li>Portable, foldable design</li>
                <li>Includes signature box & suede pouch</li>
                <li>Designed in Sweden</li>
              </ul>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="text-xs tracking-[0.25em] uppercase text-accent mb-4">Measurements</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Width: 5 cm / 2 in</li>
                <li>Height: 1 cm / 0.4 in</li>
                <li>Hook drop: 8.5 cm / 3.3 in</li>
                <li>Weight: 120 g / 4.2 oz</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <StoreFooter />
    </>
  );
}
