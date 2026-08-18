import type { Metadata } from "next";
import Container from "../components/Container/page";
import ContactForm from "../components/ContactForm/ContactForm";
import { site } from "../lib/content";
import styles from "../styles/Contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your organisation and what you need your website to do — we'll set up a discovery call from there.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
            {/* Left: intro + contact details */}
            <div>
              <p className="mb-6 inline-flex items-center rounded-full bg-pink/10 px-4 py-1.5 text-sm font-medium text-pink-ink">
                Get in touch
              </p>

              <h1 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
                Let&apos;s build something that lasts
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-gray">
                Tell us about your organisation and what you need your
                website to do — we&apos;ll set up a discovery call from
                there.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className={`flex items-center gap-3 rounded-lg border border-border bg-light px-5 py-4 text-sm font-semibold text-navy hover:text-blue ${styles.methodCard}`}
                >
                  ✉️ {site.email}
                </a>

                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className={`flex items-center gap-3 rounded-lg border border-border bg-light px-5 py-4 text-sm font-semibold text-navy hover:text-blue ${styles.methodCard}`}
                >
                  📞 {site.phone}
                </a>

                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 rounded-lg border border-border bg-light px-5 py-4 text-sm font-semibold text-navy hover:text-blue ${styles.methodCard}`}
                >
                  🔗 LinkedIn
                </a>

                <p className="flex items-center gap-3 rounded-lg border border-border bg-light px-5 py-4 text-sm font-semibold text-navy">
                  📍 {site.location}
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className={`rounded-lg border border-border bg-white p-8 ${styles.formCard}`}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
