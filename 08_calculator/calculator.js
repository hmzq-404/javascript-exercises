const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const totalSum = array.reduce((sum, number) => {
        return sum + number;
    }, 0);
    return totalSum;
};

const multiply = function(array) {
    const endProduct = array.reduce((product, number) => {
        return product * number;
    }, 1)
    return endProduct;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let result = 1;
    for (let i = 1; i <= number; i++) {
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
  factorial
};
