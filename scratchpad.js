/*
Given two arrays, write a function to compute their intersection.

Input: nums1 = [1,2,2, 1], nums2 = [2,2]
Output: [2,2]


Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]


Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

*/

// todo: Method 1: Pointer on nums2 and nums1, and just iterate through, and splice and add to the number array if duplicate is found
// todo: Method 2: taking of the the arrays and storing into an object, and delete from the object as going through


function intersect(num1, nums2) {
  // create an empty array to store the numbers
  const arr = [];
  // create a cache, to store key value pairs {1: 2, 2: 2}
  const cache = {};
  for (let i = 0; i < num1.length; i++) {
    if (!cache[num1[i]]) cach[num1[i]] = 1;
    else cache[num1[i]]++;
  }

  // create for loop to iterate through nums2
  for (let i = 0; i < nums2.length; i++) {
    // if nums2[i] is in the cache, then we remove 1 from the cache, and push to the array
    if (cache[nums2[i]]) {
      arr.push(nums2[i])
      cache[nums2[i]]--
    }
  }
  return arr;
}


console.log(intersect([1,2,2,1], [2,2]));