// prompt: given a sorted array of numbers and a target sum, find a pair in the array whose sum is equal to the given target

// input: [1, 2, 3, 4, 6], target = 6
// output: [1, 3]
// explanation: 2 + 4 is equal to 6

/*

Brute Force Solution: O(n)^2 time and O(1) space
pointer at 1, and pointer at 2
1, 2
1, 3
1, 4
1, 6


2, 3
2, 4 ---- return the indices here
2, 6

3, 4
3, 6

4, 6




Using a cache -- store that values into a cache O(n)^2 time and O(n) space

cache = {1: 0 2: 1 3: 2}
1
2
3
4 -- see that 2 is in the cache and return it



Since is sorted can do better: 2 pointer approach one at start and one at the end

1, 6
1, 4
2, 4    -- target is 6



O(n/2) --> O(n) time and O(1) space



*/

function mySortedTwoSum(arr, target) {
  // create left pointer and right pointer
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  // while left pointer < right pointer
  while (leftPointer < rightPointer) {
    // take the sum of the value
    let currentSum = arr[leftPointer] + arr[rightPointer];
    // if less than the target
    if (currentSum < target) leftPointer++;
    else if (currentSum > target) rightPointer--;
    else return [leftPointer, rightPointer];
  }

  return false;
}

console.log(mySortedTwoSum([1, 2, 3, 4, 5], 6));

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

// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
