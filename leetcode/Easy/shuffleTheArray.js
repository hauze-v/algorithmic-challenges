/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Example 1:
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:
Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
*/

/*
  psuedo-code:
    1. Walk through the array starting at index n
    2. Define index counter i as the same as n
    3. For each index of array starting at n, push nums[i - n] and nums[i] to the new array
*/

function shuffle(nums, n) {
  let output = [];

  for (let i = n; i < nums.length; i++) {
    output.push(nums[i - n]); // this will cover the x values (x1, x2, x3)
    output.push(nums[j=i]); // this will cover the y values (y1, y2, y3)
  }

  return output;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1,1,2,2], 2)); // [1,2,1,2]