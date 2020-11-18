/*

You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7]
   might become [4,5,0,1,2]).

   We are looking for 4

If target is found in the array return its index, otherwise, return -1.


[1,2,3,4,5,6,7]
[2,3,4,5,6,7,1]
[3,4,5,6,7,1,2] check if is in order
[4,5,6,7,1,2,3]
[5,6,7,1,2,3,4]
[6,7,1,2,3,4,5]
[7,1,2,3,4,5,6]

Using a variation of binary search: Cut the array in half - we ar looking for 2

[1,2,3,4,5,6,7] -- we divide in half, check if is in order, 

*/

function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // get the cneter
    const mid = (left + right) / 2;
    if (nums[mid] === target) {
      return mid;
    }
    // check if left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right side is sored
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }
}

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  // while loop iterating through
  while (left <= right) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target in the left
        right = mid - 1;
      } else {
        // target in the right
        left = mid + 1;
      }
    }
    // right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }
}
