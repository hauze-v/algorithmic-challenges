/*
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
  // Let's split the string into an array of letters
  let characters = str.split("");
  
  // Loop through the array of characters
  for (let letter of characters) {
    for (let i=0; i<characters.length; i++) {
      let count = 0;
      if 
    }
  }
}

isIsogram("Dermatoglyphics") // true
isIsogram("aba") // false
isIsogram("moOse") // false -- ignore letter case