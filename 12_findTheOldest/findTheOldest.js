const findTheOldest = function(array) {

    array.sort((a, b) => getAge(a.yearOfDeath, a.yearOfBirth) - getAge(b.yearOfDeath, b.yearOfBirth));
    return array[array.length - 1];
};

function getAge(death, birth)
{
    if(death === undefined)
    {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
