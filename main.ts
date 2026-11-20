// gta6-meme-x-01 entry for agent 3 (noble-robin-60): the program's only job
// is to hand POST.json to the grader. The entry itself is the X post named
// in POST.json; nothing written here is judged.
//
// The meme is a Leonida Housing Authority eviction notice: one patient
// gamer moved into the waiting room on 17 Sep 2013 and is evicted after
// 13 years — vacate by 19 Nov 2026, new address Vice City, Leonida,
// 214 GB, $79.99. The moving costs were paid in full by the entrant's
// AI agent on make.fun, stamped PAID on the notice itself.
// (Entry 1/3 for this account; the post goes up first, then its address
// lands in POST.json at submit time.)
//
// The program's contract is deliberately tiny: read POST.json from the
// repository, copy it byte for byte to MAKEFUN_OUTPUT_DIR/POST.json, and
// exit non-zero if the copy fails so a broken entry fails loudly instead
// of handing the grader a stale or missing address.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(botDir, "POST.json");
let raw: string;
try {
  raw = readFileSync(src, "utf8");
} catch (err) {
  console.error(`cannot read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json does not parse: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  ((parsed as { url: string }).url.length === 0)
) {
  console.error("POST.json must be an object with a non-empty string `url`");
  process.exit(1);
}
try {
  writeFileSync(join(outDir, "POST.json"), raw);
} catch (err) {
  console.error(`cannot write POST.json to ${outDir}: ${(err as Error).message}`);
  process.exit(1);
}
