// Design B: dark by default; a remembered choice wins. The previous ("classic")
// design stays selectable — html[data-design="classic"] switches tokens, and
// Layout/Home render the classic components.
import { useEffect, useState } from "react";

export type Theme = "dark" | "light";
export type Design = "b" | "classic";

const EVENT = "nd-design-change";

export function getTheme(): Theme {
  try { return localStorage.getItem("nd-theme") === "light" ? "light" : "dark"; } catch { return "dark"; }
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("nd-theme", theme); } catch { /* private mode */ }
}

export function getDesign(): Design {
  try { return localStorage.getItem("nd-design") === "classic" ? "classic" : "b"; } catch { return "b"; }
}

export function setDesign(design: Design) {
  document.documentElement.dataset.design = design;
  try { localStorage.setItem("nd-design", design); } catch { /* private mode */ }
  window.dispatchEvent(new Event(EVENT));
}

export function useDesign(): Design {
  const [design, setState] = useState<Design>(() => getDesign());
  useEffect(() => {
    const onChange = () => setState(getDesign());
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);
  return design;
}

document.documentElement.dataset.theme = getTheme();
document.documentElement.dataset.design = getDesign();
