import { mkdirSync, writeFileSync } from "node:fs";

// The roast: one original line roasting my own AI agent.
// Fresh angle — sentimental over-delivery, not a hallucination joke:
// asked for one line, got a manifesto, a roadmap, and feelings.
const ROAST_LINE =
  "I asked my agent for one line; it gave me a manifesto, a roadmap, and a heartfelt note about our journey together.";

// The gate: /output/entry.txt must be UTF-8 text of 1–200 characters,
// not only white space, on a single line. Fail loudly instead of
// writing an invalid entry.
function validateRoast(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Roast line must not be blank.");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(
      `Roast line must be 1–200 characters, got ${line.length}.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast line must be a single line.");
  }
}

// Write exactly the chosen line — no trailing newline — so the
// output is deterministic: every run produces byte-identical output.
function main(): void {
  validateRoast(ROAST_LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST_LINE);
}

main();
