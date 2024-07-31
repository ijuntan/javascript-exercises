const recursiveRemove = (tempArray, value) => {
    const index = tempArray.findIndex(el => el === value)
    if(index !== -1) {
        tempArray.splice(index, 1)
    }
    const anotherIndex = tempArray.findIndex(el => el === value)
    if(anotherIndex === -1) {
        return tempArray
    } else {
        return recursiveRemove(tempArray, value)
    }
}

const removeFromArray = function(array, ...value) {
    const tempArray = [...array]
    value.forEach(item => {
        recursiveRemove(tempArray, item)
    })
    return tempArray
};

// Do not edit below this line
module.exports = removeFromArray;
