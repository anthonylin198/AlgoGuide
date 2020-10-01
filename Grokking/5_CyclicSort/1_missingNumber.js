// Prompt: given arary containing 'n' distinct numbers from 0 to 'n'. array is missing a number, find the missing number

// input: [8, 3, 5, 2, 4, 6, 0, 1]
// output: 7

// Solution: since the numbers are ranged from 0 to n compared to 1 to n, makes changes in our algorithms


// Time complexity: O(n) and O(1) space: technical O(n) + O(n-1) + O(n) which is still O(n)
function find_missing_number(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  // find the first number missing from its index, that will be our required number
  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
}
console.log(find_missing_number([4, 0, 3, 1])); console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));