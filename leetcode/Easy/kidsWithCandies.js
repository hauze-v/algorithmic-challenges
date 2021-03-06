/*
Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

Example 1:
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

Example 2:
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

Example 3:
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
 */

/*
Walk through the array of "kids"
Add extra to kid[i]
Check if that sum is the largest of the values in candies[]
if it is, push true to the resulting array
*/

// function kidsWithCandies(candies, extraCandies) {
//   let result = [];

//   for (let i = 0; i < candies.length; i++) {
//     // Add extra candy to current kid's candy pool
//     let sum = candies[i] + extraCandies;

//     // Check if that new sum is larger than any other kid's candy pool and if so, push true to result array
//     if (sum >= Math.max.apply(Math, candies)) {
//       result.push(true);
//     } else { // otherwise push false
//       result.push(false);
//     }
//   }

//   return result;
// }

// Another way to get the max is by spreading the array
const kidsWithCandies = (candies, extraCandies) => {
  // Define resulting array
  const res = [];

  // Spread candies array to find max
  const maxCandies = Math.max(...candies);

  // Walk through the array and compare to max
  for (let i = 0; i < candies.length; i++) {
    // Add extra candy to kid's pool of candy
    let candy = candies[i] + extraCandies;
    if (candy >= maxCandies) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]
