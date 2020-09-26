/*
  Very simple, given a number, find its opposite.
*/

// function opposite(num) {
//   if (num > 0) {
//     return (-1) * num;
//   } else {
//     return Math.abs(num);
//   }
// }

/* Best practice solution from CodeWars */
function opposite(number) {
  return(-number);
}



console.log(opposite(-1)) // 1
console.log(opposite(5)) // -5
console.log(opposite(-12)) // 12
console.log(opposite(58843)) // -58843