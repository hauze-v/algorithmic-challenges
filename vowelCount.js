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

console.log(getCount("aeiouBBBBHDLKHTTMe"));
