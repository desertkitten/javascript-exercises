const sumAll = function(start, end) {
    let sum = 0;
    let min = Math.min(start, end);
    let max = Math.max(start, end);

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1, 4)); // Output: 10
// Do not edit below this line
module.exports = sumAll;