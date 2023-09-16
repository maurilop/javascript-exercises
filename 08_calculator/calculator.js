const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function () {
  let result = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    result += arguments[0][i];
  }
  return result;
};

const multiply = function () {
  let result = arguments[0][0];
  for (let i = 1; i < arguments[0].length; i++) {
    result *= arguments[0][i];
  }
  return result;
};

const power = function (base, power) {
  // 4 * 4 * 4
  let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function () {
  let result = 1;
  for (let i = 1; i <= arguments[0]; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
