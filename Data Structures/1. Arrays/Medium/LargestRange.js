// Function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in that array




// ! brute force: start from the minum number, look for the most consecutive. Do the next number, then the net, until you reach the max.


// ! Sorting the array in ascending order, then we can just go through it and see the most consecution
function largestRange(arr) {
  arr.sort((a, b) => a - b); // sort the array
  // store the largest number and the largest interval
  let largest = 0;
  let largestInterval = []
  // after sorting, we can iterate through the array
  for (let i = 0; i < arr.length; i++) {
    const startingNum = arr[i]
    let currentLength = 1;
    // count the longest streak, 
    while ((arr[i + 1] - arr[i]) === 1 || (arr[i + 1] - arr[i]) === 0) {
      if (arr[i + 1] - arr[i] === 0) {
        i++;
      } else {
        i++;
        currentLength++;
      }
    }
    if (currentLength > largest) {
      largest = currentLength
      largestInterval = [startingNum, arr[i]]
    }
  }
  return largestInterval
}

// console.log(largestRange([
//   0,
//   9,
//   19,
//   -1,
//   18,
//   17,
//   2,
//   10,
//   3,
//   12,
//   5,
//   16,
//   4,
//   11,
//   8,
//   7,
//   6,
//   15,
//   12,
//   12,
//   2,
//   1,
//   6,
//   13,
//   14
// ]))



// ! AlgoExpert solution with cache - O(n) time and O(n) space
function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  // store all numbers into a cache
  const nums = {};
  for (const num of array) {
    nums[num] = true;
  }

  // iterate through the array, and then check left and check right
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
    bestRange = [left + 1, right - 1];
  }
  return bestRange;
}
