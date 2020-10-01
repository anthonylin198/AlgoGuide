
// Prompt: Given array of positive numbers and positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S', 0 of none exists
// Input: [2, 1, 5, 2, 3, 2], S = 7
// Output: 2
// Explanation: [5, 2]

// ! Sliding Window approach: we start from the beginning, then pop one off from the end
// O(n) time and O(1) space
function smallestSubarray(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(smallestSubarray(7, [2, 1, 5, 2, 3, 2]))

