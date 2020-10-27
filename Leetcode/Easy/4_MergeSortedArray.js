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
nums2 = [0.5,6],       n = 3

Output: [1, 2, 2, 3, 5, 6]



If we want to do this in constant space

nums1 = [1,2, 2.1, 3,0, 0, 0] m = 3
nums2 = [2, 2, 6],       n = 3


Output: [1, 2, 2, 3, 5, 6]

totalLength = 5;
pointer1 = 2;
pointer2 = 1;

[1, 2, 3, 0, 0, 6] if last element in second array is smaller than first, we can add to the end, n-- and totalLength--



todo: Merging the 2 arrays in place
If the value at the end of nums 2 is larger than last value of nums 1, we put to the end of the nums 1 array, and m + n - 1.
Else, if it is less, we need to use splice and insert value in appropriate value, and also slice the value at m + n + - 1 - i

Keep track of 2 pointers at m-1 and n-1. Keep track of last of the combined at  totalArr= m + n - 1

[1,2,3,0,0,0]
[1,2,3,0,0,6]
[1,2,3,0,5,6] -- if it is less, then we first splice the value at totallArr, then cycle through
[1,2,3,5,6]
[0.5,1,2,3,5,6]




[0]
0
[1]
1

[2,0]
1
[1]
1
*/

// todo: Own Solution
function mergeSorted(arr1, m, arr2, n) {
  // create p1 starting from 0
  let p1 = 0;
  // create p2 starting from 0
  let p2 = 0;
  let first0 = m;
  // while loop that keeps going while p1 < m && p2 < n
  while (p1 < first0 && p2 < n) {
    if (arr2[p2] <= arr1[p1]) {
      arr1.pop();
      arr1.splice(p1, 0, arr2[p2]);
      p1++;
      p2++;
      first0++;
    } else {
      p1++;
    }
  }
  while (p2 < n) {
    arr1[first0] = arr2[p2];
    p2++;
    first0++;
  }

  // return arr1
  return arr1;
}

// todo: Inplace solution starting from the end
function merge2(nums1, m, nums2, n) {
  // create 3 pointers, m-1, n-1, and m+n - 1
  let pointer1 = m - 1;
  if (!m) {
    pointer1 = 0;
  }
  let pointer2 = n - 1;
  let totalPointer = m + n - 1;
  while (pointer2 >= 0) {
    if (nums2[pointer2] > nums1[pointer1]) {
      nums1[totalPointer] = nums2[pointer2];
      totalPointer--;
      pointer2--;
    } else {
      nums1.splice(totalPointer, 1);
      while (pointer1 >= 0) {
        if (pointer1 === 0) {
          nums1.splice(pointer1, 0, nums2[pointer2]);
          pointer2--;
        }
        if (nums2[pointer2] >= nums1[pointer1]) {
          nums1.splice(pointer1, 0, nums2[pointer2]);
          pointer2--;
        }
        pointer1--;
      }
    }
  }
  return nums1;
}

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge2([0], 0, [1], 1));
console.log(merge2([2, 0], 1, [1], 1));

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

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//todo: Leetcode Solution -- capturing
var merge = function (nums1, m, nums2, n) {
  // maintain two pointers for both arrays
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  const totalElements = m + n;

  // we loop over the larger array since it has space for all combined elements
  while (nums1Pointer < totalElements) {
    if (nums1Pointer >= m || nums1[nums1Pointer] >= nums2[nums2Pointer]) {
      // if it's the last element
      if (nums1[nums1Pointer + 1] === undefined) {
        // replace the last element with the value from the smaller array
        nums1.splice(nums1Pointer, 1, nums2[nums2Pointer]);
      } else {
        // if the value in the smaller array is smaller, pop, splice, continue
        nums1.pop();
        nums1.splice(nums1Pointer, 0, nums2[nums2Pointer]);
        m++;
      }
      nums2Pointer++;
    }
    nums1Pointer++;
  }

  return nums1;
};
