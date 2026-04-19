import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Check, Mail, Phone, Building2, Sparkles, ShieldCheck, Truck, Shield, Pen, RotateCcw, CreditCard } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/hospitality")({
  component: HospitalityPage,
  head: () => ({
    meta: [
      { title: "Hängr Hospitality — Bag Hooks for Restaurants & Hotels" },
      {
        name: "description",
        content:
          "Premium engraved bag hooks for fine dining restaurants, hotels and bars. Bulk pricing from €12/unit. Custom logo engraving. Request a free sample.",
      },
      { property: "og:title", content: "Hängr Hospitality — Bag Hooks for Restaurants & Hotels" },
      {
        property: "og:description",
        content:
          "Discreet, engraved bag hooks for hospitality. Your guests' bags never touch the floor again.",
      },
    ],
  }),
});

const tiers = [
  {
    qty: "50",
    price: "25",
    badge: "Sample",
    features: ["Logo sticker available", "+€15 shipping", "2-week lead time"],
    checks: [false, false, false],
  },
  {
    qty: "100",
    price: "19",
    badge: "Most popular",
    highlight: true,
    features: ["Custom logo engraving", "Gift-ready packaging", "Free delivery EU"],
    checks: [true, true, true],
  },
  {
    qty: "250",
    price: "16",
    badge: "Group / Chain",
    features: ["Custom logo engraving", "Free delivery EU", "Priority support"],
    checks: [true, true, true],
  },
  {
    qty: "500+",
    price: "13",
    badge: "Enterprise",
    features: [
      "Custom logo engraving",
      "Free delivery EU",
      "Dedicated account manager",
      "Branded training materials",
    ],
    checks: [true, true, true, true],
  },
];

const inquirySchema = z.object({
  venue: z.string().trim().min(1, "Venue name required").max(120),
  contact: z.string().trim().min(1, "Contact name required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  quantity: z.string().trim().min(1, "Quantity required").max(20),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function HospitalityPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = inquirySchema.safeParse({
      venue: fd.get("venue"),
      contact: fd.get("contact"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      quantity: fd.get("quantity"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // TODO: wire up to email/CRM via server function
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Request received", {
      description: "We'll be in touch within 24 hours with pricing and a free sample.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal B2B header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/hospitality" className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide">Hängr</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent mt-0.5">
              Hospitality
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors hidden sm:inline">
              How it works
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors hidden sm:inline">
              Pricing
            </a>
            <a href="#inquiry" className="hover:text-foreground transition-colors hidden sm:inline">
              Sample
            </a>
            <Link to="/" className="hover:text-foreground transition-colors">
              Consumer site
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              For restaurants, hotels & bars
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Your guests' bags never touch the floor again.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discreet, engraved bag hooks for fine-dining venues. Custom-branded with your logo,
              delivered in bulk from €12 per unit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
              >
                Request free sample
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-3 border border-border text-sm tracking-widest uppercase hover:bg-cream transition-colors rounded-sm"
              >
                See pricing
              </a>
            </div>
          </div>
          <div className="bg-cream rounded-sm aspect-[4/5] flex items-center justify-center text-center px-8">
            <div>
              <Sparkles className="h-10 w-10 mx-auto text-accent mb-4" />
              <p className="font-serif text-2xl">Engraved with your logo</p>
              <p className="text-sm text-muted-foreground mt-3">
                Permanent laser engraving. Brushed steel finish. Built for daily restaurant use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-serif">From sample to service in three steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Request your sample",
                body: "We send a hook engraved with your logo, free of charge.",
              },
              {
                step: "02",
                title: "Approve & order",
                body: "Confirm the design and place your bulk order.",
              },
              {
                step: "03",
                title: "We deliver",
                body: "Your branded hooks arrive bulk-packed, ready to place on tables.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="text-center md:text-left">
                <p className="font-serif text-5xl text-accent mb-4">{step}</p>
                <div className="h-px w-10 bg-border mb-4 mx-auto md:mx-0" />
                <h3 className="font-serif text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why hospitality */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Why Hängr</p>
          <h2 className="text-3xl md:text-4xl font-serif">Hospitality-grade detail</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Sparkles,
              title: "Custom engraving",
              body: "Your logo laser-engraved into brushed steel. Permanent, premium, on-brand.",
            },
            {
              icon: ShieldCheck,
              title: "Built to last",
              body: "Solid stainless construction. Designed for daily use across hundreds of covers.",
            },
            {
              icon: Truck,
              title: "Bulk delivery",
              body: "Ships flat in protective bulk packaging. Lead time 3–4 weeks from order.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <Icon className="h-8 w-8 mx-auto text-accent mb-4" />
              <h3 className="font-serif text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-cream border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Volume pricing</p>
            <h2 className="text-3xl md:text-4xl font-serif">Transparent bulk rates</h2>
            <p className="mt-3 text-muted-foreground">All prices ex. VAT. Engraving included from 100 units.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t) => (
              <div
                key={t.qty}
                className={`group rounded-lg p-8 flex flex-col border bg-background transition-all hover:-translate-y-0.5 ${
                  t.highlight
                    ? "border-foreground shadow-md"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  {t.qty} units
                </p>
                <p className="font-serif text-5xl mt-4">€{t.price}</p>
                <p className="text-xs text-muted-foreground mt-1">per unit</p>
                <span
                  className={`inline-block self-start mt-5 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase rounded-sm ${
                    t.highlight
                      ? "bg-accent text-accent-foreground"
                      : "bg-cream text-muted-foreground border border-border"
                  }`}
                >
                  {t.badge}
                </span>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground/80 flex-1">
                  {t.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-2">
                      {t.checks[i] ? (
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      ) : (
                        <span className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/60 text-center leading-4">
                          ·
                        </span>
                      )}
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#inquiry"
                  className={`mt-8 inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-widest uppercase rounded-sm transition-colors ${
                    t.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-cream"
                  }`}
                >
                  Request quote
                </a>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-lg border border-border bg-background p-8 flex flex-col">
              <span className="self-start text-[10px] tracking-[0.25em] uppercase px-2 py-0.5 rounded-sm bg-accent text-accent-foreground">
                New
              </span>
              <h3 className="font-serif text-2xl mt-4">Monthly replenishment program</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Hooks get lost, stolen or damaged. Our subscription automatically replaces what you
                need, every month.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> 12 units per month
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> €18 per unit
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> Cancel anytime
                </li>
              </ul>
              <a
                href="#inquiry"
                className="mt-6 inline-flex self-start items-center px-6 py-2.5 bg-primary text-primary-foreground text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
              >
                Start subscription
              </a>
            </div>

            <div className="rounded-lg border border-border bg-background p-8 flex flex-col">
              <span className="self-start text-[10px] tracking-[0.25em] uppercase px-2 py-0.5 rounded-sm bg-cream border border-border text-muted-foreground">
                Custom
              </span>
              <h3 className="font-serif text-2xl mt-4">Multi-location rollout</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Rolling out across 10+ locations or building a private-label program? We'll create a
                custom package with branded packaging, training, and a dedicated account manager.
              </p>
              <a
                href="#inquiry"
                className="mt-auto pt-6 inline-flex self-start items-center px-6 py-2.5 border border-border text-xs tracking-widest uppercase hover:bg-cream transition-colors rounded-sm"
              >
                Contact sales
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground/80 mt-10 italic max-w-2xl mx-auto">
            Delivery included on orders of 100+ units. All hooks are designed in Scandinavia and
            ship from our EU warehouse within 10 business days.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Every order</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">What's included</h2>
            <p className="text-muted-foreground leading-relaxed">
              A turnkey program for venues that care about the details. From first sample to
              re-orders, we handle production, engraving and logistics.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              { icon: Sparkles, text: "Free engraved sample with your logo" },
              { icon: Shield, text: "Brushed stainless steel finish" },
              { icon: Pen, text: "Laser-engraved venue branding" },
              { icon: Truck, text: "Bulk-pack delivery, EU-wide" },
              { icon: RotateCcw, text: "Re-order portal for managers" },
              { icon: CreditCard, text: "Net-30 payment terms (qualifying venues)" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <Icon className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-serif">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "What format do I need for my logo?",
                a: "We accept SVG, EPS, or high-resolution PNG. Our team will prepare the engraving file and send you a proof before production.",
              },
              {
                q: "What is the minimum order quantity?",
                a: "You can order from 50 units. Engraving is included from 100 units. For a no-commitment trial, request a free sample first.",
              },
              {
                q: "How long does delivery take?",
                a: "Samples ship within 7 days. Bulk orders have a 3–4 week lead time from order confirmation.",
              },
              {
                q: "Do you ship outside the EU?",
                a: "Currently we ship EU-wide. For international enquiries, contact us at hospitality@hangr.com.",
              },
              {
                q: "Can we re-order?",
                a: "Yes. All venues get access to a re-order portal so managers can place repeat orders without going through setup again.",
              },
            ].map(({ q, a }, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry" className="bg-cream border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Get started</p>
            <h2 className="text-3xl md:text-4xl font-serif">Request a free sample</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your venue. We'll send a sample engraved with your logo within 7 days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-sm p-8 md:p-10 space-y-5 border border-border">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Venue name" name="venue" icon={Building2} required maxLength={120} />
              <Field label="Your name" name="contact" required maxLength={120} />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" icon={Mail} required maxLength={255} />
              <Field label="Phone (optional)" name="phone" type="tel" icon={Phone} maxLength={40} />
            </div>
            <Field
              label="Estimated quantity"
              name="quantity"
              placeholder="e.g. 100"
              required
              maxLength={20}
            />
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Tell us about your venue, timing, branding requirements…"
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request sample"}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Hängr Nordic — Hospitality</p>
            <p className="mt-2 normal-case tracking-normal italic text-muted-foreground/80">
              Elevating the guest experience, one detail at a time.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Consumer site
            </Link>
            <a href="mailto:hospitality@hangr.com" className="hover:text-foreground transition-colors">
              hospitality@hangr.com
            </a>
            <Link to="/" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  maxLength,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        )}
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-foreground transition-colors`}
        />
      </div>
    </div>
  );
}
