/*
  Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

  Examples:
    max([4,6,2,1,9,63,-134,566]) // 566
    min([-52, 56, 30, 29, -54, 0, -110]) // -110
    max([5]) // 5
    min([42, 54, 65, 87, 0]) // 0
*/

function max(numbers) {
  let max = numbers[0];

  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

function min(numbers) {
  let min = numbers[0];

  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}


console.log(max([4, 6, 2, 1, 9, 63, -134, 566]))
console.log(min([-52, 56, 30, 29, -54, 0, -110]))