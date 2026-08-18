import type { Metadata } from "next";
import Container from "../components/Container/page";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Button from "../components/Button/Button";
import { faqs, cta } from "../lib/content";
import styles from "../styles/Faq.module.css";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about timelines, ownership, training, platforms, and payment.",
};

export default function FaqPage() {
  return (
    <main>
      <section className="section-y">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions"
            align="center"
          />

          <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className={`group px-6 py-5 ${styles.item}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy">
                  {faq.question}
                  <span className={`text-blue group-open:rotate-45 ${styles.chevron}`}>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray">{cta.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={cta.primary.href}>{cta.primary.label}</Button>
              <Button href={cta.secondary.href} variant="ghost">
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
