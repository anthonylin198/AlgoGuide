// find the max in the array

// [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

/*

Is there only one possible max subarray, if there is a tie, what do we do?

Brute Force Solution: keep track of max -- O(n^2) time and O(1) space
3: 
5:
-9:
1: 


Single pass Solution: Check the current index, versus the sum of current index plus the value before
[3, 8, -1, 1, 4, 2, 5, 9, 16, 19, 10, 16, 19, 20]




*/

function kadanesAlgorithm(array) {
  // keep track of most recent sum
  let recentSum = 0;
  // keep track of the max
  let max = 0;

  // for loop to iterate through the array
  for (let i = 0; i < array.length; i++) {
    recentSum = Math.max(recentSum + array[i], array[i]);
    max = Math.max(recentSum, max);
  }

  return max;
}

const arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

console.log(kadanesAlgorithm(arr));
