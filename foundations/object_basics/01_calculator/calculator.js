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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
