/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
  let sum = 0;

  // Loop down to zero from the starting number
  for (let i = number - 1; i > 0; i--) {
    if (isMultiple(i)) {
      sum += i;
    }  
  }

  return sum;
}

function isMultiple(num) {
  return num % 3 === 0 || num % 5 === 0;
}

console.log(solution(10)) // 23