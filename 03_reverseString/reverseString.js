const reverseString = function(string) {
    return string.split("").reduce((acc, val) => val + acc, "")
};

// Do not edit below this line
module.exports = reverseString;
