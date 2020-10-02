

// Get O(nlogn) timee and O(1) space
function twoSum(arr, targetSum) {
  // sort the arr in ascending
  arr.sort((a, b) => a - b)
  // implement the two pointer approach to find target sum 
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const currentSum = arr[start] + arr[end];
    if (currentSum === targetSum) {
      return [arr[start], arr[end]];
    } else if (currentSum < targetSum) {
      start++;
    } else if (currentSum > targetSum) {
      end--;
    }
  }

  return [];
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))