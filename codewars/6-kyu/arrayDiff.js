/*
  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

  It should remove all values from list a, which are present in list b.

  arrayDiff([1,2],[1]) == [2]

  If a value is present in b, all of its occurrences must be removed from the other:

  arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  /* Loop through the second array (b) */
  for (let i = 0; i < b.length; i++) {
    /* For each element in b, loop through a and check it's indexOf */
    for (let j = 0; j < a.length; j++) {
      /* If the character in b is indexed in a, remove it: */
      if(a.indexOf(b[i]) > -1) {
        /* Check if index is 0 and if so, simply shift the element off the array */
        if (a.indexOf(b[i]) == 0) {
          a.shift();
        } else {
          a.splice(a.indexOf(b[i]),1) // else splice
        }
        
      }
    }
  }
  
  /* Return the new array */
  return a;
}

/* Look into array filters as a possible one liner solution to this problem */

console.log(arrayDiff([1,2,2,2,3], [2])) // [1,3]
console.log(arrayDiff([3,4], [3])) // [4]
console.log(arrayDiff([1,-8,0,-12,19,18,10,2,-20],[19,10])) // [1, -8, 0, -12, 18, 2, -20]i