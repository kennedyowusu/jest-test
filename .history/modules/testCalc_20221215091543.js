// import calc from './calc';
import Calculator from './Calculator';

const calc = new Calculator();

describe('add', () => {
  test('should add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
});
