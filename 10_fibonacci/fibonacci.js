const fibonacci = function(num) {
    if(num < 0) return "OOPS"
    num = Number(num)
    if(num === 0) return 0
    if(num === 1 || num === 2) return 1
    let prevSum = 1;
    let sum = 1;
    for(i = 2 ; i < num; i++) {
        let temp = prevSum;
        prevSum = sum;
        sum += temp;
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
