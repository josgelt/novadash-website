import React from "react";
import { Link } from "wouter";

// Design B mark: outlined tile with two bars (a stylised order count). Colours follow
// the theme: lime on dark, ink frame with olive bars on light.
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true">
      <rect x="1" y="1" width="24" height="24" rx="5" fill="none" stroke="var(--nd-emerald-700)" strokeWidth="2" />
      <rect x="7" y="7" width="5" height="12" fill="var(--color-primary)" />
      <rect x="14" y="11" width="5" height="8" fill="var(--color-primary)" />
    </svg>
  );
}

export function Logo({
  size = "md",
  href = "/",
  style,
}: {
  size?: "sm" | "md";
  variant?: "light" | "dark";
  href?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Link
      href={href}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", ...style }}
      aria-label="NovaDash"
    >
      <LogoMark size={size === "sm" ? 22 : 26} />
      <span style={{ fontWeight: 700, fontSize: size === "sm" ? 16 : 18, letterSpacing: "-0.01em", color: "var(--color-text)" }}>
        NovaDash
      </span>
    </Link>
  );
}
