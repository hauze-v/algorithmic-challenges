/*
  Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is   produced. This is only applicable to the natural numbers.
  Examples

      16  -->  1 + 6 = 7
     942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 
*/

function digital_root(n) {
  /* Call sumArray to return the sum of the initial number */
  let result = n;
  while (result > 9) {
    result = sumArray(result)
  }

  return result;
}

function sumArray(num) {
  let sum = 0;
  let arrayOfNumbers = Array.from(String(num), Number)
  /* 
    String(n) converts the Number into a String

    The Array.from() method creates a new Array instance from an array-like or iterable object, the string is an iterable object, so we create an Array from it
     
    But, in the process of automatically creating this new array, the Array.from() method will first pass any iterable element (every character in this case) to the function we set as the second parameter, which is the Number function in this case.
     
    The Number function will take any string character and will convert it into a number
     
    These numbers will be added one by one to a new array and finally this array of numbers will be returned.
  */
  for (let number of arrayOfNumbers) {
    sum += number;
  }

  return sum;
}

console.log(digital_root(16)) // 7
console.log(digital_root(942)) // 15 --> 6
console.log(digital_root(132189)) //  6
console.log(digital_root(493193)) // 29 --> 11 --> 2