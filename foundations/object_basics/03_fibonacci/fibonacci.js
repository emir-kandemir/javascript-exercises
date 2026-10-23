const fibonacci = function(n) {
    let arr = [1,1];
    if (n === 0 || Number.isNaN(n) || n < 0 || typeof n !== 'number') {
        return 'OOPS'
    } else {
        while (arr.length < n) {
            let result = arr.at(-1) + arr.at(-2);
            arr.push(result);
        }
    return arr.at(-1);
    }
}

// Do not edit below this line
module.exports = fibonacci;
