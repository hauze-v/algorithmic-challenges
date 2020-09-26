/*
  Welcome. In this kata, you are asked to square every digit of a number.

  For example, if we run 9119 through the function, 811181 will come out, because. 9^2 is 81 and 1^2 is 1

  Note: The function accepts an integer and returns an integer
*/

function square(str) {
  // Convert the string to a number
  let number = parseInt(str);

  // Square that number
  number = Math.pow(number, 2);

  // Convert back to string and return
  return number.toString();
}

function squareDigits(num) {
  // Define an array to hold the string versions of each digit.
  let numberStr = num.toString().split("");

  // Declare and define a blank result to build on
  let result = ""

  // Loop through the array and send each digit to the square() to be converted to a number, squared, and then converted back to string
  for (let number of numberStr) {
    // Add the returned string to our result variable
    result = result + square(number);
  }

  // Convert the result back to a number and return.
  return parseInt(result);
}

console.log(squareDigits(9119)) // 811181