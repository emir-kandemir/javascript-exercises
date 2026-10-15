const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};
const sum = function(arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce((accumulator, currentValue)  => 
    accumulator + currentValue, initialValue,);
  return sumWithInitial;
};

const multiply = function(arr) {
  const initialValue = 1;
  const multiply = arr.reduce((accumulator, currentValue)  => 
    accumulator * currentValue, initialValue);
  return multiply;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let endValue = 1;
	for (let startingValue = number; startingValue >= 1; startingValue-- ) {
    endValue *= startingValue;
  }
    return endValue;
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
