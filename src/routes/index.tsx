import { createFileRoute } from "@tanstack/react-router";
import { StoreHeader } from "@/components/StoreHeader";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeroSection } from "@/components/HeroSection";
import { USPStrip } from "@/components/USPStrip";
import { ProductGrid } from "@/components/ProductGrid";
import { Reviews } from "@/components/Reviews";
import { HowItWorks } from "@/components/HowItWorks";
import { GiftSection } from "@/components/GiftSection";
import { AsWorn } from "@/components/AsWorn";
import { WhyHangr } from "@/components/WhyHangr";
import { FounderStory } from "@/components/FounderStory";
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
      <AnnouncementBar />
      <StoreHeader />
      <HeroSection />
      <USPStrip />
      <ProductGrid />
      <Reviews />
      <HowItWorks />
      <GiftSection />
      <AsWorn />
      <WhyHangr />
      <FounderStory />
      <StoreFooter />
    </>
  );
}
