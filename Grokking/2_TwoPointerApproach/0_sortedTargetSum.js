
// prompt: given a sorted array of numbers and a target sum, find a pair in the array whose sum is equal to the given target

// input: [1, 2, 3, 4, 6], target = 6
// output: [1, 3]
// explanation: 2 + 4 is equal to 6


// ! brute force: O(N^2): we just do nested for loop
function sortedTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

}

// console.log(sortedTwoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))


// ! binary search approach would be O(N * logN)





// ! using 2 pointer approach: O(n) time and O(1) constant space
function pair_with_target_sum(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;
  // use while loop for 2 pointer, and this is O(N) time and O(1) constant spce
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }
    if (targetSum > currentSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6))