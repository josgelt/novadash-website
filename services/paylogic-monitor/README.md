# Paylogic Telegram Monitor

A small Node.js service that polls a Paylogic resale page and sends a Telegram
message when tickets become available (the "Verfügbar" value transitions from
`0` to `>0`).

- Headless Chromium via Playwright (page is JS-rendered)
- `node-cron` for scheduling
- Local JSON state in `state.json`
- Designed to run 24/7 on Ubuntu under PM2

## 1. Telegram bot setup

1. Open Telegram and message [@BotFather](https://t.me/BotFather).
2. Send `/newbot`, follow the prompts, copy the **bot token**.
3. Send any message to your new bot from your own Telegram account (or add it to a group and send a message there).
4. Get your chat ID:

   ```bash
   curl "https://api.telegram.org/bot<TOKEN>/getUpdates"
   ```

   Look for `"chat":{"id": <number>, ...}` in the response. That number is your `TELEGRAM_CHAT_ID`.

## 2. Configure

```bash
cp .env.example .env
```

Edit `.env` and fill in:

| Var | What |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | from BotFather |
| `TELEGRAM_CHAT_ID` | from getUpdates |
| `TARGET_URL` | the Paylogic resale URL to watch |
| `CHECK_INTERVAL_CRON` | cron expression, e.g. `* * * * *` (every minute) |
| `NOTIFY_ON_SOLD_OUT` | `true` to also alert when value drops back to 0 |

## 3. Install (Ubuntu)

Requires Node.js 20+.

```bash
npm ci
npx playwright install --with-deps chromium
```

`--with-deps` installs the system libraries Chromium needs.

## 4. Run under PM2

```bash
npm install -g pm2          # if you don't already have PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup                 # follow the printed command to enable on boot
```

Logs:

```bash
pm2 logs paylogic-monitor
pm2 status
```

Restart after editing `.env`:

```bash
pm2 restart paylogic-monitor
```

## 5. Change the check interval

Edit `CHECK_INTERVAL_CRON` in `.env`, then:

```bash
pm2 restart paylogic-monitor
```

Examples:

| Cron | Meaning |
| --- | --- |
| `* * * * *` | every minute |
| `*/5 * * * *` | every 5 minutes |
| `0 * * * *` | once an hour, on the hour |

## 6. Alert behavior

- **No alert on the first run** — the first observed value is recorded as the baseline.
- **Alert on `0 → >0`** transition (tickets back in stock):

  ```
  🎟️ Tickets verfügbar!
  Anzahl: <n>
  Link: <url>
  Zeit: <iso>
  ```
- **Alert on `>0 → 0`** only if `NOTIFY_ON_SOLD_OUT=true`:

  ```
  ❌ Wieder ausverkauft
  Link: <url>
  ```
- **No alert** if the value is unchanged.
- After 5 consecutive scrape/parse errors, one alert is sent and the counter resets:

  ```
  ⚠️ Monitor-Fehler seit 5 Checks
  Letzter Fehler: <message>
  ```

State is stored in `state.json` and survives restarts.

## 7. One-off smoke test

```bash
npm run smoke
```

Loads `.env` (only `TARGET_URL` is required) and prints the parsed `Verfügbar`
value. Use this after install / when the page layout might have changed. On
failure the script dumps the HTML around the `Verfügbar` label so the selector
in `checker.js` can be adjusted.
