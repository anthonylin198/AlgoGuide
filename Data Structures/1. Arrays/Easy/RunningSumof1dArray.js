// ! LEETCODE: Running Sum of 1D Array: Given an array nums -- define the running sum. runningSum[i] = sum(nums[0]...nums[i])

// return the running sum of nums

// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]

// ? Brute force Solution: Iterate through the nums array, with each number iterated through, add to a cash, and add to the number.
// ? Make more efficient by just using the previous number in our array, rather than adding everything in the cache every time
function runningSum(nums) {
  // Create an array that will contain the values of the running sum
  const runningSumArr = [nums[0]];
  // create a for loop that will iterate through that array
  for (let i = 1; i < nums.length; i++) {
    // each iteration, we need to add the output the previous number in our running sum array, plus the current in the input nums
    const newElement = runningSumArr[i - 1] + nums[i];
    runningSumArr.push(newElement);
  }
  // return our output array
  return runningSumArr;
}
