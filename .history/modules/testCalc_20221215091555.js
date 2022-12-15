// eslint-disable-next-line import/no-unresolved
import Calculator from './Calculator';

const calc = new Calculator();

describe('add', () => {
  test('should add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
});
