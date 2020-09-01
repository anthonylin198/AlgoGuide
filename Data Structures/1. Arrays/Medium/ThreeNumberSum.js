// Writre a function that takes in a non-empty array of distinct integers and an integer with target sum. function should find all triplets taht return

// ! brute force solution
function threeNumberSum(array, targetSum) {
  // create the sumArray that will start of empty, will contain all triplets
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

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
