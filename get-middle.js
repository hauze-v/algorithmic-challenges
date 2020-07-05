/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

// function getMiddle(s) {
//   let evenOrOdd = even_or_odd(s.length);

//   if (evenOrOdd == "Even") {
//     return s.slice(((s.length / 2) -1), ((s.length / 2) + 1));
//   } else {
//     return s.charAt(Math.floor(s.length / 2));
//   }
// }

// function even_or_odd(number) {
//   if (number % 2 === 0) {
//     return "Even"
//   } else {
//     return "Odd"
//   }
// }

// Substring way
function getMiddle(str) {
  if (str.length % 2 === 0) {
    return str[str.length/2-1] + str[str.length/2];
  } else {
    return str[Math.floor(str.length/2)]
  }
}


console.log(getMiddle("test")) // "es"
console.log(getMiddle("testing")) // "t"
console.log(getMiddle("middle")) // "dd"
console.log(getMiddle("A")) // "A"