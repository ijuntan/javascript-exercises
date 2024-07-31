const findTheOldest = function(arr) {
    return arr.reduce((acc, cur) => {
        const age = (cur.yearOfDeath || 2024) - cur.yearOfBirth
        
        if(age > acc.age)
            return {
                name: cur.name,
                age
            }
        return acc
    }, {name: '', age: 0})
};

// Do not edit below this line
module.exports = findTheOldest;
