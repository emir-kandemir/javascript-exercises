const palindromes = function (word) {
    let reversedWord = word.split("").reverse().join("");
    if (reversedWord == word) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
