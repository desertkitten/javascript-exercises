const reverseString = function(string) {
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[1];
    }
    return reversed;
};

console.log(reverseString('hello there'));


// Do not edit below this line
module.exports = reverseString;