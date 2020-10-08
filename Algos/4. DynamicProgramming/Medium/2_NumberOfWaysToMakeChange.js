// Given an array of distinct positive integers, function that returns number of ways we can reach the target

// n = 6, denoms = [1,5]
// output: 2
// todo: Sort the denoms list in descending order. We do largest possibilities, then go smaller and smaller
function numberOfWaysToMakeChange2(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n]
}



// todo: Brute force recursive solution 5, 1; or 1111
function numberOfWaysToMakeChange(n, denoms) {
  // create variable to store ways
  let ways = 0;
  denoms.sort((a, b) => b - a)
  console.log(denoms)
  // create a recursive helper function that will go through the array, and return everytime that 6 is hit
  function helper(n, denoms, current = 0) {
    // if the current is equal to ways, then get out
    if (current === n) {
      console.log("here")
      ways++;
      return;
    }
    if (current > n) {
      console.log("heree")
      return;
    }
    // iterate throuhg denoms array and update the current -- once we hit the end, we reach the end
    for (let i = 0; i < denoms.length; i++) {
      current = current + denoms[i]
      console.log(current)
      helper(n, denoms, current);
    }
  }
  helper(n, denoms)
  return ways;
}


console.log(numberOfWaysToMakeChange(6, [1, 5]))