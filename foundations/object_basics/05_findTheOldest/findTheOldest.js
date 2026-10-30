const findTheOldest = function(arr) {
    const today = new Date().getFullYear();
    const oldest = arr.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = today;
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = today;
        }
        const firstPerson = a.yearOfDeath - a.yearOfBirth;
        const secondPerson = b.yearOfDeath - b.yearOfBirth;
        if (firstPerson > secondPerson) {
            return -1;
        } else if (secondPerson > firstPerson) {
            return 1;} else return 0;
    })
    console.log(oldest);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
