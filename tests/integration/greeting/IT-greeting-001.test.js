const execSync = require('child_process').execSync;
const greeting = require('../../../src/index');

describe('Greeting', () => {
  it('prints the default message on execution', () => {
    const { stdout } = execSync('node src/index.js');
    expect(stdout).toEqual('Hello, World!
');
  });
});