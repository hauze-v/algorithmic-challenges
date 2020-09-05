/*
  Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd'
  }
}

console.log(even_or_odd(4)); // Even
console.log(even_or_odd(16)); // Even
console.log(even_or_odd(3)); // Odd
