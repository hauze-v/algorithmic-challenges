/*
  Complete the solution so that it reverses the string passed into it.
*/

/*
  One liner solution from codewars:
  
  function solution(str){
    return str.split('').reverse().join('');  
  }
  
*/

function solution(str) {
  // Convert to array of characters
  str = str.split("")
  
  // Reverse the order and join back to a string
  return str.reverse().join("")
}


console.log(solution("world")) // dlrow