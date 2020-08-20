/*
  Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(str) {
  /* Split the string into array of words */
  let words = str.split(" ")
  
  /* Loop over the array; if word is > 5 letters, call reverseString() */
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = reverseString(words[i]);
    }
  }

  return words.join(" ");
}

function reverseString(str) {
  let reverseStr = str.split("").reverse();
  reverseStr = reverseStr.join("");
  
  return reverseStr;
}

console.log(spinWords("Hey this is certainly a test")) // "Hey this is ylniatrec a test"