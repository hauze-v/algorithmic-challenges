/*
  This time no story, no theory. The examples below show you how to write function accum:

  Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

function funkyCapitalize(letter, num) {
  let funkyLetters = letter.toUpperCase();

  for (let i=0; i < num; i++) {
    funkyLetters = funkyLetters + letter.toLowerCase();
  }

  return funkyLetters;
}

function mumbling(str) {
  let result = [];

  for (let i=0; i<str.length; i++) {
    result.push(funkyCapitalize(str[i], i));
  }

  return result.join("-")
}

console.log(mumbling("abcd")) // "A-Bb-Ccc-Dddd"
console.log(mumbling("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"