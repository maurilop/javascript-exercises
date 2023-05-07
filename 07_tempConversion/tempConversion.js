const convertToCelsius = function (temp) {
  // Formula: x °F ≘ (x − 32) × 5/9 °C
  const tempInCelcius = (temp - 32) * (5 / 9);
  return Number(tempInCelcius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  // Formula: 	x °C ≘ (x × 9/5 + 32) °F
  const tempInFahrenheit = temp * (9 / 5) + 32;
  return Number(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
