function stringLength(someText) {
  return someText.length >= 1 && someText.length <= 10 ? someText.length : 'The string is not too long';
}

stringLength('hello');

export default stringLength;