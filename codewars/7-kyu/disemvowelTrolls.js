/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = [];

  // Break the string into an array of words
  let sentence = str.split(" ");

  // Loop through each word of the sentence
  for (let word of sentence) {
    // Define a variable to hold the new word
    let newWord = "";

    // Loop through each letter of the word
    for (let i = 0; i<word.length; i++) {

      // If the letter is NOT a vowel
      if (!(vowels.includes(word[i]))) {
        // Add it to the result
        newWord = newWord + word[i]
      }
    }

    // Add the newWord to the result
    result.push(newWord);
  }

  return result.join(" ");
}

// console.log(disemvowel("aeiou boy")) // by
console.log(disemvowel("see ya later space cowboy"))