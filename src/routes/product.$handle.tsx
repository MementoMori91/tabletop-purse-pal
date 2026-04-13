import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { ShoppingBag, Loader2, ArrowLeft } from "lucide-react";
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
              {variant?.price.currencyCode} {parseFloat(variant?.price.amount || "0").toFixed(2)}
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

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
      </main>
      <StoreFooter />
    </>
  );
}
