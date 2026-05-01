## Goal
Replace the body copy of the four feature cards in the "Designed for the bags you love most" section on `/product/$handle` with new, distinctly Hängr-voiced text supplied by the user.

## Scope
File: `src/routes/product.$handle.tsx` — only the four `<p class="text-xs text-muted-foreground leading-relaxed">` blocks inside the `grid md:grid-cols-[1fr_auto_1fr]` layout.

## Preserved (no changes)
- Section heading, intro paragraph, eyebrow ("Wherever you go")
- Icons: `Layers`, `ShieldCheck`, `Lock`, `MoveHorizontal`
- Feature titles: "Works on any surface", "Tested on designer bags", "Anti-slip protection", "Foldable & stylish"
- 4-up grid layout with centered product image
- Specifications & Measurements block beneath

## Awaiting from user
The four replacement paragraphs (one per feature). Once received, I'll drop them in verbatim with no other edits.

## Out of scope
Specifications/Measurements list, product description above, WhyHangr, hospitality page.