// Prompt: Write a function that takes in an array of poistive integers and returns the maximum sum of non-adjacent elemnts in the array.
// if a sum can't be generated, the function should return 0

// input: [75,105,120,75,90,135]
// output: 330 (75+120+135)


// [7,10,12,7,9,14]
// Output: 7 + 12 + 14 = 33

// we can solve this using dynamic programming, breaking down this question into smaller pieces
// [7, 10, 19, 19, 28, 33]: we would return the largest

// pattern after the first 2 numbers, Math.max(currentNum + num[i-2], num - 1)

// after iterating through the array, we return hte last number

// ! Solution: Creating an array of the same length, breaking down ino smaller problems

// O(n) time complexity, going through array one time, O(n) space
function maxSubsetSumNoAdjacent(array) {
  // edge case, if array has no length
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  const maxSums = array.slice(); // value at index 0 will remain the same
  // if the length of array is just 1, then we return array at index 0
  maxSums[1] = Math.max(array[0], array[1])
  // for loop starting from i = 2 to array.length
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], array[i] + maxSums[i - 2])
  }
  return maxSums[maxSums.length - 1]
}

const arr = [75, 105, 120, 75, 90, 135]

console.log(maxSubsetSumNoAdjacent(arr))



// O(n) time and O(1) space
function maxSusbsetSumNoAdjacent2(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  // store into variables rather than an array
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}


