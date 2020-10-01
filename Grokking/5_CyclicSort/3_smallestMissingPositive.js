// Input: [-3, 1, 5, 4, 2]
// Output: 3

function find_first_missing_positive(nums) {
  let i = 0;
  n = nums.length;
  // first do the cycle sort
  while (i < n) {
    j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  // use for loop to iterate through
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}
console.log(find_first_missing_positive([-3, 1, 5, 4, 2])); console.log(find_first_missing_positive([3, -2, 0, 1, 2])); console.log(find_first_missing_positive([3, 2, 5, 1]));