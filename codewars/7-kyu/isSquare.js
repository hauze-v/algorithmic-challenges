function isSquare(num) {
  // Returns true if the square root of num is a whole number (no remainder after moding it)
  return Math.sqrt(num) % 1 === 0;
}