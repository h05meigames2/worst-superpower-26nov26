import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — one line, at most 140 characters.
// A power so pointless that naming it is the whole joke.
const ENTRY =
  "I can speak fluent goldfish, but goldfish only ever want to talk about the bowl.";

if (ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-140 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
