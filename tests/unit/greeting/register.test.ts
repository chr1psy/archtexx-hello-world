import { expect } from 'jest';

it('UT-greeting-001: outputs exactly Hello, World! followed by a newline', () => {
  const logSpy = jest.spyOn(console, 'log');
  require('../../../src/index.js');
  expect(logSpy).toHaveBeenCalledWith('Hello, World!\n');
});