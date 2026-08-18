import type { Metadata } from "next";
import Container from "../components/Container/page";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { podcast, podcastEpisodes, cta } from "../lib/content";
import styles from "../styles/Podcast.module.css";
import shared from "../styles/shared.module.css";
import Reveal from "../components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Podcast",
  description: podcast.description,
};

const platformStyles: Record<string, string> = {
  Spotify: styles.spotify,
  "Apple Podcasts": styles.apple,
  YouTube: styles.youtube,
  "Google Podcasts": styles.google,
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PodcastPage() {
  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className={`relative overflow-hidden bg-navy text-white ${styles.hero} ${shared.heroBlobs}`}>
        <Container className={`relative section-y ${shared.fadeInUp}`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light">
                Podcast
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {podcast.name}
              </h1>

              <p className="mt-4 text-lg font-medium text-blue-light">
                {podcast.tagline}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
                {podcast.description}
              </p>
            </div>

            <div className={styles.wave} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* Platform links */}
          <div className="mt-10 flex flex-wrap gap-3">
            {podcast.platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ${styles.platformButton} ${platformStyles[platform.label] ?? ""}`}
              >
                {platform.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          EPISODES
      ========================================================= */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Latest episodes"
            title="Listen to the show"
            description="Short, practical conversations on websites, SEO, and digital strategy for organisations across East Africa."
          />

          <div className="flex flex-col gap-5">
            {podcastEpisodes.map((episode, index) => (
              <Reveal key={episode.slug} delay={(index % 4) * 0.08}>
                <article
                  className={`flex flex-col gap-4 rounded-lg border border-border bg-white p-6 sm:flex-row sm:items-center ${styles.episodeCard}`}
                >
                  <div className={`text-3xl font-bold ${styles.episodeNumber}`}>
                    {String(episode.number).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-navy">{episode.title}</h3>
                    <p className="mt-1 text-sm text-gray">
                      {episode.guest} · {episode.duration} ·{" "}
                      {formatDate(episode.date)}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray">
                      {episode.summary}
                    </p>
                  </div>

                  <div className="sm:flex-none">
                    <Button href={episode.href} variant="ghost">
                      Listen →
                    </Button>
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
