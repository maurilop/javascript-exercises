const removeFromArray = function () {
  let newArray = [];

  for (let i = 0; i < arguments[0].length; i++) {
    let argsToCheck = 0;
    for (let j = 1; j < arguments.length; j++) {
      if (arguments[0][i] === arguments[j]) {
        continue;
      } else {
        argsToCheck++;
      }
    }
    if (argsToCheck === arguments.length - 1) {
      newArray.push(arguments[0][i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
