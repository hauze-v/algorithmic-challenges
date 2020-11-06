/* Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

Example 1:
Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

Example 2:
Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Example 3:
Input: nums = [3,7]
Output: 12 */

const maxProduct = (nums) => {
  /* Grab the largest number */
  let num1 = Math.max(...nums);

  /* Grab the index of num1 */
  let num1Index = nums.indexOf(num1);
  
  /* Remove num1 from array using index */
  let removed = nums.splice(num1Index, 1);

  /* With largest removed, grab second largest */
  let num2 = Math.max(...nums);

  /* Return the product of the two */
  return (num1 - 1) * (num2 -1);
}

console.log(maxProduct([3,4,5,2])); // 12
console.log(maxProduct([1,5,4,5])); // 16
console.log(maxProduct([3,7])); // 12