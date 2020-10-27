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


nums1 = [1,2, 7, 0, 0, 0, 0]          m = 3
nums2 = [2,5,6,8]                n = 4



todo: Do this without creating an additional array. Use the nums1 array. Whenever we hit a number that in nums1 that is larger than the number in nums 2, we pop off a zero, and insert before


p1 = 3
p2 = 2

[1, 2, 7, 0, 0, 0, 0]
[1, 2, 2, 7, 0, 0, 0]
[1, 2, 2, 5, 7, 0, 0]
[1, 2, 2, 5, 6, 7, 0]



first 0 is at index m, and will change as we go along

nums1 = [9, 9, 9, 0, 0, 0, 0]
nums2 = [2, 5, 6, 8]

If p1 is greater than p2, then we pop 0 off of the end, and splice in the value at nums 2. then increment p1 and p2. 
If p2 is greater than p1, means every value after can replace each remaining 0 with the values in p2. We need to keep track of the first and last 0


If a value in nums 2 is every greater then the last value in nums 1, then we know every number after that value, can replace the remaining zeros




time complexity: O(m)^2   O(1) space    


*/

// merge the sorted array
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

console.log(mergeSorted([9, 9, 9, 0, 0, 0, 0], 7, [2, 5, 6, 8], 4));
