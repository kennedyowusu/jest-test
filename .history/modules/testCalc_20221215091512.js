import calc from './calc';
import Calcualor from './Calcualor';

describe('add', () => {
  test('should add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
});
