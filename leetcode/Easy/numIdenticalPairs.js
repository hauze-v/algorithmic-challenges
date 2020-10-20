/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
*/

/*
pseudo-code:
  1. Walk through the array and check each index against the rest using a double for loop
  2. If nums[i] === nums[j] and i < j, then increment the output (or num of identical pairs)
*/

function numIdenticalPairs(nums) {
  let numOfIdenticalPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        numOfIdenticalPairs++;
      }
    }
  }

  return numOfIdenticalPairs;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0