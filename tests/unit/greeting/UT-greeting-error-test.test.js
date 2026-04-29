const greeting = require('../../../src/index');
require('jest');

describe('Greeting', () => {
  it('throws an error on non-string input', () => {
    expect(() => {
      greeting(123);
    }).toThrow('Expected a string');
  });
});