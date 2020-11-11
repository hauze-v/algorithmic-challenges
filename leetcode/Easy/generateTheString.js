/* Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

Example 1:
Input: n = 4
Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

Example 2:
Input: n = 2
Output: "xy"
Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

Example 3:
Input: n = 7
Output: "holasss" */

const generateTheString = (n) => {
  if (n === 1) {
    return "a";
  }
  
  let result = "";

  // If even
  if (n % 2 === 0) {
    result = "y";
    for (let i = 0; i < (n - 1); i++) {
      result += "x";
    }
  } else {
    result = "yw";
    for (let i = 0; i < (n - 2); i++) {
      result+= "x";
    }
  }

  return result;
}

console.log(generateTheString(4)); // some string with 3 letters and 1 letter
console.log(generateTheString(7)); // some string with 3 letters and 1 letter