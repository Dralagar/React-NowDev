import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md",

  secondary:
    "bg-white text-navy shadow-sm hover:-translate-y-0.5 hover:shadow-md",

  ghost:
    "border border-border bg-transparent text-navy hover:bg-light",

  outline:
    "border border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}