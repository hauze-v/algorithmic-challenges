/* Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.*/

/* 1. loop through the array and for each number...
   2. count the number of digits
   3. if even, count++ */

const countDigits = function(number) {
  let digits = number.toString().split("");
  return digits.length;
}

const findNumbers = function(nums) {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    let digits = countDigits(nums[i]);
    if (digits % 2 === 0) {
      // It's even
      output++;
    }
  }
  return output;
}

console.log(findNumbers([555,901,482,1771])); // 1
console.log(findNumbers([12,345,2,6,7896])); // 2
