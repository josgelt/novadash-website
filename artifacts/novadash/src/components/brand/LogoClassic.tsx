import React from "react";
import { Link } from "wouter";

// NovaDash logo — "Nova [barcode] Dash", Space Grotesk Medium; the barcode replaces the dash.
const BARS: Array<[number, number]> = [
  [0, 3],
  [5, 1.5],
  [9.5, 4],
  [16, 1.5],
  [20.5, 2.5],
  [26, 4.5],
  [33, 1.5],
  [37.5, 3],
  [43.5, 1.5],
];

export function Barcode({
  height = 18,
  color = "var(--color-primary)",
  style,
}: {
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  const s = height / 22;
  return (
    <svg
      width={45 * s}
      height={height}
      viewBox="0 0 45 22"
      style={{ alignSelf: "center", ...style }}
      aria-hidden="true"
    >
      <g fill={color}>
        {BARS.map(([x, w], i) => (
          <rect key={i} x={x} width={w} height="22" />
        ))}
      </g>
    </svg>
  );
}

export function LogoIcon({ size = 36, radius, style }: { size?: number; radius?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" style={style} aria-label="NovaDash">
      <rect width="56" height="56" rx={radius ?? (size >= 48 ? 14 : size >= 28 ? 12 : 6)} fill="var(--nd-emerald-700, #0F766E)" />
      <g fill="#fff">
        <rect x="11" y="16" width="3" height="24" />
        <rect x="17" y="16" width="1.5" height="24" />
        <rect x="21.5" y="16" width="4" height="24" />
        <rect x="28.5" y="16" width="1.5" height="24" />
        <rect x="33" y="16" width="2.5" height="24" />
        <rect x="38.5" y="16" width="4.5" height="24" />
        <rect x="45.5" y="16" width="1.5" height="24" />
      </g>
    </svg>
  );
}

export function Logo({
  size = "md",
  variant = "light",
  href = "/",
  style,
}: {
  size?: "sm" | "md";
  variant?: "light" | "dark";
  href?: string;
  style?: React.CSSProperties;
}) {
  const word = size === "sm" ? 20 : 24;
  const text = variant === "dark" ? "#fff" : "var(--color-text)";
  const bars = variant === "dark" ? "#7BC5A8" : "var(--color-primary)";
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: Math.round(word * 0.28),
        textDecoration: "none",
        ...style,
      }}
      aria-label="NovaDash"
    >
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: word, color: text }}>Nova</span>
      <Barcode height={Math.round(word * 0.64)} color={bars} />
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: word, color: text }}>Dash</span>
    </Link>
  );
}
