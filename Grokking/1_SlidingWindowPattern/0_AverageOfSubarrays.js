// todo: Prompt: Return an array that contains the average of every consecutive subarray of K elements
// Input: [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

/*

Brute Force Solution: Iterate from index 0 to index array.length - 4
Time Complexity: O(N * K)

averages array : [2.2, 2.8, 2.4, 3.6]

[1, 3, 2, 6, -1]
[3, 2, 6, -1, 4]
[2, 6, -1, 4, 1]

...
[-1, 4, 1, 8, 2]



Sliding Window Approach: Iterate from index 0 to index array.length - 4
11

11 - 1 + 4 = 14

14 - 3 + 1 = 12

...



keep track of a current sum

keep track of the startwindow, the end window will be i in the loop

*/

function slidingWindow(arr, k) {
  let currentSum = 0;
  let startWindow = 0;
  const outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < k - 1) currentSum += arr[i];
    else {
      currentSum += arr[i];
      outputArr.push(currentSum / k);
      currentSum -= arr[startWindow];
      startWindow++;
    }
  }

  // return the arr
  return outputArr;
}

// Input: [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];

console.log(slidingWindow(arr, 5));
