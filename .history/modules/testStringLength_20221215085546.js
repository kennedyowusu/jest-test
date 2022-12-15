import stringLength from './stringLength';

test('stringLength returns the length of the string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('stringLength returns the length of the string', () => {
  expect(stringLength('hello')).not.toBe(4);
});

test('stringLength returns the length of the string', () => {
  expect(stringLength('hello')).toBeGreaterThan(4);
});

test('stringLength returns the length of the string', () => {
  expect(stringLength('hello')).toBeLessThan(6);
});