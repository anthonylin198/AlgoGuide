// Prompt: given an array, find the length of the smallest subarray in it which when sorted will sort the entire array
// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: we need to sort [5, 3, 7, 10, 9]



// Solution: From beginning and end of the array, find the first elements that are out of sorting order. 2 Elements aer candidaes. 
// Time complexity #
// The time complexity of the above algorithm will be O(N). Space complexity #
// The algorithm runs in constant space O(1).
// We might need to extend subarray from beginning to include any number bigger than minimum of subarray, or other way around
function shortest_window_sort(arr) {
  let low = 0,
    high = arr.length - 1;

  // find the first number out of sorting order from the beginning
  while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
    low += 1;
  }

  if (low === arr.length - 1) {
    return 0;
  }

  // find the first number out of sorting order from the end
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  // etend the subarray to include an number which is bigger than the minimum
  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }

  // extend the subarray to include any number which is smaller than the max of subarray
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }
  return high - low + 1;
}


console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));