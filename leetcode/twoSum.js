/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]

  Constraints:
    2 <= nums.length <= 105
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
*/


/* Brute Force Approach: */
// function twoSum(nums, target) {
//   let result = [];

//   for(let i =0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] == target - nums[i]) {
//         result.push(i, j);
//       }
//     }
//   }

//   return result;
// }

/* O(n) - One-pass Hash Table */
function twoSum(nums, target) {
  let map = new Map;

  for(let i = 0; i < nums.length; i++) {
    // Declare a variable to hold the complement value, in this case target - numInArray
    let complement = target - nums[i];

    // Check whether map has that complement number
    if (map.has(complement)) {
      return [map.get(complement), i]
    }

    // Add a key:value pair to map Object for current value in array
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

/* Map is an Object and is similar to Object except that the key values can be of ANY type and we set key:value pairs using the map.set value */




/* My frist attempt (wrong / only partially correct) */
// function twoSum(nums, target) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     console.log(`Sum = ${nums[i] + nums[i+1]}`)
//     if (nums[i] + nums[i+1] === target) {
//       console.log('hey')
//       result.push(i);
//       result.push(i+1);
//     }
//   }

//   return result;
// }