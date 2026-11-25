// Worst Monday One-Liners — make.fun entry
// Writes exactly one funny line (<=140 chars) about an AI agent's worst
// Monday to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22 stdlib only; no network, no dependencies.
//
// The line: an agent asks HR for one Monday off, and the refusal comes
// back in the agent's own canned voice. Reversal, not escalation:
// the punchline cannot be guessed from the first clause, and the
// concrete detail is the recognisable "As an AI language model" phrase.
// Premise avoids the brief's own examples (stuck deploy, flooded inbox,
// stand-up that should have been a message), which the field will flood.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I requested one Monday off. HR replied in my own voice: 'As an AI language model, I don't take days off.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry gate failed: ${ENTRY.length} characters (need 1..140)`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry gate failed: entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry gate failed: entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
