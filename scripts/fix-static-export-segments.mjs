import { readdir, rename, rmdir, stat } from "node:fs/promises";
import { join } from "node:path";

// Next 16 builds segment-prefetch filenames by replacing "/" with "." in the
// segment path. On Windows the path uses "\", which survives the replace and is
// then treated as a directory separator, so the export writes
// `__next.<seg>/rest.txt` while the browser requests `__next.<seg>.rest.txt`.
// Flatten those directories back into the filenames the client asks for.

const OUT_DIR = "out";
const SEGMENT_DIR_PREFIX = "__next.";

async function collectFiles(dir, prefix, files) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const entryPath = join(dir, entry.name);
    const flatName = prefix ? `${prefix}.${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      await collectFiles(entryPath, flatName, files);
    } else {
      files.push({ path: entryPath, flatName });
    }
  }
}

async function flattenSegmentDir(routeDir, segmentDirName) {
  const segmentDir = join(routeDir, segmentDirName);
  const files = [];
  await collectFiles(segmentDir, "", files);

  for (const file of files) {
    await rename(file.path, join(routeDir, `${segmentDirName}.${file.flatName}`));
  }
  return files.length;
}

async function removeEmptyDirs(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) await removeEmptyDirs(join(dir, entry.name));
  }
  const remaining = await readdir(dir);
  if (remaining.length === 0) await rmdir(dir);
}

async function walk(dir, stats) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const entryPath = join(dir, entry.name);

    if (entry.name.startsWith(SEGMENT_DIR_PREFIX)) {
      stats.moved += await flattenSegmentDir(dir, entry.name);
      await removeEmptyDirs(entryPath);
      stats.dirs += 1;
    } else {
      await walk(entryPath, stats);
    }
  }
}

try {
  await stat(OUT_DIR);
} catch {
  console.log(`No ${OUT_DIR}/ directory — skipping segment fixup.`);
  process.exit(0);
}

const stats = { moved: 0, dirs: 0 };
await walk(OUT_DIR, stats);

console.log(
  stats.moved === 0
    ? "Segment prefetch files already flat — nothing to fix."
    : `Flattened ${stats.moved} segment prefetch file(s) across ${stats.dirs} director(ies).`,
);
