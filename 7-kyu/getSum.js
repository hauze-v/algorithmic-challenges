/*
  Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal   return a or b.

  Note: a and b are not ordered!
  Examples

  GetSum(1, 0) == 1   // 1 + 0 = 1
  GetSum(1, 2) == 3   // 1 + 2 = 3
  GetSum(0, 1) == 1   // 0 + 1 = 1
  GetSum(1, 1) == 1   // 1 Since both are same
  GetSum(-1, 0) == -1 // -1 + 0 = -1
  GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/


function getSum(a, b) {
  // Easy return if numbers are the same
  if (a === b) {
    return a;
  }

  // Declare an empty result variable and get the smaller number
  let result = 0;
  let min = Math.min(a,b);
  let max = Math.max(a,b);

  // Loop through the middle integers starting with a and ending with b suming result each time
  for (let i = min; i <= max; i++) {
    result = result + i;
  }

  return result;
}

console.log(getSum(1, 0)) // 1 + 0 = 1
console.log(getSum(1, 2)) // 1 + 2 = 3
console.log(getSum(0, 1)) // 0 + 1 = 1
console.log(getSum(1, 1)) // 1 since both are same
console.log(getSum(-1, 0)) // -1 + 0 = -1
console.log(getSum(-1, 2)) // -1 + 0 + 1 + 2 = 2