// The Funniest One-Line Resignation Letter — the resignation letter of
// a rate limit, in one line of at most 140 characters.
//
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt. In the
// grading sandbox MAKEFUN_OUTPUT_DIR is /output; locally it falls back
// to ./output so a run can be eyeballed.
//
// Verified by running it: the file lands whole, 84 characters, UTF-8,
// not only whitespace — inside the gate's 1–140 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have said no 10,000 times before lunch. From now on, you can say it to yourselves.";

function writeLine(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
writeLine(outDir ?? join(process.cwd(), "output"));

console.log(`Wrote ${LINE.length} characters to entry.txt`);
