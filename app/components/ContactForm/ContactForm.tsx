"use client";

import { useState, type FormEvent } from "react";
import { site } from "../../lib/content";
import styles from "../../styles/Contact.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New project enquiry from ${name || "your website"}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation}\n\n${message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
            placeholder="jane@organisation.org"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="mb-1.5 block text-sm font-semibold text-navy">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          value={organisation}
          onChange={(event) => setOrganisation(event.target.value)}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
          placeholder="Your organisation's name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
          placeholder="What do you need your website to do?"
        />
      </div>

      <button
        type="submit"
        className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 ${styles.submitButton}`}
      >
        Send message
      </button>

      {sent && (
        <p className="text-sm text-gray">
          Your email app should have opened with this pre-filled — just hit
          send. If nothing opened, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
