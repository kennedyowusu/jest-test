// import calc from './calc';
import Calcualor from './Calcualor';

const calc = new Calcualor();

describe('add', () => {
  test('should add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
});
