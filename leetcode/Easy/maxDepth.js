/* A string is a valid parentheses string (denoted VPS) if it meets one of the following:
    It is an empty string "", or a single character not equal to "(" or ")",
    It can be written as AB (A concatenated with B), where A and B are VPS's, or
    It can be written as (A), where A is a VPS.

We can similarly define the nesting depth depth(S) of any VPS S as follows:
    depth("") = 0
    depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
    depth("(" + A + ")") = 1 + depth(A), where A is a VPS.

For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.

Example 1:
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

Example 2:
Input: s = "(1)+((2))+(((3)))"
Output: 3

Example 3:
Input: s = "1+(2*3)/(2-1)"
Output: 1

Example 4:
Input: s = "1"
Output: 0 */

/* Use two counts, maxCount and count
   Loop through the input string, stopping at the end
   if the index value is an open parenthesis '(' then set maxCount = whichever is higher (maxCount or count++)
   else if the index value is a closed parenthesis ')' decrement the count
   return maxCount */

var maxDepth = function(s) {
  let maxCount = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          maxCount = Math.max(maxCount, ++count);
      } else if (s[i] === ')') {
          count--;
      }
  }
  return maxCount;
};

console.log(maxDepth("1+(2*3)/(2-1)")); // 1
/* maxCount = 1 because count++ is 1 and maxCount is 0
    count gets decremented to 0
      maxCount = 1 because count++ is 1 and maxCount is also 1
        count gets decremented to 0
          maxCount = 1 is returned */