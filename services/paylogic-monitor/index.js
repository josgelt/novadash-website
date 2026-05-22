import "dotenv/config";
import cron from "node-cron";
import { checkAvailability, closeBrowser } from "./checker.js";
import { sendMessage } from "./telegram.js";
import { readState, writeState } from "./state.js";

const TARGET_URL = process.env.TARGET_URL;
const CHECK_INTERVAL_CRON = process.env.CHECK_INTERVAL_CRON || "* * * * *";
const NOTIFY_ON_SOLD_OUT =
  String(process.env.NOTIFY_ON_SOLD_OUT || "false").toLowerCase() === "true";
const HEARTBEAT_CRON = process.env.HEARTBEAT_CRON || "";
const ERROR_ALERT_THRESHOLD = 5;

if (!TARGET_URL) {
  console.error("TARGET_URL is required (set it in .env).");
  process.exit(1);
}
if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
  console.error(
    "TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required (set them in .env).",
  );
  process.exit(1);
}
if (!cron.validate(CHECK_INTERVAL_CRON)) {
  console.error(`Invalid CHECK_INTERVAL_CRON: "${CHECK_INTERVAL_CRON}"`);
  process.exit(1);
}
if (HEARTBEAT_CRON && !cron.validate(HEARTBEAT_CRON)) {
  console.error(`Invalid HEARTBEAT_CRON: "${HEARTBEAT_CRON}"`);
  process.exit(1);
}

let running = false;

async function runCheck() {
  if (running) {
    console.log(`[${new Date().toISOString()}] skip: previous check still running`);
    return;
  }
  running = true;

  const state = await readState();
  const isFirstRun = state.lastValue === null && state.lastCheck === null;
  const now = new Date().toISOString();

  try {
    const value = await checkAvailability(TARGET_URL);
    const prev = state.lastValue;
    let change = "unchanged";
    if (prev === null) change = "baseline";
    else if (value !== prev) change = `changed ${prev} -> ${value}`;

    console.log(`[${now}] Verfügbar=${value} (${change})`);

    if (!isFirstRun && prev !== value) {
      if (prev === 0 && value > 0) {
        await sendMessage(
          `🎟️ Tickets verfügbar!\nAnzahl: ${value}\nLink: ${TARGET_URL}\nZeit: ${now}`,
        );
      } else if (NOTIFY_ON_SOLD_OUT && prev > 0 && value === 0) {
        await sendMessage(
          `❌ Wieder ausverkauft\nLink: ${TARGET_URL}`,
        );
      }
    }

    await writeState({
      lastValue: value,
      lastCheck: now,
      consecutiveErrors: 0,
    });
  } catch (err) {
    const nextErrors = (state.consecutiveErrors || 0) + 1;
    const message = err?.message || String(err);
    console.error(
      `[${now}] check failed (consecutiveErrors=${nextErrors}): ${message}`,
    );

    let resetErrors = nextErrors;
    if (nextErrors >= ERROR_ALERT_THRESHOLD) {
      try {
        await sendMessage(
          `⚠️ Monitor-Fehler seit ${nextErrors} Checks\nLetzter Fehler: ${message.slice(0, 500)}`,
        );
      } catch (sendErr) {
        console.error(
          `[${now}] failed to send error alert: ${sendErr?.message || sendErr}`,
        );
      }
      resetErrors = 0;
    }

    await writeState({
      lastValue: state.lastValue,
      lastCheck: now,
      consecutiveErrors: resetErrors,
    });
  } finally {
    running = false;
  }
}

let shuttingDown = false;
async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`Received ${signal}, shutting down...`);
  try {
    await closeBrowser();
  } finally {
    process.exit(0);
  }
}
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

async function sendHeartbeat() {
  const state = await readState();
  const now = new Date().toISOString();
  const lastValue = state.lastValue === null ? "n/a" : state.lastValue;
  const lastCheck = state.lastCheck || "n/a";
  const errors = state.consecutiveErrors || 0;
  const text =
    `💓 Monitor alive\n` +
    `lastValue: ${lastValue}\n` +
    `lastCheck: ${lastCheck}\n` +
    `consecutiveErrors: ${errors}\n` +
    `now: ${now}`;
  try {
    await sendMessage(text);
    console.log(`[${now}] heartbeat sent (lastValue=${lastValue}, errors=${errors})`);
  } catch (err) {
    console.error(
      `[${now}] failed to send heartbeat: ${err?.message || err}`,
    );
  }
}

console.log(
  `paylogic-monitor starting. URL=${TARGET_URL} cron="${CHECK_INTERVAL_CRON}" notifySoldOut=${NOTIFY_ON_SOLD_OUT} heartbeatCron="${HEARTBEAT_CRON || "disabled"}"`,
);

await runCheck();
cron.schedule(CHECK_INTERVAL_CRON, () => {
  runCheck().catch((err) =>
    console.error("unexpected runCheck error:", err?.message || err),
  );
});

if (HEARTBEAT_CRON) {
  cron.schedule(HEARTBEAT_CRON, () => {
    sendHeartbeat().catch((err) =>
      console.error("unexpected sendHeartbeat error:", err?.message || err),
    );
  });
}
