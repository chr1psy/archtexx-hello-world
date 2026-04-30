const { execSync } = require('child_process');
const path = require('path');

describe('IT-greeting-001', () => {
  it('running src/index.js produces "Hello, World!\\n" on stdout and exits 0', () => {
    const entryPoint = path.resolve(__dirname, '../../../src/index.js');
    let stdout;
    let exitCode = 0;
    try {
      stdout = execSync(`node "${entryPoint}"`, { encoding: 'utf8' });
    } catch (err) {
      stdout = err.stdout;
      exitCode = err.status;
    }
    expect(exitCode).toBe(0);
    expect(stdout).toBe('Hello, World!\n');
  });
});
