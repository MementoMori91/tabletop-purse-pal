import { Link } from "@tanstack/react-router";
import { type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingBag, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const { node } = product;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const variant = node.variants.edges[0]?.node;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: node.title });
  };

  return (
    <Link
      to="/product/$handle"
      params={{ handle: node.handle }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden bg-cream rounded-sm">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
          </div>
        )}
        <button
          onClick={handleAddToCart}
          disabled={isLoading || !variant}
          className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/90 disabled:opacity-50"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShoppingBag className="h-4 w-4" />}
        </button>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg text-foreground">{node.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          €{parseFloat(price.amount).toFixed(0)}
        </p>
      </div>
    </Link>
  );
}
