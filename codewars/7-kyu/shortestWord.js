/*

  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.

*/


function findShort(str) {
  // Split string into array of words
  let words = str.split(" ");
  
  // Define a variable to hold the shortest word length
  let shortest = words[0].length;

  // Loop through the array of words
  for (let word of words) {
    if (word.length < shortest) {
      shortest = word.length;
    }
  }

  // Return the new shortest length
  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3