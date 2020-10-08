// Given an array of distinct positive integers, function that returns number of ways we can reach the target

// n = 6, denoms = [1,5]
// output: 2
// todo: brute force -- do a recursive solution - iterate through the array with recursive call - imagine a tree structure starting with 1, then 5, etc.. then return whenever we hit out target number



// todo: Do dynamic programming -- keep track of out values from 0 -> n to track number of ways to keep the numbers O(nd) time and O(n) space

// n = 6, denoms [1,2] -- iterate through denoms, and at each value, find how many ways to create

// 0, 1, 2, 3, 4, 5, 6
//[1, 1, 2, 2, 3, 3, 4] -- solution in this case would be 4

// pattern: if (denoms[i] <= array[j]) array[j] += array[j - denoms[i]] 
// return the last value inside of our array

// input: n = 6, denoms = [1,2]
// output: 4
function numberOfWaysToMakeChange(n, denoms) {
  // create the array of length n + 1
  const way = new Array(n + 1).fill(0)
  way[0] = 1;
  // outer for loop iterating through the denoms
  for (let denom of denoms) {
    for (let i = 0; i < way.length; i++) {
      if (denom <= i) {
        way[i] += way[i - denom];
      }
    }
  }

  return way[n]
}

console.log(numberOfWaysToMakeChange(6, [1, 2]))
