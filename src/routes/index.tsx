import { createFileRoute } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { StoreFooter } from "@/components/StoreFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hängr — Nordic Luxury Foldable Purse Holder" },
      { name: "description", content: "Hängr — a Scandinavian-designed foldable purse holder. Quiet craft, refined materials, made for everyday carry." },
      { property: "og:title", content: "Hängr — Nordic Luxury Foldable Purse Holder" },
      { property: "og:description", content: "Scandinavian-designed foldable purse holders. Quiet craft for everyday carry." },
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
