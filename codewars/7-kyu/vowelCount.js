/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {

    if (isAVowel(str.charAt(i))) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}


function isAVowel(char) {
  if (char === 'a') {
    return true;
  } else if (char === 'e') {
    return true;
  } else if (char === 'i') {
    return true;
  } else if (char === 'o') {
    return true;
  } else if (char === 'u') {
    return true;
  } else {
    return false;
  }
}


// Another way to do it would be to use an array of vowels and compare this way:

// function getCount(str) {
//   let vowelsCount = 0;
//   let vowels = ["a", "e", "i", "o", "u"];

//   for (let i = 0; i < str.length; i++;) {
//     for (j = 0; j < vowels.length; j++) {
//       if(str[i] === vowels[j]) { // I didn't know you could grab characters of strings this way without using .charAt method
//         vowelsCount++;
//       }
//     }
//   }
//   return  vowelsCount;
// }
