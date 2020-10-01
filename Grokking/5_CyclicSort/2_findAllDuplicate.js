// Prompt: find all duplicates without using any extra space

// input: [3, 4, 4, 5, 5]
// output: [4, 5]

function find_all_duplicates(nums) {
  let i = 0;
  // we first to the cyclic sort
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }
  // then we can look for the duplicate numbers
  duplicateNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i]);
    }
  }
  return duplicateNumbers;
}
console.log(find_all_duplicates([3, 4, 4, 5, 5])); console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));