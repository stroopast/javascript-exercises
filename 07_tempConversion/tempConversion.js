const convertToCelsius = function(x) {
  let result;
  result = Number((x - 32) * 5/9).toFixed(1);
  return Number(result);
};

const convertToFahrenheit = function(x) {
  let result;
  result = Number(x * 9/5 + 32).toFixed(1);
  return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
