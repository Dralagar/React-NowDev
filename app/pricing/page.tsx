import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container/page";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { pricing, addOns, cta } from "../lib/content";
import styles from "../styles/Pricing.module.css";
import shared from "../styles/shared.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent packages for website design, development, SEO, and training — plus custom quotes for multi-organisation platforms.",
};

export default function PricingPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy text-white ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light">
              Pricing
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Clear packages, no surprises
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Every project starts with a discovery call so we can scope it
              properly. The packages below are a starting point — we&apos;ll
              always confirm a fixed quote before any work begins.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PRICING TIERS
      ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <article
                key={tier.slug}
                className={`flex flex-col rounded-lg border p-7 ${styles.card} ${
                  tier.highlighted
                    ? `border-blue bg-navy text-white lg:-translate-y-3 ${styles.highlighted}`
                    : "border-border bg-white"
                }`}
              >
                {tier.highlighted && (
                  <span className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles.ribbon}`}>
                    Most popular
                  </span>
                )}

                <h3
                  className={`text-lg font-semibold ${
                    tier.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </h3>

                <p
                  className={`mt-3 text-2xl font-bold ${
                    tier.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.price}
                </p>

                <p
                  className={`text-xs uppercase tracking-wide ${
                    tier.highlighted ? "text-white/60" : "text-gray"
                  }`}
                >
                  {tier.cadence}
                </p>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    tier.highlighted ? "text-white/80" : "text-gray"
                  }`}
                >
                  {tier.bestFor}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        tier.highlighted ? "text-white/90" : "text-gray"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs font-bold ${
                          tier.highlighted
                            ? "bg-white/15 text-white"
                            : "bg-blue/10 text-blue"
                        }`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button
                    href={tier.href}
                    variant={tier.highlighted ? "secondary" : "primary"}
                    className="w-full text-center"
                  >
                    Get a quote
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-gray">
            Prices shown are starting estimates and may vary based on scope —{" "}
            <Link href="/contact" className="font-semibold text-blue hover:underline">
              contact us
            </Link>{" "}
            for an exact quote.
          </p>
        </Container>
      </section>

      {/* =========================================================
          ADD-ONS
      ========================================================= */}
      <section className="section-y bg-light">
        <Container>
          <SectionHeading
            eyebrow="Add-ons"
            title="Keep your site running smoothly"
            description="Optional services you can add to any package, now or later."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {addOns.map((addOn) => (
              <article
                key={addOn.title}
                className="rounded-lg border border-border bg-white p-6"
              >
                <h3 className="font-semibold text-navy">{addOn.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {addOn.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="section-y">
        <Container className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            {cta.title}
          </h2>
          <p className="mt-4 text-gray">{cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button href="/services" variant="ghost">
              See all services
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
