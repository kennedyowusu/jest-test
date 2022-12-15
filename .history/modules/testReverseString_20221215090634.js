import reverseString from './reverseString';

// eslint-disable-next-line no-console
console.log(reverseString('Kennedy'));

test('the reverse of Kennedy is ydenneK ', () => {
  expect(reverseString('Kennedy')).toBe('ydenneK');
});
