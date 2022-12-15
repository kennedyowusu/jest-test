// eslint-disable-next-line import/no-unresolved
import Calculator from './Calculator';

const calc = new Calculator();

describe('add', () => {
  test('should add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test('should add two negative numbers', () => {
    expect(calc.add(-1, -2)).toBe(-3);
  });

  test('should add two floating point numbers', () => {
    expect(calc.add(0.1, 0.2)).toBe(0.3);
  });

  test('should add two numbers and return a string', () => {
    expect(calc.add(1, 2)).toBe('3');
  });
});

describe('subtract', () => {
  test('should subtract two numbers', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  test('should subtract two negative numbers', () => {
    expect(calc.subtract(-1, -2)).toBe(1);
  });

  test('should subtract two floating point numbers', () => {
    expect(calc.subtract(0.1, 0.2)).toBe(-0.1);
  });

  test('should subtract two numbers and return a string', () => {
    expect(calc.subtract(1, 2)).toBe('-1');
  });
});

describe('multiply', () => {
  test('should multiply two numbers', () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });

  test('should multiply two negative numbers', () => {
    expect(calc.multiply(-1, -2)).toBe(2);
  });

  test('should multiply two floating point numbers', () => {
    expect(calc.multiply(0.1, 0.2)).toBe(0.02);
  });

  test('should multiply two numbers and return a string', () => {
    expect(calc.multiply(1, 2)).toBe('2');
  });
});

describe('divide', () => {
  test('should divide two numbers', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });

  test('should divide two negative numbers', () => {
    expect(calc.divide(-1, -2)).toBe(0.5);
  });

  test('should divide two floating point numbers', () => {
    expect(calc.divide(0.1, 0.2)).toBe(0.5);
  });

  test('should divide two numbers and return a string', () => {
    expect(calc.divide(1, 2)).toBe('0.5');
  });
});
