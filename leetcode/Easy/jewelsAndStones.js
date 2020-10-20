/* You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0

Note:
    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.*/

/* Split jewels string into an array
   Then split stone string into an array
   Loop through the stone array and if the value at that index exists in jewel array, increment output 
      Can use indexOf to determine if the item is in the array or not */

const numJewelsInStones = (J, S) => {
  let output = 0;

  let jewels = J.split("");
  let stones = S.split("");
  
  for (stone of stones) {
    if (jewels.indexOf(stone) != -1) { // the stone is a jewel
      output++;
    }
  }
  return output;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0