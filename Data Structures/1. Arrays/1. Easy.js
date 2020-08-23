// Todo 1 (EASY): 2 NUMBER SUM: Write a function that takes in a non-empty array of distnct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the fnction should retunr them as
// Todo: an array in any order. If nothing adds up, return an empty array.

// ! TAKEAWAYS: First quickly start with the brute force solution, then we can optimize to use a cache. We can also use merge sort array.sort then solve the question even faster

// ? Solution 1: Time Complexity O(N^2) and Space Complexity O(1)
const twoNumberSum = (array, targetSum) => {
  // create a for loop that will iterate through the entire array, up until the last value
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
};

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// ? Solution 2: O(n) time & O(n) space -- Create a cache that will store values into an object as you iterate through the array
const twoNumberSum2 = (array, targetSum) => {
  const cache = {};
  for (let i = 0; i < array.length; i++) {
    let match = targetSum - array[i];
    if (match in cache) {
      return [match, array[i]];
    } else {
      cache[array[i]] = true;
    }
  }
  return [];
};

// console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));

// ? Solution 3: O(nlog(n)) time and O(1) space -- Understanding the array.sort method
const twoNumberSum3 = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return array;
};

// console.log(twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Todo 2 (EASY): Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. [1,3,4] is a subsequence of [1,2,3,4]

// ! Takeaway: With larger and smaller sequence of arrays, try to iterate through the large array once

const isValidSubsequence = (array, sequence) => {
  // validated the subsequence -- order matters
  let sequenceIndex = 0;
  // iterate through the subsequence, and check if it exists in the array, AND the index, is less than the previous
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
  }

  return sequenceIndex === sequence.length;
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
