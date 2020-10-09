

// finds correct value in O(log(n)) - find the correct index
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    // find the middle
    const middle = (left + right) / 2;
    const potentialMatch = array[middle];
    // if the middle is the target
    if (potentialMatch === target) {
      return middle;
    } else if (potentialMatch > target) {
      right = middle - 1;
    } else {
      left = middle + 1
    }
  }
  return -1;
}