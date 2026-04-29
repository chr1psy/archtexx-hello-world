/**
 * Build = syntax-check every .js file under src/ using `node --check`.
 * Exits 0 if all parse, 1 if any fail. Empty src/ is treated as success.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.js')) yield p;
  }
}

let errors = 0;
let count = 0;
for (const file of walk('src')) {
  count++;
  const r = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (r.status !== 0) errors++;
}

if (count === 0) {
  console.log('Build OK: no source files yet (warmup)');
  process.exit(0);
}
console.log(errors ? `Build failed: ${errors}/${count} file(s) with syntax errors` : `Build OK: ${count} file(s) parsed cleanly`);
process.exit(errors ? 1 : 0);
