const palindromes = function (string) {
    const newString = string.toLowerCase().split("").filter(s => s.match(/^[1-9a-zA-Z]$/)).join("")
    for(i = 0; i < Math.floor(newString.length/2); i++) {
        if(newString[i] !== newString.at(-1 - i)) return false
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
