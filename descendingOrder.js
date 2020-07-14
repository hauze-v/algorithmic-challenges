/*

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function getMax(numArray) {
  let max = numArray[0];

  for (let num of numArray) {
    if (num >= max) {
      max = num;
    }
  }

  return max;
}

function descendingOrder(n) {
  // Declare an empty result to build from
  let result = [];

  // Convert the number to an array of strings
  let strArray = n.toString().split("");

  // Convert the array of strings to an array of Numbers
  let numArray = strArray.map(Number);
  console.log(`Number array: ${numArray}`)

  // Loop through the Number array
  for (let num of numArray) {
    if (num)
  }

  // Get the max digit in the array of Numbers
  let max = getMax(numArray);
  console.log("Max: " + max);

  // Push the max to the result array
  result.push(max);
  console.log(`Result: ${result}`)
}

console.log(descendingOrder(42145)) // 54421
