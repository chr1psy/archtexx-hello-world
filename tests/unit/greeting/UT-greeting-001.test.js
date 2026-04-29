const greeting = require('../../../src/index');
require('jest');

describe('Greeting', () => {
  it('prints the default message', () => {
    const output = greeting();
    expect(output).toEqual('Hello, World!
');
  });
});