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
Questions:
Integer of nums contains AT LEAST one number. How should I deal with an empty array? Empty array return


Solutions: O(n)^2      O(1) space
Brute Force: start from index 0, and go til end, then increment by one. Get every possible subset of numbers
-2
-2, 1
-2, 1, -3
-2, 1, -3, 4
-2, 1, -3, 4, -1
.....
-2, 1, -3, 4, -1, 2, 1, -5, 4

1
1, -3


....


5




[-2,1,-3,4,-1,2,1,-5,4]


O(n) time and O(n) space
Solution: Create a dynamic array, relationship between values: would you rather take, the sum of -2 and 1, or take 1

max: 1
dynamic arr: [-2, 1, -2, 4, 3, 5, 6, 1, 5] --- We can see that 6 is the maximum possible subarray



recentValue = 
max =


*/

function maxSubarray(arr) {
  // create recentValue - set recent value to index 0 and max to index 0
  let recentValue = arr[0];
  let max = arr[0];
  // for loop to iterate through the array from 1 to arr.length
  for (let i = 0; i < arr.length; i++) {
    // recentValue = Math.max(array[i], recentValue + array[i])
    recentValue = Math.max(arr[i], recentValue + arr[i]);
    max = Math.max(recentValue, max);
  }

  // return the max
  return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
