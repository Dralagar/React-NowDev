"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds — pass index * 0.08 in a .map() for a cascade. */
  delay?: number;
  /** HTML tag to render — defaults to div, use "span" for inline text. */
  as?: "div" | "span" | "li";
}

/**
 * Fades + slides content up as it scrolls into view, once. Respects
 * prefers-reduced-motion (skips the motion entirely rather than just
 * speeding it up, since framer-motion's JS-driven animation isn't
 * covered by the CSS reduced-motion override in globals.css).
 *
 * Usage:
 *   <Reveal><h2>Heading</h2></Reveal>
 *   {items.map((item, i) => <Reveal key={item.id} delay={i * 0.08}>...</Reveal>)}
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
