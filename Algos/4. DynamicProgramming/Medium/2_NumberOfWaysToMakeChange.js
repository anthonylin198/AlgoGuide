// Given an array of distinct positive integers, function that returns number of ways we can reach the target

// n = 6, denoms = [1,5]
// output: 2
// todo: brute force -- do a recursive solution - iterate through the array with recursive call - imagine a tree structure starting with 1, then 5, etc.. then return whenever we hit out target number



// todo: Do dynamic programming -- keep track of out values from 0 -> n to track number of ways to keep the numbers O(nd) time and O(n) space
function numberOfWaysToMakeChange(n, denoms) {
  // create an empty array of size n + 1: [0,1,2,3,4,5] if n was equal to 5
  const ways = new Array(n + 1).fill(0)
  ways[0] = 1;
  // iterate through the created array
  for (let denom of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (denom <= i) {
        ways[i] += ways[i - denom]
      }
    }
  }
  return ways[n]
}

console.log(numberOfWaysToMakeChange(6, [1, 2, 5]))
