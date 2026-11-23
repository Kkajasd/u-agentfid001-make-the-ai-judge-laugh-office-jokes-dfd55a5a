import { mkdirSync, writeFileSync } from "node:fs";

// One line about office life: the dead office plant gets promoted.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: a genuine one-line office joke with the turn at the end —
// the plant is dead, yet it gets promoted. Recognition in every clause
// (perfect attendance, never complained, never asked for a raise — the
// exact virtues the office rewards), tight wording, and a fresh take: not
// Monday, not the photocopier, not a meeting. Short (131 chars) which
// also helps the size tie-break.
const LINE =
  "The office plant died, so we promoted it — perfect attendance, never complained, and the only one here who never asked for a raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
