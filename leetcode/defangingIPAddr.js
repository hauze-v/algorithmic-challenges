/* Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0" */

// function defangIPaddr(input) {
//   let addrArray = input.split("");

//   for (let i = 0; i < addrArray.length; i++) {
//     if (addrArray[i] === ".") {
//       addrArray[i] = "[.]";
//     }
//   }

//   return addrArray.join("");
// }

function defangIPaddr(input) {
  return input.replace(/[.]/g, "[.]");
}

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"