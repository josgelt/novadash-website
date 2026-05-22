import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATE_PATH = join(__dirname, "state.json");

const DEFAULT_STATE = {
  lastValue: null,
  lastCheck: null,
  consecutiveErrors: 0,
};

export async function readState() {
  try {
    const raw = await readFile(STATE_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch (err) {
    if (err.code === "ENOENT") {
      return { ...DEFAULT_STATE };
    }
    throw err;
  }
}

export async function writeState(state) {
  const merged = { ...DEFAULT_STATE, ...state };
  await writeFile(STATE_PATH, JSON.stringify(merged, null, 2) + "\n", "utf8");
}
