/*

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n) {
  // Convert the number to an array of strings
  let strArray = n.toString().split("");

  // Convert the array of strings to an array of Numbers
  let numArray = strArray.map(Number);

  // Sort the NumArray in descending order and return
  numArray.sort(function(a,b) {return b - a});
  return parseInt(numArray.join(""));
}

console.log(descendingOrder(42145)) // 54421
console.log(descendingOrder(145263)) // 654321
