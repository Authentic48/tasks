var splitNumIntoDigit = (input: number) => {
  const digits: number[] = input
    .toString()
    .split('')
    .map((digit) => {
      return parseInt(digit);
    });
  return digits;
};

var fingOddNumber = (digits: number[]) => {
  const odds = digits.filter((digit) => {
    return digit % 2 != 0;
  });

  return odds;
};

var convertArrayIntoNum = (odds: number[]) => {
  const num = odds.join('');

  return num;
};
console.log(convertArrayIntoNum(fingOddNumber(splitNumIntoDigit(12345))));
