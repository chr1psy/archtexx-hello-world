const { getGreeting, main } = require('../../../src/index');

describe('UT-greeting-001', () => {
  it('getGreeting returns exactly "Hello, World!"', () => {
    expect(getGreeting()).toBe('Hello, World!');
  });

  it('main prints "Hello, World!" to stdout via console.log', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    main();
    expect(spy).toHaveBeenCalledWith('Hello, World!');
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
