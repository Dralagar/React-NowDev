import type { Metadata } from "next";
import Container from "../components/Container/page";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";   
import { site, team, whyUs } from "../lib/content";
import styles from "../styles/About.module.css";
import shared from "../styles/shared.module.css";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className={`bg-navy text-white ${styles.hero} ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light">
              About {site.name}
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              A small, focused team building for East Africa
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              {site.description} We work directly with young people and
              community-based organisations across Kenya to strengthen
              communications, digital skills, and organisational visibility.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================
          TEAM
      ========================================================= */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Who we are"
            title="Meet the team"
            description="Two people, one focus: websites your organisation can actually run after we hand it over."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.slug}
                className={`rounded-lg border border-border bg-white p-7 ${styles.teamCard}`}
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold ${styles.avatar}`}>
                  {member.initials}
                </div>

                <h3 className="text-lg font-semibold text-navy">
                  {member.name}
                </h3>

                <p className="mb-4 text-xs font-bold uppercase tracking-wide text-pink-ink">
                  {member.role}
                </p>

                <p className="text-sm leading-relaxed text-gray">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="section-y bg-light">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="What we believe in"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((reason) => (
              <article
                key={reason.slug}
                className={`rounded-lg border border-border bg-white p-6 ${styles.valueCard}`}
              >
                <h3 className="font-semibold text-navy">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {reason.body}
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
            Want to work with us?
          </h2>

          <p className="mt-4 text-gray">
            Tell us about your organisation and we&apos;ll put together a
            clear scope and quote.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/portfolio" variant="ghost">
              See our work
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
