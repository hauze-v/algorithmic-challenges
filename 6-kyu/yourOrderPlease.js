/*
  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

  If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
  
  Examples

  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  ""  -->  "" 
*/

function order(str) {
  if (!str) {
    return '';
  }
  
   
}

/* Converts string to array of words, pulls number from each word and builds an array of numbers */
function getNumbers(str) {
  /* Define an obj to hold the words and their order in the string */
  let obj = {};
 
  /* Split the string into an array of words */ 
  let words = str.split(" ");
  
  /* Loop through the array of words and add each word with the order number as a key-value pair in obj */
  for (let i = 0; i < words.length; i++) {

    obj.words[i] = 'ham';
  }

  console.log(obj)
}

// console.log(order())
// console.log(order('is2 Thi1s T4est 3a')) // Thi1s is2 3a T4est
console.log(getNumbers('is2 Thi1s T4est 3a'))