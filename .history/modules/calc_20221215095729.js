/* eslint-disable class-methods-use-this */
class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }
}

export default Calculator;
module.exports = Calculator;