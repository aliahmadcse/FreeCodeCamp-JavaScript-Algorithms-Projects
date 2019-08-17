function convertToRoman(num) {
  const decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValue = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let roman = "";
  for (let index = 0; index < decimalNum.length; index++) {
    while (decimalNum[index] <= num) {
      roman += romanValue[index];
      num -= decimalNum[index];
    }
  }
  return roman;
}

console.log(convertToRoman(36));
