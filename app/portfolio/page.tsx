import type { Metadata } from "next";
import Container from "../components/Container/page";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { caseStudies, cta } from "../lib/content";
import styles from "../styles/Portfolio.module.css";
import shared from "../styles/shared.module.css";
import Reveal from "../components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of website and digital strategy engagements for NGOs, refugee-led organisations, and community-based organisations across East Africa.",
};

export default function PortfolioPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy text-white ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light">
              Our work
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Real organisations, real outcomes
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              A selection of the work we&apos;ve delivered across Kenya and
              Uganda&apos;s business, refugee-led, and community-organisation
              ecosystem.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CASE STUDIES
      ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <Reveal key={caseStudy.slug} delay={(index % 2) * 0.1}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white ${styles.card}`}
                >
                  <div className={styles.topBar} />

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                      {caseStudy.category}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-navy">
                      {caseStudy.client}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                      {caseStudy.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {caseStudy.services.map((service) => (
                        <span
                          key={service}
                          className={`rounded-full border border-border bg-light px-3 py-1 text-xs text-navy ${styles.tag}`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-xs font-medium text-gray">
                      {caseStudy.status} · {caseStudy.year}
                    </p>

                    <div className="mt-5">
                      <Button href={caseStudy.href} variant="ghost">
                        Read case study →
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="section-y bg-light">
        <Container>
          <SectionHeading
            title="Want to see your organisation here next?"
            description={cta.description}
          />
          <div className="flex flex-wrap gap-4">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button href={cta.secondary.href} variant="ghost">
              {cta.secondary.label}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
