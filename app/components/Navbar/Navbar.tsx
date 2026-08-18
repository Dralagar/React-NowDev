// app/components/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Podcast", href: "/podcast" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "border-b border-mint bg-cream/95 backdrop-blur-md shadow-sm" 
          : "border-b border-mint/50 bg-cream/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container-site flex min-h-[72px] items-center justify-between gap-8 md:min-h-[76px]">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-extrabold text-primary-dark transition-colors hover:text-primary group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
            <Image
              src="/logo.png"
              alt="ReactNow Dev logo"
              width={34}
              height={31}
              className="h-[30px] w-auto transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105"
              priority
            />
          </div>
          <span className="text-[1.05rem] font-extrabold tracking-tight">
            ReactNow Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-flex min-h-[44px] items-center text-[0.9rem] font-semibold transition-colors duration-200 ${
                  isActive 
                    ? "text-primary" 
                    : "text-ink hover:text-primary"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            href="/contact" 
            className="bg-gradient-to-r from-primary to-secondary text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Start a project
          </Button>
        </div>

        {/* Mobile Menu Button - Hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-mint bg-white/80 text-ink transition-all duration-200 hover:border-primary hover:bg-mint-light hover:text-primary lg:hidden focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <div className="relative h-[18px] w-[22px]">
            <span
              className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[72px] z-40 bg-cream/98 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4"
        }`}
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="container-site flex h-full flex-col overflow-y-auto py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-[1.05rem] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                      : "text-ink hover:bg-mint-light/50 hover:text-primary"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-6 space-y-4 border-t border-mint pt-6">
            <Button 
              href="/contact" 
              className="w-full bg-gradient-to-r from-primary to-secondary text-center text-white shadow-md transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Start a project ✨
            </Button>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-mint-light px-3 py-1.5 text-xs font-semibold text-gray">
                📍 Nairobi, Kenya
              </span>
              <span className="rounded-full bg-mint-light px-3 py-1.5 text-xs font-semibold text-gray">
                🌍 East Africa
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-muted">
              <span>© 2026 ReactNow Dev</span>
              <span className="h-3 w-px bg-mint" />
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}