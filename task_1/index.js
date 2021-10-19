var splitNumIntoDigit = function (input) {
    var digit = input % 10;
    var num = 0;
    if (input > 0) {
        num = splitNumIntoDigit(Math.floor(input / 10));
    }
    if (digit % 2 != 0) {
        return num * 10 + digit;
    }
    return num;
};
console.log(splitNumIntoDigit(123654));
