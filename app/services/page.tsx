import type { Metadata } from "next";
import Container from "../components/Container/page";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { services, audiences, cta } from "../lib/content";
import styles from "../styles/Services.module.css";
import shared from "../styles/shared.module.css";
import Reveal from "../components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, SEO & GEO, branding, digital strategy, training, and custom digital products — for organisations across East Africa.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy text-white ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light">
              What we do
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              An integrated digital toolkit
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              From a lean single-page site to a full multi-organisation
              rollout, our services work together — or stand alone.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SERVICES GRID
      ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.08}>
                <article
                  className={`group flex h-full flex-col rounded-lg border border-border bg-white p-7 ${styles.serviceCard}`}
                >
                  <div className={styles.serviceCardHead}>
                    <div className={styles.iconBadge} aria-hidden="true">
                      {service.icon}
                    </div>

                    <h3 className="font-semibold text-navy transition-colors group-hover:text-blue">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                    {service.summary}
                  </p>

                  <div className="mt-5">
                    <Button href={service.href} variant="ghost">
                      Learn more →
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================= */}
      <section className="section-y bg-light">
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for organisations doing real work"
            description="Whether you're a growing business, a refugee-led organisation, or a development partner running a multi-organisation programme, we build for how your team actually operates."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <Reveal key={audience.slug} delay={(index % 4) * 0.08}>
                <article className="h-full rounded-lg border border-border bg-white p-5">
                  <h3 className="text-sm font-semibold text-navy">
                    {audience.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray">
                    {audience.shortDescription}
                  </p>
                </article>
              </Reveal>
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
            <Button href={cta.secondary.href} variant="ghost">
              {cta.secondary.label}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
