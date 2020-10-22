// ! Question
/*
Maximum Subarray: Given an integer array nums, find the contiguous subarray (containing at least on number) which has the largest sum and return its sum

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Input: nums = [0]
Output: 0

Input: nums = [-1]
Output: -1
*/

/*

Is it given that the array will container at least 1 number? If there is 1 number we return that number


Solution: Brute force - iterating through ever possible contiguous subarray. Keeping track of the maximum
[-2]
[-2, 1]
[-2, 1, -3]
[-2, 1, -3, 4]
...

[1]
[1,-3]
[1, -3, 4]
[1, -3, 4, -1]



Solution: dynamic programming approach
[-2,1,-3,4,-1,2,1,-5,4]
[-2,1,-2,4, 3, 5, 6,1,5]

Since we only need to return a value



*/

// O(n) Time and O(1) space rather than O(n) space
function maxSubArray(nums) {
  // 2 pointers
  let pointer = nums[0];
  let max = nums[0];
  // for loop iterating through the array
  for (let i = 1; i < nums.length; i++) {
    // first pointer will be replaced by the max
    pointer = Math.max(nums[i], pointer + nums[i]);
    max = Math.max(pointer, max);
  }
  return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
