/*

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
   - The number of elements initialized in nums1 and nums2 are m and n respectively.
   - You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.


Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

/*
Create 2 pointers, one on num1 and one on num2. Iterate through the arrays and push values to another array

nums1 = [1,2,3,0], m = 3
nums2 = [2,6],       n = 3

Output: [1, 2, 2, 3, 5, 6]



If we want to do this in constant space

nums1 = [1,2, 2.1, 3,0, 0, 0] m = 3
nums2 = [2, 2, 6],       n = 3


Output: [1, 2, 2, 3, 5, 6]

totalLength = 5;
pointer1 = 2;
pointer2 = 1;

[1, 2, 3, 0, 0, 6] if last element in second array is smaller than first, we can add to the end, n-- and totalLength--







*/

// With a new Array
function merge(nums1, m, nums2, n) {
  // create an array to store the final array
  const arr = [];
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  while (nums2Pointer < n) {
    // only add to the first array if nums1Pointer is less than n, otherwise you will hit the 0s
    if (nums1[nums1Pointer] < nums2[nums2Pointer] && nums1Pointer < n) {
      arr.push(nums1[nums1Pointer]);
      nums1Pointer++;
    } else if (nums2[nums2Pointer] > nums1[nums1Pointer]) {
      arr.push(nums2[nums2Pointer]);
      nums2Pointer++;
    } else {
      arr.push(nums1[nums1Pointer]);
      arr.push(nums2[nums2Pointer]);
      nums1Pointer++;
      nums2Pointer++;
    }
  }
  return arr;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
