// Writre a function that takes in a non-empty array of distinct integers and an integer with target sum. function should find all triplets taht return

// ! brute force solution
function threeNumberSum(array, targetSum) {
  // create the sumArray that will start of empty, will contain all triplets
  array.sort((a, b) => a - b)
  const sumArray = [];
  // outter for loop will start from i = 0
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          sumArray.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return sumArray;
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));


// Two pointer approach O(n^2) time and O(1) space
function threeNumberSum2(array, targetSum) {
  // sort the array in ascending order
  array.sort((a, b) => a - b);
  const sumArray = [];
  for (let i = 0; i < array.length - 2; i++) {
    // implement 2 pointer approach
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        sumArray.push([array[i], array[left], array[right]])
        right-- // we know it is less
      } else if (currentSum < targetSum) {
        left++
      } else if (currentSum > targetSum) {
        right--
      }
    }
  }
  return sumArray
}

console.log(threeNumberSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));