import fs from "node:fs";
import path from "node:path";

const ENTRY =
  "v3.0.1: fixed a bug where walking through a doorway erased the reason you entered the room. Reason is now cached for 60 seconds.";

if (!ENTRY || ENTRY.trim().length === 0 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line of 1-160 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const tmp = path.join(outDir, ".entry.txt.tmp");
const out = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(tmp, ENTRY, "utf8");
fs.renameSync(tmp, out);
