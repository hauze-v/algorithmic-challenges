/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:
Input: "III"
Output: 3

Example 2:
Input: "IV"
Output: 4

Example 3:
Input: "IX"
Output: 9

Example 4:
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */


function romanToInt(str) {
  let romanNums = str.split("");
  let result = 0;

  let obj = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  }

  // Loop over roman character array and begin building the resulting integer
  for (let i = 0; i < romanNums.length; i++) {
    /* If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9 */
    if (romanNums[i] === "I" && (romanNums[i + 1] === "V" || romanNums[i + 1] === "X")) {
      result += (obj[romanNums[i + 1]] - 1);

      /* be sure to skip an index since we're counting two roman characters */
      i++;

      /* If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90 */
    } else if (romanNums[i] === "X" && (romanNums[i + 1] === "L" || romanNums[i + 1] === "C")) {
      result += (obj[romanNums[i + 1]]) - 10;
      i++;

      /* If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900 */
    } else if (romanNums[i] === "C" && (romanNums[i + 1] === "D" || romanNums[i + 1] === "M")) {
      result += (obj[romanNums[i + 1]]) - 100;
      i++;

      /* Else, simply add the matching romanNum value to the result */
    } else {
      result += obj[romanNums[i]];
    }
  }

  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("XL"));
console.log(romanToInt("XC"));
console.log(romanToInt("CD"));
console.log(romanToInt("CM"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));