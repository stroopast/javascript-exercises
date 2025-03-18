const removeFromArray = function(array, ...rest) {
    let result = array;
    for(let j = 0; j < rest.length; j++)
    {
        for(let i = 0; i < array.length; i++)
        {
            if(array[i] === rest[j])
            {
                result.splice(i, 1);
                i--;
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
