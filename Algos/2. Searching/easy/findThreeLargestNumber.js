// todo: Create a list that will hold in order the largest, and will replace if surpasses 3

// this would be done in O(n) time and O(1) space

function findThreeLargestNumbers(array) {
  const largestArr = [-Infinity, -Infinity, -Infinity];
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestArr[2]) {
      // insert value correctly into the largest array -- popping off the lowest
      largestArr[2] = array[i]
    } else if (array[i] > largestArr[1]) {
      largestArr[1] = array[i]
    } else if (array[i] > largestArr[0]) {
      largestArr[0] = array[i]
    }
  }
  // return the arr
  return largestArr
}