// prompt: given an array containing 'n' objects, each is assigned a unique number from 1 to 'n' based on creation sequence. Write function to sort object in place, O(n) time and O(1) space

// input: [3, 1, 5, 4, 2]
// output: [1, 2, 3, 4, 5]



// Solution: iterate through each element in the array, and swap values so that his can be done in O(n)s

function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) { // checks if the number at i is in the correct spot relative to j, should be one less
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums;
}
console.log(cyclic_sort([3, 1, 5, 4, 2]));
console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));
console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));