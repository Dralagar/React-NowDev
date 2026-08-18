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
          HERO - Primary Blue Gradient (#3368A0)
      ========================================================= */}
      <section className={`relative overflow-hidden ${styles.hero} ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${styles.heroContent}`}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={shared.fadeInUp}>
              {/* Location badge - Cream background with Primary text */}
              <p className="mb-6 inline-flex items-center rounded-full bg-cream/90 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm border border-primary/20">
                <span className="mr-2">📍</span>
                {site.location} · Serving {site.regions.join(", ")}
              </p>

              {/* Main headline - White with gradient accent */}
              <h1 className={styles.heroTitle}>
                {taglineLead}
                {taglineAccent && (
                  <span className="text-gradient-warm inline-block">
                    {taglineAccent}
                  </span>
                )}
              </h1>

              {/* Supporting statement */}
              <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${styles.heroSubtitle}`}>
                We design and build websites, optimise them for search and
                AI-powered discovery, and train your team to manage it all —
                so your digital presence works as hard as you do.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-cream-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start a project ✨
                </Button>

                <Button
                  href="/portfolio"
                  variant="ghost"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  See our work →
                </Button>
              </div>

              {/* Trust indicator */}
              <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <span className="inline-flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white"
                      >
                        {String.fromCharCode(64 + i)}
                      </span>
                    ))}
                  </span>
                  <span>Trusted by 50+ orgs</span>
                </span>
                <span className="w-px h-6 bg-white/20" />
                <span className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  4.9/5 rating
                </span>
              </div>
            </div>

            {/* Code-window visual - Navy with Mint accent */}
            <div className={`hidden lg:block ${styles.codeWindowShell} ${shared.fadeInScale}`}>
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
          TRUST STRIP - Cream (#F2EFE7) with Primary accents
      ========================================================= */}
      <section className="border-y border-mint bg-cream">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-sm">
          <span className="font-semibold text-primary-dark flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by:
          </span>
          {caseStudies.map((caseStudy) => (
            <span
              key={caseStudy.slug}
              className={`${styles.trustName} font-medium text-gray-600 hover:text-primary transition-colors duration-300`}
            >
              {caseStudy.client}
            </span>
          ))}
        </Container>
      </section>

      {/* =========================================================
          WHO WE SERVE - Mint Light (#C8DFDB) background
      ========================================================= */}
      <section className="section-y bg-mint-light">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for organisations doing real work"
            description="Whether you're a growing business, a refugee-led organisation, or a development partner running a multi-organisation programme, we build for how your team actually operates."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <article
                key={audience.title}
                className={`rounded-xl border border-mint bg-cream p-6 ${shared.cardHover} ${shared.fadeInUp}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3">
                  <span className="text-primary text-xl">✦</span>
                </div>
                <h3 className="text-sm font-semibold text-primary-dark">
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
          SERVICES - Cream (#F2EFE7) background
      ========================================================= */}
      <section className="section-y bg-cream">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="An integrated digital toolkit"
            description="From a lean single-page site to a full multi-organisation rollout, our services work together — or stand alone."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`group rounded-xl border border-mint bg-white p-6 ${shared.cardHover} ${shared.fadeInUp}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`mb-3.5 h-12 w-12 rounded-xl text-lg bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center transition-transform group-hover:scale-110`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="font-semibold text-primary-dark transition-colors group-hover:text-primary">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {service.summary}
                </p>

                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn more →
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/services" variant="ghost" className="text-primary hover:text-primary-dark border-primary/30">
              View all services →
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SELECTED ENGAGEMENTS - Mint (#C8DFDB) background
      ========================================================= */}
      <section className="section-y bg-mint">
        <Container>
          <SectionHeading
            eyebrow="Selected Engagements"
            title="Real organisations, real outcomes"
            description="A sample of the work we've delivered across Kenya's business, refugee-led, and community-organisation ecosystem."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCaseStudies.map((caseStudy, index) => (
              <article
                key={caseStudy.slug}
                className={`group flex flex-col overflow-hidden rounded-xl border border-mint-dark bg-cream ${shared.cardHover} ${shared.fadeInUp}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary-dark">
                    {caseStudy.category}
                  </p>
                  <h3 className="mt-2 font-semibold text-primary-dark">
                    {caseStudy.client}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                    {caseStudy.summary}
                  </p>
                  <p className="mt-4 text-xs font-medium text-gray-muted">
                    {caseStudy.status} · {caseStudy.year}
                  </p>
                  <div className="mt-5">
                    <Button
                      href={`/portfolio/${caseStudy.slug}`}
                      variant="ghost"
                      className="text-primary hover:text-primary-dark"
                    >
                      Read case study →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/portfolio" variant="ghost" className="text-primary hover:text-primary-dark border-primary/30">
              View full portfolio →
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHY WORK WITH US - Primary Dark (#1a4a7a) background
      ========================================================= */}
      <section className="section-y bg-primary-dark text-white">
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
                    ? `rounded-xl p-6 ${styles.whyFeatured} ${styles.whyGridFirstChild} transform transition-all duration-500 hover:scale-[1.02] ${shared.fadeInUp}`
                    : `rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${shared.fadeInUp}`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  {index === 0 && (
                    <span className="text-3xl">🌟</span>
                  )}
                  <div>
                    <h3 className={index === 0 ? "text-xl font-bold text-white" : "font-semibold text-white"}>
                      {reason.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        index === 0 ? "text-white/90" : "text-white/70"
                      }`}
                    >
                      {reason.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          FINAL CTA - Cream (#F2EFE7) with Primary gradient accent
      ========================================================= */}
      <section className="section-y relative overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <Container className="relative mx-auto max-w-2xl text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-mint">
            <span className="text-4xl mb-4 block">🚀</span>
            <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
              Let&apos;s build a digital presence that works as hard as your mission.
            </h2>
            <p className="mt-4 text-gray">
              Tell us about your organisation and we&apos;ll put together a clear scope and quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in touch ✨
              </Button>
              <Button
                href="/pricing"
                variant="ghost"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                See pricing →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}