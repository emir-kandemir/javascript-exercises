const findTheOldest = function(arr) {
    const oldest = arr.sort((a, b) => {
        const firstPerson = a.yearOfDeath - a.yearOfBirth;
        const secondPerson = b.yearOfDeath - b.yearOfBirth;
        if (firstPerson > secondPerson) {
            return -1;
        } else if (secondPerson > firstPerson) {
            return 1;} else return 0;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
