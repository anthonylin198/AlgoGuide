/*

You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7]
   might become [4,5,0,1,2]).

   We are looking for 4

If target is found in the array return its index, otherwise, return -1.

*/

/*

If divided in half, we know that one side of the array is sorted

Different ways this particular array could be rotated
[1,2,3,4,5,6,7]  Normal binary search
[2,3,4,5,6,7,1]  We check the sorted left side, then look at the smallest number
[3,4,5,6,7,1,2]
[4,5,6,7,1,2,3]
[5,6,7,1,2,3,4]
[6,7,1,2,3,4,5]
[7,1,2,3,4,5,6]

Look for 1: 



If center - 1 is >= then middle number, then we might need to flop sides




*/

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
