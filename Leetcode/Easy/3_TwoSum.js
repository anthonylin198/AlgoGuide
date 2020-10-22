/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]


Input: nums = [3,3], target = 6
Output: [0,1]

*/

/*

1) Brute force solution: Find every possible twoSum in the array until we reach the target. Worst Case O(n)^2
[2, 7]
[2, 11]
[2, 15]
[7, 11] etc...


2) Incorporating a Cache: Store all values in cache as iterating through the array. O(n) time complexity, O(N) space
[2,7,11,15], target = 9
cache: {2: 0}
7 - would see target in the cache and return true


3) Is there any sort of space limit - if we are able to sort the array, can do in constant space Olog(n) O(1) space
2 pointer approach

*/

// caching technique
function twoSum(nums, target) {
  const cache = {};
  for (let num of nums) {
    let targetNum = target - num;
    if (targetNum in cache) {
      return true;
    } else {
      cache[num] = true;
    }
  }
  return false;
}

// console.log(twoSum([1, 2, 3], 5));

// sorted technique

function sortedTwoSum(nums, target) {
  // sort the nums array
  nums.sort((a, b) => a - b);
  console.log(nums);
  // keep track of left pointer and right pointer
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  // while left pointer is less than the right pointer, move through target
  while (leftPointer < rightPointer) {
    let currentSum = nums[leftPointer] + nums[rightPointer];
    if (currentSum < target) {
      leftPointer++;
    } else if (currentSum > target) {
      rightPointer--;
    } else {
      return true;
    }
  }
  return false;
}

console.log(sortedTwoSum([1, 7, 3], 10));
