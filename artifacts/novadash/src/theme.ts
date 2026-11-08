// Design B: dark by default; a remembered choice wins. Exposes setTheme for the toggle.
export type Theme = "dark" | "light";

export function getTheme(): Theme {
  try { return localStorage.getItem("nd-theme") === "light" ? "light" : "dark"; } catch { return "dark"; }
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("nd-theme", theme); } catch { /* private mode */ }
}

document.documentElement.dataset.theme = getTheme();
