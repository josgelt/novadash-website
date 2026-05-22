import "dotenv/config";
import { checkAvailability, closeBrowser } from "./checker.js";

const url =
  process.env.TARGET_URL ||
  "https://resale.paylogic.com/9710ed9ee7304fa29ece85758d0b61da/";

console.log(`Smoke check against: ${url}`);
try {
  const value = await checkAvailability(url);
  console.log(`Parsed "Verfügbar" = ${value}`);
} catch (err) {
  console.error("Smoke check failed:");
  console.error(err?.message || err);
  process.exitCode = 1;
} finally {
  await closeBrowser();
}
