

// Prompt: Return an array that contains the average of every consecutive subarray of K elements
// Input: [1, 3, 2, 6, -1, 4, 1, 8, 2]
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// ! Brute Force Approach
// Time Complexity: O(N * K)
function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of the next K elements
    sum = 0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j]
    }
    result.push(sum / K)
  }
  return result
}

// console.log(find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))




// ! Sliding window Approach
function find_averages_of_subarrays2(K, arr) {
  const result = [];
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide window
    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart]; // we jus slide over, and subtract from the start
      windowStart += 1; // slide the window ahead
    }
  }
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);