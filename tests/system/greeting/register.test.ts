import { spawn } from 'child_process';

it('ST-greeting-001: spawns node src/index.js and outputs exactly Hello, World! followed by a newline', () => {
  const child = spawn('node', ['../../../src/index.js']);
  let output = '';
  child.stdout.on('data', (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    console.error(chunk.toString()); // Log any stderr to help diagnose issues
  });
  return new Promise((resolve, reject) => {
    child.once('close', (code) => {
      expect(output).toEqual('Hello, World!\n');
      expect(code).toBe(0);
      resolve();
    });
  });
});