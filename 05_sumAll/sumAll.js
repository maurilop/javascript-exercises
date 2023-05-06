const sumAll = function (a, b) {
  let sum = 0;
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return "ERROR";
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
