/*

Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?


*/

/*

[5,7,7,8,8,10]    target = 30


Output: [3,4]

use binary search to find the target, then we need to look for value

Use binary search, find the middle. lower, then we search right. When we find the target number,
look left and look right, also with binary search


*/

// use binary search to find the target, then find the edges after found
function searchRange(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    center = Math.floor((start + end) / 2);
    if (nums[center] === target) {
      start = center;
      end = center;
      break;
    } else if (nums[center] < target) {
      start = center + 1;
    } else {
      end = center - 1;
    }
  }

  if (start > end) {
    return [-1, -1];
  }
  // should have the index of the points
  while (nums[start - 1] === target) start--;
  while (nums[end + 1] === target) end++;
  return [start, end];
}

// var searchRange = function (nums, target) {
//   const length = nums.length - 1;
//   let start = 0;
//   let end = length;
//   let center;
//   // get the center
//   while (start <= end) {
//     center = Math.floor((start + end) / 2);
//     if (nums[center] === target) {
//       start = center;
//       end = center;
//       break;
//     } else if (nums[center] < target) start = center + 1;
//     else end = center - 1;
//   }
//   if (start > end) return [-1, -1];
//   // find the edges
//   while (nums[start - 1] === target) start--;
//   while (nums[end + 1] === target) end++;
//   return [start, end];
// };
