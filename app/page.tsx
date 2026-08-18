import Container from "./components/Container/page";
import SectionHeading from "./components/SectionHeading/SectionHeading";
import Button from "./components/Button/Button";
import styles from "./styles/Home.module.css";
import shared from "./styles/shared.module.css";

import {
  site,
  services,
  caseStudies,
  audiences,
  whyUs,
} from "./lib/content";

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  const accentPhrase = "East Africa";
  const accentIndex = site.tagline.lastIndexOf(accentPhrase);
  const taglineLead =
    accentIndex === -1 ? site.tagline : site.tagline.slice(0, accentIndex);
  const taglineAccent = accentIndex === -1 ? "" : site.tagline.slice(accentIndex);

  return (
    <main>
      {/* =========================================================
          HERO - FIXED: Explicit white text
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy ${styles.hero} ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${styles.heroContent}`}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={shared.fadeInUp}>
              {/* Location / regions */}
              <p className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light">
                {site.location} · Serving {site.regions.join(", ")}
              </p>

              {/* Main headline - EXPLICIT WHITE COLOR */}
              <h1 className={`${styles.heroTitle} text-white`}>
                {taglineLead}
                {taglineAccent && (
                  <span className={shared.gradientText}>{taglineAccent}</span>
                )}
              </h1>

              {/* Supporting statement */}
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                We design and build websites, optimise them for search and
                AI-powered discovery, and train your team to manage it all —
                so your digital presence works as hard as you do.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary">
                  Start a project
                </Button>

                <Button
                  href="/portfolio"
                  variant="ghost"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  See our work
                </Button>
              </div>
            </div>

            {/* Code-window visual */}
            <div className={`hidden lg:block ${styles.codeWindowShell}`}>
              <div className={styles.codeWindow}>
                <div className={styles.dots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.codeLineTag}>&lt;Website</div>
                <div className={`${styles.codeIndent} ${styles.codeLineMuted}`}>
                  org=<span className={styles.codeLineValue}>&quot;YourOrganisation&quot;</span>
                </div>
                <div className={`${styles.codeIndent} ${styles.codeLineMuted}`}>
                  platform=<span className={styles.codeLineValue}>&quot;WordPress&quot;</span>
                </div>
                <div className={`${styles.codeIndent} ${styles.codeLineMuted}`}>
                  seo=<span className={styles.codeLineValue}>{"{true}"}</span>
                </div>
                <div className={`${styles.codeIndent} ${styles.codeLineMuted}`}>
                  geo=<span className={styles.codeLineValue}>{"{true}"}</span>
                </div>
                <div className={`${styles.codeIndent} ${styles.codeLineMuted}`}>
                  training=<span className={styles.codeLineValue}>{"{true}"}</span>
                </div>
                <div className={styles.codeLineTag}>/&gt;</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}
      <section className="border-b border-border bg-light">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-6 text-sm text-gray">
          <span className="font-semibold text-navy">Trusted by:</span>
          {caseStudies.map((caseStudy) => (
            <span key={caseStudy.slug} className={styles.trustName}>
              {caseStudy.client}
            </span>
          ))}
        </Container>
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================= */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for organisations doing real work"
            description="Whether you're a growing business, a refugee-led organisation, or a development partner running a multi-organisation programme, we build for how your team actually operates."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className={`rounded-lg border border-border bg-white p-5 ${shared.cardHover}`}
              >
                <h3 className="text-sm font-semibold text-navy">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {audience.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="section-y bg-light">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="An integrated digital toolkit"
            description="From a lean single-page site to a full multi-organisation rollout, our services work together — or stand alone."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className={`group rounded-lg border border-border bg-white p-6 ${shared.cardHover}`}
              >
                <div
                  className={`mb-3.5 h-11 w-11 rounded-[10px] text-lg ${shared.gradientBadge}`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-navy transition-colors group-hover:text-blue">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {service.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/services" variant="ghost">
              View all services →
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SELECTED ENGAGEMENTS
      ========================================================= */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Selected Engagements"
            title="Real organisations, real outcomes"
            description="A sample of the work we've delivered across Kenya's business, refugee-led, and community-organisation ecosystem."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCaseStudies.map((caseStudy) => (
              <article
                key={caseStudy.slug}
                className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-white ${shared.cardHover}`}
              >
                <div className="h-2 bg-gradient-to-r from-blue to-pink" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                    {caseStudy.category}
                  </p>
                  <h3 className="mt-2 font-semibold text-navy">
                    {caseStudy.client}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                    {caseStudy.summary}
                  </p>
                  <p className="mt-4 text-xs font-medium text-gray">
                    {caseStudy.status} · {caseStudy.year}
                  </p>
                  <div className="mt-5">
                    <Button href={`/portfolio/${caseStudy.slug}`} variant="ghost">
                      Read case study →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/portfolio" variant="ghost">
              View full portfolio →
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHY WORK WITH US
      ========================================================= */}
      <section className="section-y bg-navy text-white">
        <Container>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="Built to be sustainable, not just delivered"
            description="We measure success by whether you can run your own digital presence after we're gone."
          />
          <div className={styles.whyGrid}>
            {whyUs.map((reason, index) => (
              <article
                key={reason.title}
                className={
                  index === 0
                    ? `rounded-lg p-6 ${styles.whyFeatured} ${styles.whyGridFirstChild}`
                    : "rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                }
              >
                <h3 className={index === 0 ? "text-lg font-bold text-white" : "font-semibold text-white"}>
                  {reason.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    index === 0 ? "text-white/90" : "text-white/70"
                  }`}
                >
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="section-y">
        <Container className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">
            Let&apos;s build a digital presence that works as hard as your mission.
          </h2>
          <p className="mt-4 text-gray">
            Tell us about your organisation and we&apos;ll put together a clear scope and quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/pricing" variant="ghost">
              See pricing
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}