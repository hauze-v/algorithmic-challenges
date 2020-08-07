/*
  You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers  or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
  
  Examples:
  [2, 4, 0, 100, 4, 11, 2602, 36]
  Should return: 11 (the only odd number)

  [160, 3, 1719, 19, 11, 13, -21]
  Should return: 160 (the only even number)
*/

function findOutlier(integers) {
  /* Define variable to count the number of even digits in the array */
  let isEven = false;
  let evenCounter = 0;

  /* Loop through integers array and count number of even digits */
  for (let int of integers) {
    if (int % 2 === 0) {
      evenCounter++;
    }
  }

  /* If evenCounter is greater than or equal to 2, array isEven */
  if (evenCounter >= 2) {
    isEven = true;
  }

  /* If integers array isEven, pullOdd, else pullEven */
  let outlier;
  if (isEven) {
    outlier = pullOdd(integers)
  } else {
    outlier = pullEven(integers)
  }

  return outlier;
}

function pullOdd(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      return num;
    }
  }
}

function pullEven(arr) {
  for (let num of arr) {
    if (num % 2 === 0) {
      return num;
    }
  }
}

console.log(findOutlier([2,4,0,100,4,11,2602,36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))