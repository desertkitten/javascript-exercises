const findTheOldest = function(birth, death) {
    let maxAge = 0;
    let oldestPersonIndex = -1;

    for (let i = 0; i < birth.length; i++) {
        let age;
        if (death[i] !== undefined) {
            age = death[i] - birth[i];
        } else {
            age = new Date().getFullYear() - birth[i];
        }

        if (age > maxAge) {
            maxAge = age;
            oldestPersonIndex = i;
        }
    }

    return oldestPersonIndex;
};


// Do not edit below this line
module.exports = findTheOldest;