/*
  Given an array, find the integer that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.
*/

function findOdd(arr) {
  let result;
  const counterObject = {};

  /* Loop through the number array and check if the number exists already as a key in our counterObject. If it does, simply increment the pair value, and if it doesn't, create the key and set it at a base number of 1. */
  arr.forEach((num) => {
    // If counterObject has key of [num], increment the count
    if (counterObject[num]) {
      counterObject[num]++;
    } else { // else create key and set to 1
      counterObject[num] = 1;
    }
  })

  // Now loop over the object and find the number who's appeared an odd number of times
  for (let num in counterObject) {
    if (counterObject[num] % 2 !== 0) {
      result = num;
    }
  }
  
  return Number(result);
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])) // -1