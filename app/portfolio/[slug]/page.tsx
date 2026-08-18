import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "../../components/Container/page";
import Button from "../../components/Button/Button";
import { caseStudies, cta } from "../../lib/content";
import styles from "../../styles/Portfolio.module.css";
import shared from "../../styles/shared.module.css";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case study not found" };
  }

  return {
    title: caseStudy.client,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const otherCaseStudies = caseStudies.filter((item) => item.slug !== slug);

  return (
    <main>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy text-white ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-blue-light hover:underline"
          >
            ← All portfolio
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-blue-light">
            {caseStudy.category} · {caseStudy.status} · {caseStudy.year}
          </p>

          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            {caseStudy.client}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {caseStudy.summary}
          </p>
        </Container>
      </section>

      {/* =========================================================
          DETAIL
      ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                About this engagement
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray">
                {caseStudy.summary}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-light p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
                Services delivered
              </h3>

              <ul className="mt-5 flex flex-col gap-3">
                {caseStudy.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm text-gray"
                  >
                    <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs font-bold bg-blue/10 text-blue`}>
                      ✓
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          OTHER CASE STUDIES
      ========================================================= */}
      {otherCaseStudies.length > 0 && (
        <section className="section-y bg-light">
          <Container>
            <h2 className="text-2xl font-bold text-navy">More engagements</h2>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {otherCaseStudies.map((item) => (
                <article
                  key={item.slug}
                  className={`rounded-lg border border-border bg-white p-6 ${styles.card}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-semibold text-navy">
                    {item.client}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">
                    {item.summary}
                  </p>
                  <div className="mt-4">
                    <Button href={item.href} variant="ghost">
                      Read case study →
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

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
