import { chromium } from "playwright";

let sharedBrowser = null;

export async function getBrowser() {
  if (sharedBrowser && sharedBrowser.isConnected()) {
    return sharedBrowser;
  }
  sharedBrowser = await chromium.launch({ headless: true });
  return sharedBrowser;
}

export async function closeBrowser() {
  if (sharedBrowser) {
    try {
      await sharedBrowser.close();
    } catch {
      // ignore
    }
    sharedBrowser = null;
  }
}

/**
 * Open the target URL and parse the "Verfügbar" integer value.
 * Throws on parse / scrape failure.
 */
export async function checkAvailability(url) {
  const browser = await getBrowser();
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    locale: "de-DE",
  });

  try {
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });

    const value = await page.evaluate(() => {
      const LABEL = "verfügbar";

      const parseInteger = (text) => {
        if (text == null) return null;
        const match = String(text).match(/-?\d[\d.,]*/);
        if (!match) return null;
        const cleaned = match[0].replace(/[.,\s]/g, "");
        const n = parseInt(cleaned, 10);
        return Number.isFinite(n) ? n : null;
      };

      const containsLabel = (el) =>
        el && typeof el.textContent === "string" &&
        el.textContent.toLowerCase().includes(LABEL);

      const all = Array.from(document.querySelectorAll("*"));

      // Strategy A: table row with a cell containing "Verfügbar"
      for (const el of all) {
        if (el.tagName !== "TR") continue;
        const cells = Array.from(el.querySelectorAll("td, th"));
        const labelCell = cells.find((c) =>
          (c.textContent || "").toLowerCase().includes(LABEL),
        );
        if (!labelCell) continue;
        for (const c of cells) {
          if (c === labelCell) continue;
          const n = parseInteger(c.textContent);
          if (n !== null) return n;
        }
      }

      // Strategy B: any element with "Verfügbar" → check siblings & parent siblings
      const labelEls = all.filter(
        (el) =>
          containsLabel(el) &&
          !Array.from(el.children).some((c) => containsLabel(c)),
      );

      for (const el of labelEls) {
        // next sibling
        let sib = el.nextElementSibling;
        while (sib) {
          const n = parseInteger(sib.textContent);
          if (n !== null) return n;
          sib = sib.nextElementSibling;
        }
        // previous sibling
        sib = el.previousElementSibling;
        while (sib) {
          const n = parseInteger(sib.textContent);
          if (n !== null) return n;
          sib = sib.previousElementSibling;
        }
        // parent's siblings
        const parent = el.parentElement;
        if (parent) {
          for (const child of Array.from(parent.children)) {
            if (child === el) continue;
            const n = parseInteger(child.textContent);
            if (n !== null) return n;
          }
        }
      }

      // Strategy C: regex on label element text itself, e.g. "Verfügbar: 5"
      for (const el of labelEls) {
        const text = (el.textContent || "").replace(/\s+/g, " ");
        const m = text.match(/verf[üu]gbar[^0-9-]*(-?\d[\d.,]*)/i);
        if (m) {
          const n = parseInteger(m[1]);
          if (n !== null) return n;
        }
      }

      return null;
    });

    if (typeof value !== "number" || !Number.isFinite(value)) {
      // Dump nearby HTML for debugging
      const dump = await page.evaluate(() => {
        const LABEL = "verfügbar";
        const all = Array.from(document.querySelectorAll("*"));
        const hits = all.filter(
          (el) =>
            (el.textContent || "").toLowerCase().includes(LABEL) &&
            !Array.from(el.children).some((c) =>
              (c.textContent || "").toLowerCase().includes(LABEL),
            ),
        );
        return hits
          .slice(0, 3)
          .map((el) => (el.outerHTML || "").slice(0, 1000))
          .join("\n---\n");
      });
      const err = new Error(
        `Could not parse "Verfügbar" value from page. HTML around label:\n${dump || "(no matching element found)"}`,
      );
      throw err;
    }

    return value;
  } finally {
    await context.close().catch(() => {});
  }
}
