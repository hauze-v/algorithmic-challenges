/*
  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

  If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
  
  Examples

  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  ""  -->  "" 
*/

// function order(str) {
//   if (!str) {
//     return '';
//   }
  
   
// }

// /* Converts string to array of words, pulls number from each word and builds an array of numbers */
// function getNumbers(str) {
//   /* Define an obj to hold the words and their order in the string */
//   let obj = {};
 
//   /* Split the string into an array of words */ 
//   let words = str.split(" ");
  
//   /* Loop through the array of words and add each word with the order number as a key-value pair in obj */
//   for (let i = 0; i < words.length; i++) {

//     obj.words[i] = 'ham';
//   }

//   console.log(obj)
// }

// // console.log(order())
// // console.log(order('is2 Thi1s T4est 3a')) // Thi1s is2 3a T4est
// console.log(getNumbers('is2 Thi1s T4est 3a'))

function order(words) {
  /* Return empty string if given empty string */
  if(words === "") {
    return "";
  }

  /* Define result and split the given string into an array of words */
  let result = [];
  words = words.split(" ");
  
  /* Define a counter variable used to determine the indexOf each word: starting with 1 */
  let j = 1;

  /* Loop through the array of words */
  for (let i = 0; i < words.length; i++) {
    /* If the indexOf j is greater than -1 (it exists) push that word to the array because it's next in line. Then incredment j */
    if(words[i].indexOf(j) > -1) {
      result.push(words[i]);
      j++;
      i = -1; /* We then have to restart the loop, to scan through for the next word */
    }
  }

  return result.join(" ");
}

console.log(order('is2 Thi1s T4est 3a'))