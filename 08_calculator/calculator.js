const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++)
  {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for(let i = 0; i < array.length; i++)
  {
    result = result * array[i];
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let result = 1;
	for(let i = 1; i <= n; i++)
  {
    result = result * i;
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
  factorial
};
