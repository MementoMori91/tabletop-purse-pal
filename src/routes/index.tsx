import { createFileRoute } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { StoreFooter } from "@/components/StoreFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tabletop Purse Pal — Foldable Purse Holder" },
      { name: "description", content: "Elegant foldable purse holders for your table. Keep your handbag safe, clean, and within reach." },
      { property: "og:title", content: "Tabletop Purse Pal — Foldable Purse Holder" },
      { property: "og:description", content: "Elegant foldable purse holders for your table." },
    ],
  }),
});

function Index() {
  return (
    <>
      <StoreHeader />
      <HeroSection />
      <ProductGrid />
      <StoreFooter />
    </>
  );
}
