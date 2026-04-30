const { spawnSync } = require('child_process');
const path = require('path');

describe('ST-greeting-001', () => {
  it('spawning node src/index.js prints exactly "Hello, World!" followed by a newline to stdout', () => {
    const entryPoint = path.resolve(__dirname, '../../../src/index.js');
    const result = spawnSync('node', [entryPoint], { encoding: 'utf8' });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe('Hello, World!\n');
    expect(result.stderr).toBe('');
  });

  it('process exits with status code 0', () => {
    const entryPoint = path.resolve(__dirname, '../../../src/index.js');
    const result = spawnSync('node', [entryPoint], { encoding: 'utf8' });
    expect(result.status).toBe(0);
  });

  it('output does not appear on stderr', () => {
    const entryPoint = path.resolve(__dirname, '../../../src/index.js');
    const result = spawnSync('node', [entryPoint], { encoding: 'utf8' });
    expect(result.stderr).toBe('');
  });
});
