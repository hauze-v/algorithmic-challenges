/*
  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell)

*/

function DNAStrand(dna) {
  // Define an empty result
  let result = "";

  // Split the string into an array of characters
  let letterArray = dna.split("");
  
  // Loop through the characters and build the resulting string
  for (let letter of letterArray) {
    switch (letter) {
      case "A":
        letter = "T";
        break;
      case "T":
        letter = "A";
        break;
      case "C":
        letter = "G";
        break;
      case "G":
        letter = "C";
        break;
    }
    
    result = result + letter;
  }

  return result;
}

console.log(DNAStrand("ATTGC")) // return "TAACG"

console.log(DNAStrand("GTAT")) // return "CATA"