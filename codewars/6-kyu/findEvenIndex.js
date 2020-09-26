/*
  You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

  For example:

  Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

  Let's look at another one.
  ou are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

  Note:
  If you are given an array with multiple answers, return the lowest correct index.
*/

function findEvenIndex(arr) {
  let index = arr.length;
  
  /* Loop through the array and on each index, compare the sum to the left with the sum to the right */
  for (let i = 0; i < arr.length; i++) {
    
    /* Define variables to hold the numbers on the left and right */
    let leftSide = arr.slice(0, i);
    let rightSide = arr.slice(i+1);

    /* If the sum of the leftSide numbers is equal to the sum of the rightSide numbers, check if smallest index */
    if (sum(leftSide) == sum(rightSide)) {
     return i;
    }
  }

  /* Otherwise return -1 */
  return -1;
}

/* Simple function that sums the digits in an array */
function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
console.log(findEvenIndex([1,100,50,-51,1,1])) // 1