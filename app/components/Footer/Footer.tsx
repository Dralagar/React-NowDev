import Link from "next/link";
import Image from "next/image";
import { site, footer, socialLinks } from "../../lib/content";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.brand}
              aria-label={`${site.name} home`}
            >
              <span className={styles.logoWrapper}>
                <Image
                  src="/logo.png"
                  alt=""
                  width={40}
                  height={36}
                  className={styles.logo}
                />
              </span>

              <span>{site.name}</span>
            </Link>

            <p className={styles.description}>
              {footer.description}
            </p>

            <div className={styles.socials}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={`Visit ${link.label}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          <div className={styles.columns}>
            {footer.columns.map((column) => (
              <div
                key={column.title}
                className={styles.column}
              >
                <h2 className={styles.columnTitle}>
                  {column.title}
                </h2>

                <ul className={styles.links}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={styles.footerLink}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>

          <div className={styles.contact}>
            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>

            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}