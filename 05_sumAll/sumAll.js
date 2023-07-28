const sumAll = function(number1, number2) {
    if (!(typeof(number1) === "number" && typeof(number2) === "number") || number1 < 0 || number2 < 0) {
        return "ERROR";
    }
    let sum = 0;

    let smallest, largest;
    if (number1 > number2) {
        smallest = number2;
        largest = number1;
    } else {
        smallest = number1;
        largest = number2;
    }

    for (let i = smallest; i <= largest; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
