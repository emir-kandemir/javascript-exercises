const palindromes = function (word) {
    const re = /\W+/g;
    let firstWord = word.toLowerCase().replace(re, '');
    let reversedWord = firstWord.split("").reverse().join("");
    return reversedWord === firstWord;
};

// Do not edit below this line
module.exports = palindromes;
