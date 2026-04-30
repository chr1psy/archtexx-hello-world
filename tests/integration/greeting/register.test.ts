import { execSync } from 'child_process';

it('IT-greeting-001: runs node src/index.js and outputs exactly Hello, World! followed by a newline', () => {
  const output = execSync('node ../../../src/index.js').toString();
  expect(output).toEqual('Hello, World!\n');
});