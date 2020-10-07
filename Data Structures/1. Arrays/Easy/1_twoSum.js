

// Prompt: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any 2 add up, function should return them in an array

// input: [3,8,9,12,15] targetSum = 21
// output: [9, 12]

function twoNumberSum(array, targetSum) {
  // outer for loop to iterate through the array using i
  for (let i = 0; i < array.length; i++) {
    // inner for loop from j = i to find any potential matches
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]]
      }
    }
  }
  return [];
}


// O(n) time, O(n) space
// Cache: Implement a cache to store numbers as iterating through the array to do a single pass
function twoNumbersum2(array, targetSum) {
  // create the cache to store
  const cache = {};
  // create a for loop to iterate through the array
  for (let i = 0; i < array.length; i++) {
    // check if the targetValue is inside the cache, if it is return array with values
    const targetValue = targetSum - array[i];
    if (targetValue in cache) {
      return [array[i], targetValue]
    } else {
      cache[array[i]] = true;
    }
  }
  return [];
}


// O(nlog(n)) | O(1) space 
// Using the 2 pointer approach, first need to sort to be able to implement. - 2
// 2 POINTER APPROACH ONLY WORKS FOR SORTED ARRAYS
function twoNumberSum3(array, targetSum) {
  array.sort((a, b) => a - b); // time complexity is O(logn)
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
  return []
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

console.log(twoNumberSum3(arr, targetSum))





