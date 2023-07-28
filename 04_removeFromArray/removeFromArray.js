const removeFromArray = function(array, ...numbers) {
    return array.filter((element) => {
        for (number of numbers) {
            if (element === number) {
                return false;
            }
        }
        return true;
    })
};


// Do not edit below this line
module.exports = removeFromArray;
