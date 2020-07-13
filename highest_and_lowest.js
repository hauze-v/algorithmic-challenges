/*
  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

*/

function highAndLow(str) {
  let numbers = str.split(" ");
  let high = numbers[0];
  let low = numbers[0];

  for (let num of numbers) {
    let parsedNum = parseInt(num);

    if (parsedNum > high) {
      high = parsedNum.toString();
    }

    if (parsedNum < low) {
      low = parsedNum.toString();;
    }
  }

  return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"