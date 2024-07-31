const sumAll = function(numOne, numTwo) {
    if(
        typeof numOne !== "number" || 
        typeof numTwo !== "number" ||
        numOne % 1 !== 0 ||
        numTwo % 1 !== 0 ||
        numOne < 0 || 
        numTwo < 0
    ) return "ERROR"

    let large = numTwo > numOne ? numTwo : numOne
    let odd = large % 2 === 0

    if(odd) return (numOne + numTwo) * large / 2
    else return (numOne + numTwo - 1) * (large - 1) / 2 + large
};

// Do not edit below this line
module.exports = sumAll;
