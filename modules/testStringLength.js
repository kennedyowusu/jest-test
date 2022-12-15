import stringLength from './stringLength';

test('stringLength returns the length of the string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('stringLength returns the length of the string <= 10', () => {
  expect(stringLength('industrialization')).toBe(16, 'The string is too long');
});

test('stringLength returns the length of the string >= 1', () => {
  expect(stringLength('hello')).toBeGreaterThan(0, 'The string is too short');
});