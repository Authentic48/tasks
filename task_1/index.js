var splitNumIntoDigit = function (input) {
    var digits = input
        .toString()
        .split('')
        .map(function (digit) {
        return parseInt(digit);
    });
    return digits;
};
var fingOddNumber = function (digits) {
    var odds = digits.filter(function (digit) {
        return digit % 2 != 0;
    });
    return odds;
};
var convertArrayIntoNum = function (odds) {
    var num = odds.join('');
    return num;
};
console.log(convertArrayIntoNum(fingOddNumber(splitNumIntoDigit(12345))));
