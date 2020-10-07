


// check if is all increasing, or all decreasing
// O(n) time complexity
function isMonotonic(array) {
  // edge case, if the array length is <= 2, just return true
  if (array.length <= 2) return true;
  // check for the intial direction (either positive or negative)
  let direction = array[1] - array[0];
  // create for loop to iterate from spot where position was determined
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    // check if breaks the direction
    if (breaksDirection(direction, array[i], array[i - 1])) {
      return false;
    }
  }
  return true;
}


function breaksDirection(direction, num1, num2) {
  if (direction > 0) {
    if (num1 < num2) return true
  }
  if (direction < 0) {
    if (num1 > num2) return true
  }
}