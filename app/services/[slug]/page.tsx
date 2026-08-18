import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "../../components/Container/page";
import Button from "../../components/Button/Button";
import { services, cta } from "../../lib/content";
import styles from "../../styles/Services.module.css";
import shared from "../../styles/shared.module.css";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== slug);

  return (
    <main>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy text-white ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-light hover:underline"
          >
            ← All services
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <div className={styles.iconBadge} aria-hidden="true">
              {service.icon}
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              {service.title}
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {service.summary}
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Start a project
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================
          DETAIL
      ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-navy">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-gray">
                {service.description}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-light p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
                What&apos;s included
              </h3>

              <ul className="mt-5 flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray"
                  >
                    <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs font-bold ${styles.checkBullet}`}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          OTHER SERVICES
      ========================================================= */}
      <section className="section-y bg-light">
        <Container>
          <h2 className="text-2xl font-bold text-navy">Other services</h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <article
                key={item.slug}
                className={`rounded-lg border border-border bg-white p-6 ${styles.serviceCard}`}
              >
                <div className={styles.serviceCardHead}>
                  <div className={styles.iconBadge} aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {item.summary}
                </p>
                <div className="mt-4">
                  <Button href={item.href} variant="ghost">
                    Learn more →
                  </Button>
                </div>
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
            <Button href={cta.secondary.href} variant="ghost">
              {cta.secondary.label}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
