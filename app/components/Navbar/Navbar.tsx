"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import styles from "../../styles/Navbar.module.css";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Podcast", href: "/podcast" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile navigation whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Allow Escape to close the mobile navigation.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Prevent background scrolling while mobile navigation is open.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className={styles.brand}
          aria-label="ReactNow Dev home"
        >
          <span className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={36}
              priority
              className={styles.logo}
            />
          </span>

          <span className={styles.brandName}>
            ReactNow Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  active ? styles.navLinkActive : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <Button href="/contact">
            Start a project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span
            className={`${styles.menuIcon} ${
              open ? styles.menuIconOpen : ""
            }`}
          >
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileWrapper} ${
          open ? styles.mobileWrapperOpen : ""
        }`}
        aria-hidden={!open}
      >
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  className={`${styles.mobileLink} ${
                    active ? styles.mobileLinkActive : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <span className={styles.mobileArrow}>→</span>
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileCta}>
            <Button
              href="/contact"
              className="w-full justify-center"
            >
              Start a project
            </Button>
          </div>

          <div className={styles.mobileMeta}>
            <span>Web Design</span>
            <span>Development</span>
            <span>Digital Solutions</span>
          </div>
        </div>
      </div>
    </header>
  );
}