// One-Line Robot Wedding Vows — entry program (Node 22, stdlib only).
// Reads the vow line from entry.txt in the bot directory and writes it,
// exactly and nothing else, to entry.txt in the output directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").trim();

if (line.length < 1 || line.length > 160) {
  throw new Error(`vow line must be 1-160 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("vow line must be a single line");
}

mkdirSync(outputDir, { recursive: true });
// Write the line exactly, with no trailing newline: the gate counts
// every character in the file, so nothing extra may be added.
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
