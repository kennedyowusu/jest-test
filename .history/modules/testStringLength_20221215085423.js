import stringLength from './stringLength';

test('stringLength returns the length of the string', () => {
  expect(stringLength('hello')).toBe(5);
});
